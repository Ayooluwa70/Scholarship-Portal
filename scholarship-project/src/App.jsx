import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Scholarships from "./pages/scholarship";
import ScholarshipDetails from "./pages/Scholarshipdetails";

function App() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: "#333" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/scholarships/:id" element={<ScholarshipDetails />} />
      </Routes>
      <footer style={{ textAlign: "center", padding: "40px", color: "#888", fontSize: "0.9rem" }}>
        © 2026 Scholarship Portal. All rights reserved.
      </footer>
    </div>
  );
}

export default App;