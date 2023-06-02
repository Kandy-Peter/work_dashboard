import React from 'react';
import { Link } from 'react-router-dom';
import InputField from "components/fields/InputField";
import { useParams } from 'react-router-dom';

import { useApi } from '../../utils/api';

const ResetPassword = () => {
  const { updatePassword } = useApi();
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = React.useState<string>('');
  const [password_confirmation, setPasswordConfirmation] = React.useState<string>('');

  const handleChange = (setState: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    if (password !== password_confirmation) {
      alert('Passwords do not match');
      return;
    }

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
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
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
          onChange={handleChange(setPasswordConfirmation)}
        />
        <button
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </div>
    </div>
  )
};

export default ResetPassword;
