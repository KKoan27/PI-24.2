import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {

      navigate('/?showModal=true');
    }
  }, [token, navigate]);

  if (!token) {

    return null;
  }

  return children;
};

export default PrivateRoute;
