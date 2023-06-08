import React from "react";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import Modal from "components/modal";
import { MdFileUpload } from "react-icons/md";
import { api } from "utils/api";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import FileUpload from "components/fields/dragAndDropInput";

const Banner = ({avatar, lastName, firstName, role, username, status}: BannerProps) => {
  const [image, setImage] = React.useState({
    preview: "",
    raw: null,
  })

  const [cookies] = useCookies(["token", "slug", "id"]);

  const handleUpload = async () => {
    try {
      toast.loading("Uploading...");
      const formData = new FormData();
      formData.append("avatar", image.raw);
      const response = await api.put(`/${cookies.slug}/users/${cookies.id}`, formData, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      const { data: responseData } = response.data;
      toast.dismiss();
      toast.success("Profile updated successfully");
      setImage({
        preview: "",
        raw: null,
      })
      return responseData;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      toast.error(errorMessage);
      throw new Error(errorMessage);
    }
  }

  const capitalizeFirstLetter = (string: string) => {
    if (string === undefined) return;
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-sky-700">
          <img className="h-full w-full rounded-full" src={avatar} alt="" />
        </div>
        <Modal
          button={<button className="text-sm font-bold text-white">Edit</button>}
          classNames="py-2 left-0 right-0 w-full"
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          onClose={() => {}}
          handleUpload={handleUpload}
          children={
            <div className="flex w-[360px] h-[100%] flex-col gap-3 rounded-[10px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-sky-700 dark:text-white dark:shadow-none sm:w-[460px]">
              {image.preview ? (
                <img className="h-[200px] w-full rounded-xl" src={image.preview} alt="" />
              ) : (
                <FileUpload maxFiles={1} size={10} formats={["png", "jpg", "gif", 'jpeg']} setImage={setImage} />
              )}
            </div>
          }
        />

      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-sky-700 dark:text-white">
          {capitalizeFirstLetter(firstName)} {capitalizeFirstLetter(lastName)}
        </h4>
        <p className="text-base font-normal text-gray-600">{role}</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-sky-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-sky-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-sky-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
