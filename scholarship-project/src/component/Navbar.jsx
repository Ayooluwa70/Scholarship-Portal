import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ 
      display: "flex", justifyContent: "space-between", alignItems: "center", 
      padding: "15px 5%", backgroundColor: "#fff", borderBottom: "1px solid #eee",
      position: "sticky", top: 0, zIndex: 100 
    }}>
      <Link to="/" style={{ fontSize: "1.4rem", fontWeight: "800", color: "#003366", textDecoration: "none" }}>
        SCHOLAR<span style={{ color: "#007bff" }}>INFO</span>
      </Link>
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#555", fontWeight: "500" }}>Home</Link>
        <Link to="/scholarships" style={{ 
          textDecoration: "none", backgroundColor: "#003366", color: "#fff", 
          padding: "8px 18px", borderRadius: "6px", fontWeight: "500" 
        }}>Explore</Link>
      </div>
    </nav>
  );
};

export default Navbar;