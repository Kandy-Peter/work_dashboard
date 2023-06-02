import axios from 'axios';
import { useCookies, Cookies } from 'react-cookie';
import { useContext, useState } from 'react';

import { UserContext } from '../context/userContext';

const API_URL = process.env.REACT_APP_API_URL;

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
      await api.post('/password_resets', { email });
    } catch (error) {
      console.log(error)
    }
  };

  const updatePassword = async (password: string, password_confirmation: string, token: string) => {
    try {
      await api.put(`/password_resets/${token}`, { password, password_confirmation });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    login,
    logout,
    resetPassword,
    updatePassword,
  };
};

export default api;

