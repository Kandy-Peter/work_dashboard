import axios from 'axios';
import { useCookies} from 'react-cookie';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/userContext';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

interface ApiResponse<T> {
  status: {
    code: number;
    message: string;
  };
  data: T;
}

const showErrorToast = (message: string) => {
  toast.error(message);
};

const showSuccessToast = (message: string) => {
  toast.success(message);
};

const showLoadingToast = (message: string) => {
  return toast.loading(message);
};

const MAX_COOKIE_AGE = 24 * 60 * 60; // 24 hours

export const useApi = () => {
  const validCookieNames = ['token', 'role', 'authenticated', 'avatar', 'username'];
  const [cookies, setCookie, removeCookie] = useCookies(validCookieNames);
  const { setUserInfo } = useContext(UserContext);

  const navigate = useNavigate();

  const login = async (email: string, password: string): Promise<ApiResponse<any>> => {
    try {
      // Make the login API request
      const loadingToast = showLoadingToast('Logging in...');
      const response = await api.post('/auth/login', { email, password });
      toast.dismiss(loadingToast);
      await showSuccessToast(response.data.status.message);
      
      const { token, data } = response.data
      const { role, avatar, username } = response.data.data;

      const cookiesValues = {
        token,
        role,
        authenticated: true,
        avatar,
        username,
      };

      // Set the token, role, and authenticated cookies
      Object.entries(cookiesValues).forEach(([key, value]) => {
        setCookie(key, value, {
          maxAge: MAX_COOKIE_AGE,
          sameSite: true,
        });
      });

      navigate('/');
      return response.data;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage = error.response?.data?.status?.message || 'An error occurred';
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    // Remove the token, role, and authenticated cookies
    removeCookie('token');
    removeCookie('role');
    removeCookie('authenticated');
    removeCookie('avatar');
    removeCookie('username');
  
    navigate('/auth/sign-in');
    window.location.reload();
  };

  const resetPassword = async (email: string) => {
    try {
      const loadingToast = showLoadingToast('Sending reset password email...');
      const response = await api.post('/password_resets', { email });
      toast.dismiss(loadingToast);
      showSuccessToast(response.data.status.message);
      return response;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage = error.response?.data?.status?.message || 'An error occurred';
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updatePassword = async (password: string, password_confirmation: string, token: string) => {
    try {
      const loadingToast = showLoadingToast('Updating password...');
      const response = await api.put(`/password_resets/${token}`, { password, password_confirmation });
      toast.dismiss(loadingToast);
      showSuccessToast(response.data.status.message);
      navigate('/auth/sign-in');
      return response;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage = error.response?.data?.status?.message || 'An error occurred';
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
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
