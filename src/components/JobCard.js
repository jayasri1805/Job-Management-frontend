import React from "react";

export default function JobCard({ job }) {
  if (!job) return null; // safety check 🔒

  return (
    <div
      className="card h-100 shadow-sm border-0 position-relative"
      style={{ borderRadius: "1rem" }}
    >
      <div className="card-body p-3 p-lg-4 d-flex flex-column">
        {/* Badge (top right corner) */}
        {job.badge && (
          <span
            className="badge position-absolute small"
            style={{
              top: "10px",
              right: "10px",
              background: "#E0ECFF",
              color: "#004AAD",
              borderRadius: "6px",
              fontWeight: 500,
              fontSize: "0.7rem",
              padding: "4px 8px",
            }}
          >
            {job.badge}
          </span>
        )}

        {/* Logo + Title */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={job.logo}
            alt={job.company || "Company Logo"}
            className="rounded-circle p-2"
            style={{
              width: "48px",
              height: "48px",
              background: "#f1f3f5",
              objectFit: "contain",
            }}
          />
          <h6 className="mb-0 fw-semibold ms-3" style={{ fontSize: "1rem" }}>
            {job.title}
          </h6>
        </div>

        {/* Job Info Row */}
        <div
          className="d-flex justify-content-between text-muted mb-3"
          style={{ fontSize: "0.85rem" }}
        >
          {job.experience && (
            <div className="d-flex align-items-center">
              <i className="bi bi-person-workspace me-2 text-primary"></i>
              {job.experience}
            </div>
          )}
          {job.type && (
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt me-2 text-primary"></i>
              {job.type}
            </div>
          )}
          {job.salary && (
            <div className="d-flex align-items-center">
              <i className="bi bi-cash-stack me-2 text-primary"></i>
              {job.salary}
            </div>
          )}
        </div>

        {/* Description */}
        <p
          className="text-secondary mb-4"
          style={{ fontSize: "0.8rem", lineHeight: "1.4", minHeight: 36 }}
        >
          {job.summary}
        </p>

        {/* Apply Button */}
        <button
          className="btn w-100 rounded-3 fw-semibold mt-auto"
          style={{
            background: "#00AAFF",
            border: "none",
            color: "#fff",
            fontSize: "0.9rem",
            padding: "0.6rem 1rem",
          }}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}
