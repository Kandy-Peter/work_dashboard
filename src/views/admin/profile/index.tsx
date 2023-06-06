import React from "react";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";

import Banner from "./components/Banner";
import General from "./components/General";
import Notification from "./components/Notification";
import Project from "./components/Project";
import Storage from "./components/Storage";
import Upload from "./components/Upload";
import { api } from "utils/api";

const ProfileOverview = () => {
  const [cookies] = useCookies(["token", "slug", "name"]);

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

  React.useEffect(() => {
    getUserInfo();
  } , []);

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
          <Storage />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">
          <Upload />
        </div>
      </div>
      {/* all project & ... */}

      <div className="grid h-full grid-cols-1 gap-5 lg:!grid-cols-12">
        <div className="col-span-5 lg:col-span-6 lg:mb-0 3xl:col-span-5">
          <General
            education={userInfo?.education}
            university={userInfo?.university}
            field_of_study={userInfo?.field_of_study}
            bio={userInfo?.bio}
            birthday={userInfo?.date_of_birth}
            nationality={userInfo?.nationality}
            national_id={userInfo?.national_id}
            age={userInfo?.age}
            marital_status={userInfo?.marital_status}
            country={userInfo?.country}
            city={userInfo?.city}
            gender={userInfo?.gender}
            phone_number={userInfo?.phone_number}
            address={userInfo?.address}
            zip_code={userInfo?.zip}
            personal_email={userInfo?.personal_email}
            email={userInfo?.email}
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
