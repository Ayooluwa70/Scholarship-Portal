import React from 'react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to the Scholarship Portal</h1>
      <p>Find your future funding today.</p>
      <Link to="/scholarships" style={{ 
        fontSize: "1.2rem", 
        padding: "10px 20px", 
        background: "#003366", 
        color: "white", 
        textDecoration: "none", 
        borderRadius: "5px" 
      }}>
        Browse Scholarships
      </Link>
    </div>
  );
}

export default Home;