import React, { createContext, useState } from 'react';

interface UserContextType {
  userInfo: any;
  setUserInfo: (data: any) => void;
  message: string;
  setMessage: (message: string) => void;
  focusedInput: boolean;
  setFocusedInput: (focused: boolean) => void;
}

export const UserContext = createContext<UserContextType>({
  userInfo: {},
  setUserInfo: () => {},
  message: '',
  setMessage: () => {},
  focusedInput: false,
  setFocusedInput: () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState('');
  const [focusedInput, setFocusedInput] = useState<boolean>(false);

  console.log('message: ', message)

  console.log(userInfo)

  return (
    <UserContext.Provider value={
      {
        userInfo,
        setUserInfo,
        message,
        setMessage,
        focusedInput,
        setFocusedInput
      }}>
      {children}
    </UserContext.Provider>
  );
}