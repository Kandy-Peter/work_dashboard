import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useApi } from "../../utils/api"
import { validateEmail, validatePassword } from "utils/InputsValidation";
import RequestForm from "components/request_form";

export default function RequestDemoForm() {
  const { login } = useApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>(""); 
  const [teamSize, setTeamSize] = useState<string>("");
  const [hearAboutUs, setHearAboutUs] = useState<string>("");
  const [isAgreeWithTerms, setIsAgreeWithTerms] = useState<boolean>(false);

  const [error, setError] = useState({
    email: "",
    organizationName: "",
    fullName: "",
    phoneNumber: "",
    teamSize: "",
    hearAboutUs: "",
    isAgreeWithTerms: "",
  })

  const handleChange = (setState: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    if (e.target.id === "email") {
      setError({ ...error, email: validateEmail(e.target.value) })
    } else if (e.target.id === "organizationName" || e.target.id === "fullName") {
      setError({ ...error, [e.target.id]: e.target.value.length < 3 ? `${e.target.id} must be at least 3 characters long` : "" })
    } else if (e.target.id === "phoneNumber") {
      setError({ ...error, [e.target.id]: e.target.value.length < 10 ? `${e.target.id} must be at least 10 characters long` : "" })
    } else if (e.target.id === "teamSize" || e.target.id === "hearAboutUs") {
      setError({ ...error, [e.target.id]: e.target.value.length < 1 ? `${e.target.id} must be at least 1 characters long` : "" })
    } else if (e.target.id === "isAgreeWithTerms") {
      setError({ ...error, [e.target.id]: e.target.checked ? "" : "You must agree with our terms and conditions" })
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
  
    try {
      // await login(email, 
      navigate('/');
    } catch (error: any) {
      console.log(error.response);
      return;
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:items-center bg-lightPrimary">
      {/* Sign in section */}
      <div className="w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-sky-700 dark:text-white">
          Request a free demo
        </h4>
        <p className="mb-4 ml-1 text-base text-gray-600">
          We will get back to you as soon as possible to schedule a demo.
        </p>
        <div className="w-full bg-lightPrimary">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
