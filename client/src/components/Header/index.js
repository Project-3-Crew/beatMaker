import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
// import {BsFillAlarmFill} from "react-icons/bs";
import "../styles/Header.css";


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    
    <header className="text-light mb-4 py-3 flex-row align-center">
      <div> </div>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0 music-icon">Beat Maker</h1>
            
          </Link>
        
          <p className="m-0 subhead">Make Beats, Not War!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Sounds">
                {Auth.getProfile().data.username}'s Sounds
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/BeatBlogs">
                BBlog
              </Link>
              
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
    
  );
};

export default Header;
