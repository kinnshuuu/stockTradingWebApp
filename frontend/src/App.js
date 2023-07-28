import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';

function App() {
  // Placeholder for the isLoggedIn variable, replace with the actual implementation
  const isLoggedIn = true;

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} /> {/* Add a route for the root path */}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />

          {isLoggedIn && (
            <>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/logout" element={<Logout />} />
            </>
          )}
        </Routes>
      </>
    </Router>
  );
}

// Define a Home component or any other component you want to render for the root path
function Home() {
  return <div>Welcome to the homepage!</div>;
}

export default App;
