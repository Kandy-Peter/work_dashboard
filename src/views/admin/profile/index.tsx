import React from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import EmployeeInfo from "./components/EmployeeInfo";
import Upload from "./components/Upload";
import { api } from "utils/api";

const ProfileOverview = () => {
  const [cookies] = useCookies(["token", "slug", "name", "id"]);

  const [userInfo, setUserInfo] = React.useState<any>({});

  const getUserInfo = async () => {
    try {
      toast.loading("Loading...");
      const response = await api.get(`/${cookies.slug}/profile`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      const { data } = response
      toast.dismiss();
      setUserInfo(data);
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updateUserInfo = async (_data: any) => {
    try {
      toast.loading("Updating...");
      await api.put(`/${cookies.slug}/users/${cookies.id}`, _data, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      toast.dismiss();
      window.location.reload();
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  };

  React.useEffect(() => {
    getUserInfo();
  } , []);

  console.log(userInfo)

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner
            avatar={userInfo?.avatar}
            firstName={userInfo?.first_name}
            lastName={userInfo?.last_name}
            bio={userInfo?.bio}
            role={userInfo?.role}
          />
        </div>

        <div className="col-span-3 lg:!mb-0">
          <EmployeeInfo
            postion= {userInfo?.position}
            department= {userInfo?.departments && userInfo?.departments[0]?.name}
            department2= {userInfo?.departments && userInfo?.departments[1]?.name}
            employment_date= {userInfo?.employment_date}
            employee_id= {userInfo?.employee_id}
            branch= {cookies.name}
            salary= {userInfo?.salary}

          />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General
            userData={userInfo}
            updateUserInfo={updateUserInfo}
          />
        </div>
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-4">
          <Project />
        </div>
        <div className="col-span-5 lg:col-span-12 lg:mb-0 3xl:!col-span-3">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
