import { MdFileUpload } from "react-icons/md";
import Card from "components/card";

const Upload = () => {
  return (
    <Card className="grid h-full w-full grid-cols-1 gap-3 rounded-[20px] bg-white bg-clip-border p-3 font-dm shadow-3xl shadow-shadow-500 dark:!bg-sky-800 dark:shadow-none 2xl:grid-cols-11">
      <div className="col-span-5 h-full w-full rounded-xl bg-lightPrimary dark:!bg-sky-700 2xl:col-span-6">
        <button className="flex h-full w-full flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 py-3 dark:!border-sky-700 lg:pb-0">
          <MdFileUpload className="text-[80px] text-cyan-500 dark:text-white" />
          <h4 className="text-xl font-bold text-cyan-500 dark:text-white">
            Upload Files
          </h4>
          <p className="mt-2 text-sm font-medium text-gray-600">
            PNG, JPG and GIF files are allowed
          </p>
        </button>
      </div>

      <div className="col-span-5 flex h-full w-full flex-col justify-center overflow-hidden rounded-xl bg-white pl-3 pb-4 dark:!bg-sky-800">
        <h5 className="text-left text-xl font-bold leading-9 text-sky-700 dark:text-white">
          Complete Your Profile
        </h5>
        <p className="leading-1 mt-2 text-base font-normal text-gray-600">
          Stay on the pulse of distributed projects with an anline whiteboard to
          plan, coordinate and discuss
        </p>
        <button className="linear mt-4 flex items-center justify-center rounded-xl bg-cyan-500 px-2 py-2 text-base font-medium text-white transition duration-200 hover:bg-cyan-600 active:bg-cyan-700 dark:bg-cyan-400 dark:text-white dark:hover:bg-cyan-300 dark:active:bg-cyan-200">
          Publish now
        </button>
      </div>
    </Card>
  );
};

export default Upload;
