import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import AxiosRequest from '../utils/axios'

type AuthContextType = {
  token: string | null;
  authenticated: boolean;
  role: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  authenticated: false,
  role: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'authenticated', 'role']);
  const [token, setToken] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);

  const login = async (email: string, password: string) => {
    try {
      const { data, error, isLoading } = AxiosRequest<LoginResponse>({
        method: 'POST',
        url: '/auth/login',
        data: { email, password },
      });
  
      if (isLoading) {
        console.log('Loading...');
      }
  
      if (error) {
        console.log(error);
      }
  
      if (data) {
        const { token } = data;
        const { role } = data.data;
        setCookie('token', token, { path: '/' });
        setCookie('authenticated', true, { path: '/' });
        setCookie('role', role, { path: '/' });
        setToken(token);
        setAuthenticated(true);
        setRole(role);
        setUserInfo(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userInfo)

  const logout = () => {
    removeCookie('token', { path: '/' });
    removeCookie('authenticated', { path: '/' });
    removeCookie('role', { path: '/' });
    setToken(null);
    setAuthenticated(false);
    setRole(null);
  };

  const authContextValue: AuthContextType = {
    token,
    authenticated,
    role,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
