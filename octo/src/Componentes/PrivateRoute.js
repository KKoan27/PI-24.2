import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Não foi possível acessar este recurso. Faça login primeiro.');
    return <Navigate to="/" />;
  }

  return children;
};


export default PrivateRoute;