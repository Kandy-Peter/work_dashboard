import ComplexNavbar from "components/navbar/home_navbar";
import PresentationSection from "views/Home/presentation";
import BannerSection from "views/Home/banner";
import RequestFormSection from "views/Home/request_form";
import RessourcesSwitcherSection from "views/Home/switcher";
import SecuritySection from "views/Home/security";
import WhyHeriSection from "views/Home/why_heri";

const Home = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="h-full w-full bg-lightPrimary dark:!bg-sky-900">
          <div className="h-full scroll-smooth">
            <ComplexNavbar />
            <PresentationSection />
            <BannerSection />
            <RequestFormSection />
            <RessourcesSwitcherSection />
            <SecuritySection />
            <WhyHeriSection />
          </div>
      </div>
    </div>
  );
}

export default Home;