import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {
          withCredentials: true
        });
        if (response.status === 200) {
         
          navigate('/login');
        } else {
          console.error('Logout failed:', response.data);
        }
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
}

export default Logout;