import React from "react";
import JobCard from "./JobCard";

export default function JobGrid({ jobs = [] }) {
  return (
    <div className="container py-3">
      <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
        {jobs.map((job) => (
          <div className="col" key={job.id}>
            <JobCard job={job} /> {/* ✅ Pass job */}
          </div>
        ))}
      </div>
    </div>
  );
}
