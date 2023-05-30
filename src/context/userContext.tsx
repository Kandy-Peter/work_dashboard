import React, { createContext, useState } from 'react';

interface UserContextType {
  userInfo: any;
  setUserInfo: (data: any) => void;
  message: string;
  setMessage: (message: string) => void;
}

export const UserContext = createContext<UserContextType>({
  userInfo: {},
  setUserInfo: () => {},
  message: '',
  setMessage: () => {}
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [message, setMessage] = useState('');

  console.log('message: ', message)

  console.log(userInfo)

  return (
    <UserContext.Provider value={
      {
        userInfo,
        setUserInfo,
        message,
        setMessage
      }}>
      {children}
    </UserContext.Provider>
  );
}