import React, { useState } from "react";

export default function CreateJobModal() {
  // State for form fields
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      companyName,
      location,
      jobType,
      salaryMin,
      salaryMax,
      deadline,
      description,
    };

    try {
      const response = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert("Job published successfully!");
        // Reset form after success
        setJobTitle("");
        setCompanyName("");
        setLocation("");
        setJobType("");
        setSalaryMin("");
        setSalaryMax("");
        setDeadline("");
        setDescription("");
      } else {
        alert("Failed to publish job. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting job:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="modal fade"
      id="createJobModal"
      tabIndex="-1"
      aria-labelledby="createJobModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content rounded-4 p-3">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold" id="createJobModalLabel">
              Create Job Opening
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {/* Job Form */}
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                {/* Job Title */}
                <div className="col-md-6">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Stack Developer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="col-md-6">
                  <label className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Amazon, Microsoft, Swiggy"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                {/* Location */}
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <select
                    className="form-select"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="">Choose Location</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                  </select>
                </div>

                {/* Job Type */}
                <div className="col-md-6">
                  <label className="form-label">Job Type</label>
                  <select
                    className="form-select"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                  </select>
                </div>

                {/* Salary Min */}
                <div className="col-md-3">
                  <label className="form-label">Salary Min</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="₹0"
                    value={salaryMin}
                    onChange={(e) => setSalaryMin(e.target.value)}
                  />
                </div>

                {/* Salary Max */}
                <div className="col-md-3">
                  <label className="form-label">Salary Max</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="₹12,00,000"
                    value={salaryMax}
                    onChange={(e) => setSalaryMax(e.target.value)}
                  />
                </div>

                {/* Application Deadline */}
                <div className="col-md-6">
                  <label className="form-label">Application Deadline</label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      required
                    />
                    <span className="input-group-text">
                      <i className="bi bi-calendar-date"></i>
                    </span>
                  </div>
                </div>

                {/* Job Description */}
                <div className="col-12">
                  <label className="form-label">Job Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Please share a description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="modal-footer border-0 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-4"
                  data-bs-dismiss="modal"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Publish »
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
