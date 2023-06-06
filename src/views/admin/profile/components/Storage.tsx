import Card from "components/card";

const Storage = ({postion, department, department2, employment_date, employee_id, branch}: BannerProps) => {
  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="mb-8 mt-2 w-full">
        <h4 className="px-2 text-xl font-bold text-sky-700 dark:text-white">
          Employee Informations
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-5 px-2">
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Branch: <span className="text-sm ml-2 text-gray-700 dark:text-white">{branch}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Position: <span className="text-sm ml-2 my-4 text-gray-700 dark:text-white">{postion}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Department: <span className="text-sm ml-2 text-gray-700 dark:text-white">{department}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Second Department: <span className="text-sm ml-2 text-gray-700 dark:text-white">{department2}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Employment date: <span className="text-sm ml-2 text-gray-700 dark:text-white">{employment_date}</span>
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            Employee ID: <span className="text-sm ml-2 text-gray-700 dark:text-white">{employee_id}</span>
          </p>
      </div>
    </Card>
  );
};

export default Storage;
