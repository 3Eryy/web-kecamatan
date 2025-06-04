import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/helper';

type Props = {
  children: React.ReactNode;
};


const AuthMiddleware: React.FC<Props> = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
