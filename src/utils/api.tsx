import axios from "axios";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

export const api = axios.create({
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
  const validCookieNames = [
    "token",
    "role",
    "authenticated",
    "avatar",
    "username",
    "slug",
    "name",
    "id",
    "status"
  ];
  const [cookies, setCookie, removeCookie] = useCookies(validCookieNames);

  const navigate = useNavigate();

  const login = async (
    email: string,
    password: string
  ): Promise<ApiResponse<any>> => {
    try {
      // Make the login API request
      const loadingToast = showLoadingToast("Logging in...");
      const response = await api.post("/auth/login", { email, password });
      toast.dismiss(loadingToast);
      await showSuccessToast(response.data.status.message);

      const { token } = response.data;
      const { role, avatar, username, id, status } = response.data.data;
      const { slug, name } = response.data.data.organization;

      const cookiesValues = {
        token,
        role,
        authenticated: true,
        avatar,
        username,
        slug,
        name,
        id,
        status
      };

      // Set the token, role, and authenticated cookies
      Object.entries(cookiesValues).forEach(([key, value]) => {
        setCookie(key, value, {
          maxAge: MAX_COOKIE_AGE,
          sameSite: true,
        });
      });

      navigate("/");
      return response.data;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = () => {
    // Remove the token, role, and authenticated cookies
    Object.keys(cookies).forEach((key) => {
      removeCookie(key);
    });

    navigate("/auth/sign-in");
    window.location.reload();
  };

  const resetPassword = async (email: string) => {
    try {
      const loadingToast = showLoadingToast("Sending reset password email...");
      const response = await api.post("/password_resets", { email });
      toast.dismiss(loadingToast);
      showSuccessToast(response.data.status.message);
      return response;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updatePassword = async (
    password: string,
    password_confirmation: string,
    token: string
  ) => {
    try {
      const loadingToast = showLoadingToast("Updating password...");
      const response = await api.put(`/password_resets/${token}`, {
        password,
        password_confirmation,
      });
      toast.dismiss(loadingToast);
      showSuccessToast(response.data.status.message);
      navigate("/auth/sign-in");
      return response;
    } catch (error: any) {
      toast.dismiss();
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getUserProfile = async (token: string, organization_id: string) => {
    try {
      const response = await api.get(`/${organization_id}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(token)
      const { data: responseData } = response.data;

      return responseData;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const updateRole = async (data: any, token: string) => {
    try {
      const response = await api.put("/:organization_id/role", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data: responseData } = response.data;
      showSuccessToast(response.data.status.message);
      return responseData;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.status?.message || "An error occurred";
      showErrorToast(errorMessage);
      throw new Error(errorMessage);
    }
  };

  return {
    login,
    logout,
    resetPassword,
    updatePassword,
    getUserProfile,
    // updateUserInfo,
    updateRole,
  };
};

export default api;
