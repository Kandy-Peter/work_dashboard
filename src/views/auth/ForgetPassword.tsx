import React from 'react';
import InputField from "components/fields/InputField";

import { useApi } from '../../utils/api';
import { validateEmail } from "utils/InputsValidation";

const ForgetPassword = () => {
  const { resetPassword } = useApi();
  const [email, setEmail] = React.useState<string>('');
  const [error, setError] = React.useState<string>('');

  const handleChangeEmail = (setState: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    setError(validateEmail(e.target.value));
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
    } catch (error: any) {
      return;
    }
  };

  return (
    <div
      className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Forget Password
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email to reset your password!
          <br />
          You will receive an email with instructions on how to reset your password in a few moment.
        </p>
        <InputField
          variant="auth"
          extra="mb-3"
          label="Email*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
          value={email}
          error={error}
          onChange={handleChangeEmail(setEmail)}
        />
        <button
          className="linear mt-2 w-full rounded-xl bg-cyan-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-cyan-600 active:bg-cyan-700 dark:bg-cyan-400 dark:text-white dark:hover:bg-cyan-300 dark:active:bg-cyan-200"
          onClick={handleSubmit}
        >
          Send Email
        </button>
      </div>
    </div>
  )
};

export default ForgetPassword;
    