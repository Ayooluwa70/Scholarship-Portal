import React, { useState } from 'react';
import scholarships from "../data/scholarship";
import { Link } from "react-router-dom";

function Scholarships() {
  const [search, setSearch] = useState("");

  const filtered = scholarships.filter(s => 
    s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "40px 5%" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", color: "#003366" }}>Available Opportunities</h1>
        <input 
          type="text" 
          placeholder="Search by country or name..." 
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%", maxWidth: "500px", padding: "12px 20px", marginTop: "15px",
            borderRadius: "8px", border: "1px solid #ddd", fontSize: "1rem"
          }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px" }}>
        {filtered.map((s) => (
          <div key={s.id} style={{ 
            background: "#fff", border: "1px solid #eee", padding: "25px", 
            borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.02)"
          }}>
            <span style={{ fontSize: "0.75rem", background: "#eef2ff", color: "#4f46e5", padding: "4px 10px", borderRadius: "15px", fontWeight: "bold" }}>
              {s.category}
            </span>
            <h3 style={{ margin: "15px 0 10px 0", color: "#111" }}>{s.title}</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>📍 {s.country} • 🎓 {s.level}</p>
            <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#d9534f", fontSize: "0.85rem", fontWeight: "600" }}>Ends: {s.deadline}</span>
              <Link to={`/scholarships/${s.id}`} style={{ color: "#007bff", fontWeight: "bold", textDecoration: "none" }}>
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scholarships;