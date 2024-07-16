import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";


import DateComponent from "../components/DateComponent";
import TimeComponent from "../components/TimeComponent";
import axios from "axios";




const Layout = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {

  const checkLoggedInStatus = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, {
        withCredentials: true
      });
      console.log('Verification response:', response);
      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (error) {
      console.error('Verification error:', error);
      setLoggedIn(false);
    }
  };

  checkLoggedInStatus();
}, [location]);

return (
    <>
<header>
 
<div className="top-header">
    <span>WELCOME TO NEWSPULSE</span>
    <br />
    <span>Craft naratives that ignite inspiration</span>
    <br />
    knowledge , and entertainment...
    </div>
    <div className="date-time-box">
            <DateComponent />
            <TimeComponent />
          
          </div>
        
    <div className="container">
    <h2>NewsPulse</h2>
   
<nav className="headerSecond">
    <ul>
    <li>
            <Link to="/" className="custom-link">Home</Link>
          </li>
         
          <li>
            <Link to="/authors" className="custom-link" >Authors</Link>
          </li>
        
         <li>
          <Link to="/articles" className="custom-link">Articles</Link>
          </li>
          
          <li>
            <Link to="/signup" className="custom-link">SignUp</Link>
          </li>

        {
            loggedIn ? ( <li>
            <Link to="/logout" className="custom-link">Logout</Link>
          </li>
          ) : (<li>
            <Link to="/login" className="custom-link">Login</Link>
          </li> )
        }


          
    </ul>
          
       
      </nav>
</div>


      
</header>

<div className="main-content">
       
        <div className="content">
    
<Outlet />
      
      </div>
      </div>
      <footer>
      <div className="copyright">
        <h2>NewsPulse</h2>
        <span>copyright </span>
        <span className="material-symbols-outlined">
          copyright
        </span>
        <span>2024 NewsPulse.Inc</span>
  
      </div>

      <nav className="footerLink">
 
        <li>
            <Link to = "/legalstuff" className="custom-link">Legal Stuff</Link>
        </li>
        <li>
            <Link to ="/privacypolicy" className="custom-link">Privacy Policy</Link>
        </li>
        <li>
            <Link to ="/security" className="custom-link">Security</Link>
        </li>
        <li>
            <Link to ="/websiteaccessibility" className="custom-link">Website Accessibility</Link>
        </li>
        <li>
            <Link to ="/managecookies" className="custom-link">Manage Cookies</Link>
        </li>
 
      </nav>
    
   
    </footer>
      
    </>
  )
};

export default Layout