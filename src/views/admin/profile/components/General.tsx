import Card from "components/card";
import CardEditMenu from "components/card/CardEditMenu";
const General = ({
  education,
  university,
  field_of_study,
  bio,
  birthday,
  nationality,
  national_id,
  age,
  marital_status,
  country,
  city,
  gender,
  phone_number,
  address,
  zip_code,
  personal_email,
  email,
}: BannerProps) => {
  return (
    <Card extra={"w-full h-full p-3"}>
      <div className="ml-auto">
        <CardEditMenu />
      </div>
      {/* Header */}
      <div className="mb-8 mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-sky-700 dark:text-white">
          General Information
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">Bio: {bio}</p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
        <div className="flex flex-col justify-top rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Personal Informations:</p>

          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Age: <span className="text-sm ml-2 text-gray-700 dark:text-white">{age}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Birthday: <span className="text-sm ml-2 text-gray-700 dark:text-white">{birthday}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Marital Status: <span className="text-sm ml-2 text-gray-700 dark:text-white">{marital_status}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Gender: <span className="text-sm ml-2 text-gray-700 dark:text-white">{gender}</span>
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Identity</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Country: <span className="text-sm ml-2 text-gray-700 dark:text-white">{country}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            City: <span className="text-sm ml-2 text-gray-700 dark:text-white">{city}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Nationality: <span className="text-sm ml-2 text-gray-700 dark:text-white">{nationality}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            National ID: <span className="text-sm ml-2 text-gray-700 dark:text-white">{national_id}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Address: <span className="text-sm ml-2 text-gray-700 dark:text-white">{address}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Zip: <span className="text-sm ml-2 text-gray-700 dark:text-white">{zip_code}</span>
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Contacts</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Work Email: <span className="text-sm ml-2 text-gray-700 dark:text-white">{email}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Personal Email: <span className="text-sm ml-2 text-gray-700 dark:text-white">{personal_email}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Phone Number: <span className="text-sm ml-2 text-gray-700 dark:text-white">{phone_number}</span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
          <p className="text-sm text-sky-800 mb-2">Education</p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Level: <span className="text-sm ml-2 text-gray-700 dark:text-white">{education}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            University: <span className="text-sm ml-2 text-gray-700 dark:text-white">{university}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Field: <span className="text-sm ml-2 text-gray-700 dark:text-white">{field_of_study}</span>
          </p>
        </div>
      </div>
    </Card>
  );
};

export default General;
