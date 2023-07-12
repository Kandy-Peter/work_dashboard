import ProgressImage from "assets/img/home/section_attendance.png";


const Offboarding = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-sky-900">
        <div className="h-full">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full">
            <div>
              <img src={ProgressImage} alt="Progress" className="w-full h-full" />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 lg:px-40 py-4">
              <p className="text-3xl font-bold text-center text-cyan-900 dark:text-white"> Offboarding </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offboarding;