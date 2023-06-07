import React, { useState } from "react";
import toast from "react-hot-toast";
import Card from "components/card";
import CardEditMenu from "components/card/CardEditMenu";
import CardSaveMenu from "components/card/CardSaveMenu";
import readOrEditInput from "components/fields/ReadInputOrText";

interface GeneralProps {
  userData: any;
  setUserData: any;
}

const General = ({ userData, setUserData }: GeneralProps) => {
  // make the card editable for the user to update his information
  const [isEditable, setIsEditable] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState(userData);

  function handleUpdate() {
    // send the data to the backend
    // if the request is successful, update the state
    // if not, show an error message
    console.log(updatedUserData);
  }

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedUserData({ ...updatedUserData, [e.target.id]: e.target.value });
  };

  const handleSave = () => {
    toast.loading("Updating...");
    setIsEditable(false);
    handleUpdate();
    toast.dismiss();
    toast.success("Updated successfully");
  };

  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="ml-auto border-green-200 dark:border-gray-700">
        {!isEditable ? <CardEditMenu onEdit={handleEdit} />
        :
        <CardSaveMenu onCancel={handleCancel} onSave={handleSave}/>
        }
      </div>
      {/* Header */}
      <div className="mb-8 mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-sky-700 dark:text-white">
          General Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          Bio:
          {readOrEditInput(isEditable, userData?.bio, onChange, "bio")}
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col justify-top rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Personal Informations:</p>

          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Age:
            <span className="text-sm ml-2 text-gray-700 dark:text-white">{userData.age}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Birthday:
            {readOrEditInput(isEditable, userData?.date_of_birth, onChange, "date_of_birth")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Marital Status:
            {readOrEditInput(isEditable, userData?.marital_status, onChange, "marital_status")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Gender:
            {readOrEditInput(isEditable, userData?.gender, onChange, "gender")}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Identity</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Country:
            {readOrEditInput(isEditable, userData?.country, onChange, "country")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            City:
            {readOrEditInput(isEditable, userData?.city, onChange, "city")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Nationality:
            {readOrEditInput(isEditable, userData?.nationality, onChange, "nationality")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            National ID: 
            {readOrEditInput(isEditable, userData?.national_id, onChange, "national_id")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Address:
            {readOrEditInput(isEditable, userData?.address, onChange, "address")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Zip:
            {readOrEditInput(isEditable, userData?.zip, onChange, "zip")}
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Contacts</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Work Email: <span className="text-sm ml-2 text-gray-700 dark:text-white">{userData?.email}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Personal Email:
            {readOrEditInput(isEditable, userData?.personal_email, onChange, "personal_email")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Phone Number:
            {readOrEditInput(isEditable, userData?.phone_number, onChange, "phone_number")}
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Education</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Level:
            {readOrEditInput(isEditable, userData?.education, onChange, "education")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            University:
            {readOrEditInput(isEditable, userData?.university, onChange, "university")}
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Field:
            {readOrEditInput(isEditable, userData?.field_of_study, onChange, "field_of_study")}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
