import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "components/fields/InputField";
import Checkbox from "components/checkbox";
import { useApi } from "../../utils/api"
import { validateEmail, validatePassword } from "utils/InputsValidation";

export default function SignIn() {
  const { login } = useApi();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState({
    email: "",
    password: "",
  })

  /* use react curring to pass the email and password to the login function */
  const handleChange = (setState: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    if (e.target.id === "email") {
      setError({ ...error, email: validateEmail(e.target.value) })
    }
    if (e.target.id === "password") {
      setError({ ...error, password: validatePassword(e.target.value) })
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
  
    try {
      await login(email, password);
      navigate('/');
    } catch (error: any) {
      console.log(error.response);
      return;
    }
  };

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-sky-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your orgnaisation email and password to sign in!
        </p>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-sky-700" />
          <p className="text-base text-gray-600 dark:text-white"> kazi </p>
          <div className="h-px w-full bg-gray-200 dark:bg-sky-700" />
        </div>
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="email"
          value={email}
          error={error.email || ""}
          onChange={handleChange(setEmail)}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          value={password}
          error={error.password || ""}
          onChange={handleChange(setPassword)}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-sky-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <Link to="/password_reset">
            <button className="text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-white" type="button">
              Forgot Password?
            </button>
          </Link>
        </div>
        <button
          className="linear mt-2 w-full rounded-xl bg-cyan-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-cyan-600 active:bg-cyan-700 dark:bg-cyan-400 dark:text-white dark:hover:bg-cyan-300 dark:active:bg-cyan-200"
          onClick={handleSubmit}
          // disabled={error ? true : false}
        >
          Sign In
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-sky-700 dark:text-gray-600">
            Request a demo?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-cyan-700 hover:text-cyan-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
