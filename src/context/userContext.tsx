import React, { createContext, useState } from 'react';

interface UserContextType {
  userInfo: any;
  setUserInfo: (data: any) => void;
  theme: string;
  setTheme: (data: string) => void;
}

export const UserContext = createContext<UserContextType>({
  userInfo: {},
  setUserInfo: () => {},
  theme: '',
  setTheme: () => {},
});

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [theme, setTheme] = useState('light');

  console.log(userInfo)

  return (
    <UserContext.Provider value={
      {
        userInfo,
        setUserInfo,
        theme,
        setTheme
      }}>
      {children}
    </UserContext.Provider>
  );
}