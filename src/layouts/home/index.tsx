import ComplexNavbar from "components/navbar/home_navbar";
import Presentation from "views/Home/presentation";
import Banner from "views/Home/banner";
import RequestForm from "views/Home/request_form";
import RessourcesSwitcher from "views/Home/switcher";

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-sky-900">
          <div className="h-full">
            <ComplexNavbar />
            <Presentation />
            <Banner />
            <RequestForm />
            <RessourcesSwitcher />
          </div>
      </div>
    </div>
  );
}

export default Home;