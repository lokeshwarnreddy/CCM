import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AdminProtectedRoute = ({ children }) => {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session via backend cookie
    axios.get('http://localhost:5000/api/admin-protected', { withCredentials: true })
      .then(res => {
        if (res.data.success) setIsAuthenticated(true);
        setAuthChecked(true);
      })
      .catch(() => {
        setIsAuthenticated(false);
        setAuthChecked(true);
      });
  }, []);

  if (!authChecked) return null; // or a loading spinner
  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default AdminProtectedRoute;
