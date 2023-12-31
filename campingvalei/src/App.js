import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './componenten/login'; // Corrected import path

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* Route Configuration */}
        <Routes>
        
          <Route path="/login" element={<LoginPage />} /> {/* Route for the Login component */}
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
