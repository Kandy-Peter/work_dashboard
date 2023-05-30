import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useContext, useState } from 'react';

import { UserContext } from '../context/userContext';

const API_URL = 'http://localhost:4000/api/v1';

const api = axios.create({
  baseURL: API_URL,
});

export const useApi = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token', 'role', 'authenticated']);
  const { setUserInfo, setMessage } = useContext(UserContext);

  const login = async (email: string, password: string) => {
    try {
      // Make the login API request
      const response = await api.post('/auth/login', { email, password });

      // Set the token, role, and authenticated cookies
      setCookie('token', response.data.token);
      setCookie('role', response.data.data.role);
      setCookie('authenticated', true);
      setUserInfo(response.data.data);
      setMessage(response.data.status.message);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // Remove the token, role, and authenticated cookies
    removeCookie('token');
    removeCookie('role');
    removeCookie('authenticated');
  };

  const resetPassword = async (email: string) => {
    try {
      // Make the reset password API request
      await api.post('/reset-password', { email });
    } catch (error) {
      // Handle reset password error
    }
  };

  return {
    login,
    logout,
    resetPassword,
  };
};

export default api;

