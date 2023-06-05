import React from 'react';
import InputField from "components/fields/InputField";
import { useParams } from 'react-router-dom';

import { useApi } from '../../utils/api';
import { validatePassword, validatePasswordConfirmation } from "utils/InputsValidation";

const ResetPassword = () => {
  const { updatePassword } = useApi();

  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = React.useState<string>('');
  const [password_confirmation, setPasswordConfirmation] = React.useState<string>('');
  const [error, setError] = React.useState({
    password: '',
    password_confirmation: '',
  })
  

  const handleChange = (setState: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
    if (e.target.id === "password") {
      setError({ ...error, password: validatePassword(e.target.value) })
    }

    if (e.target.id === 'password_confirmation') {
      setError({ ...error, password_confirmation: validatePasswordConfirmation(e.target.value, password_confirmation) })
    }
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      await updatePassword(password, password_confirmation, token);
    } catch (error) {
      console.log(error);
    }
    setPassword('');
    setPasswordConfirmation('');
  }

  return (
    <div
      className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-sky-700 dark:text-white">
          Reset Password
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your new password to reset your password!
        </p>
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password*"
          placeholder="Enter your new password"
          id="password"
          type="password"
          value={password}
          error={error.password}
          onChange={handleChange(setPassword)}
        />
        <InputField
          variant="auth"
          extra="mb-3"
          label="Password Confirmation*"
          placeholder="Password Confirmation"
          id="password_confirmation"
          type="password"
          value={password_confirmation}
          error={error.password_confirmation}
          onChange={handleChange(setPasswordConfirmation)}
        />
        <button
          className="linear mt-2 w-full rounded-xl bg-cyan-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-cyan-600 active:bg-cyan-700 dark:bg-cyan-400 dark:text-white dark:hover:bg-cyan-300 dark:active:bg-cyan-200"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </div>
    </div>
  )
};

export default ResetPassword;
