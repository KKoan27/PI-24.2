import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const dados = localStorage.getItem('dados');
  const navigate = useNavigate();

  useEffect(() => {
    if (!dados) {

      navigate('/?showModal=true');
    }
  }, [dados, navigate]);

  if (!dados) {

    return null;
  }

  return children;
};

export default PrivateRoute;
