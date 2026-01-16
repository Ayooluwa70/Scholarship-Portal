import { useParams, Link } from "react-router-dom";
import scholarships from "../data/scholarship";

function ScholarshipDetails() {
  const { id } = useParams();
  const s = scholarships.find(item => item.id === parseInt(id));

  if (!s) return <div style={{ textAlign: "center", padding: "100px" }}>Scholarship not found</div>;

  return (
    <div style={{ maxWidth: "700px", margin: "60px auto", padding: "0 20px" }}>
      <Link to="/scholarships" style={{ color: "#666", textDecoration: "none" }}>← Back to all scholarships</Link>
      <div style={{ marginTop: "30px", background: "#fff", padding: "40px", borderRadius: "16px", border: "1px solid #eee" }}>
        <h1 style={{ color: "#003366", fontSize: "2.2rem", margin: "0 0 20px 0" }}>{s.title}</h1>
        <div style={{ marginBottom: "30px", display: "flex", gap: "15px" }}>
           <div style={{ background: "#f8f9fa", padding: "10px 15px", borderRadius: "8px", fontSize: "0.9rem" }}><strong>📍 {s.country}</strong></div>
           <div style={{ background: "#f8f9fa", padding: "10px 15px", borderRadius: "8px", fontSize: "0.9rem" }}><strong>🎓 {s.level}</strong></div>
        </div>
        <p style={{ lineHeight: "1.8", color: "#444", fontSize: "1.1rem" }}>{s.description}</p>
        <div style={{ marginTop: "40px", padding: "20px", background: "#fff5f5", borderRadius: "10px" }}>
          <p style={{ margin: 0 }}><strong>Deadline:</strong> {s.deadline}</p>
        </div>
        <a href={s.link} target="_blank" style={{ 
          display: "block", textAlign: "center", background: "#003366", color: "#fff", 
          padding: "15px", borderRadius: "8px", marginTop: "30px", textDecoration: "none", fontWeight: "bold"
        }}>
          Apply on Official Website
        </a>
      </div>
    </div>
  );
}

export default ScholarshipDetails;