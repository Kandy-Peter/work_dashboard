import {  RouteProps, Navigate } from 'react-router-dom';
import React from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';


type ProtectedRouteProps = {
  children: React.ReactNode;
} & RouteProps;

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, ...rest }) => {
  const [cookies] = useCookies(['token', 'role', 'authenticated']);

  const isAuthenticated = cookies.authenticated && cookies.token
  const token = cookies.token;

  if (!isAuthenticated || !token) {
    return <Navigate to="/auth/sign-in" />;
  }

  try {
    const decodedToken: any = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      return <Navigate to="/auth/sign-in" />;
    }
  } catch (error) {
    return <Navigate to="/auth/sign-in" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ProtectedRoute;
