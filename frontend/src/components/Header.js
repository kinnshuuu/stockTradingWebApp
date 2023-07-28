import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  return (
    <header>
      <nav>
        <ul>
          {isLoggedIn ? (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
