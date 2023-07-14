import authImg from "assets/svg/bgDemo.png";
import demoImg from "assets/svg/africaImg2.png";
import { Toaster } from "react-hot-toast";
import RequestDemoForm from "views/GetStarted";
import Logo from  "assets/img/dashboards/heri_logo.png"
import WhiteLogo from  "assets/img/home/white_logo.png"

export default function DemoFormPage() {

  return (
    <div>
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
      <div className="relative float-right h-full min-h-screen w-full !bg-lightPrimary">
        <main className={`mx-auto min-h-screen`}>
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex pl-5 pr-5 md:pr-0 md:pl-12 lg:pl-0 xl:max-w-full">
                <div className="hidden h-full min-h-screen md:flex lg:flex">
                    <div
                      className="absolute top-0 left-0 w-[25%] flex h-full items-end justify-center bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${authImg})` }}
                    >
                      <div className="absolute top-0 left-0 w-full flex flex-col justify-start p-10">
                        <a href="/" className="mb-10">
                          <img src={WhiteLogo} alt="logo" className="h-5" />
                        </a>
                        <div className="flex flex-col items-center justify-center mt-[20%]">
                          <h3 className="text-2xl font-bold text-white mb-4">
                            Africa's new era of HR digitalization and automation
                          </h3>
                          <p className="text-white text-sm">
                            Manage your business with our all-in-one platform with a single click and get the best out of your business.
                          </p>
                          <img src={demoImg} alt="demo" className="object-fit w-[75%] mt-20" />
                        </div>
                      </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <nav className="flex items-center justify-between md:justify-end w-full py-7 p-7 lg:px-0">
                    <div className="md:hidden flex items-center justify-start">
                      <a href="/">
                        <img src={Logo} alt="logo" className="h-5" />
                      </a>
                    </div>
                    <div className="flex items-center justify-end space-x-8">
                      <a href="/" className="hidden md:flex text-sm font-medium text-sky-900 hover:text-cyan-500">
                        Home
                      </a>
                      <a href="/auth/sign-in" className="text-sm border-2 border-sky-900 px-4 py-2 rounded-md font-medium text-sky-900 hover:text-cyan-500">
                        Sign in
                      </a>
                    </div>
                  </nav>
                  <RequestDemoForm />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
