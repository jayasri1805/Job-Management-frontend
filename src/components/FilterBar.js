// FilterBar.js
import React from "react";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div className="bg-white border-bottom">
      <div className="container py-3">
        <div className="row g-3 align-items-end">
          
          {/* Search Box */}
          <div className="col-12 col-md-4">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search By Job Title, Role"
                value={filters.query}
                onChange={(e) =>
                  setFilters({ ...filters, query: e.target.value })
                }
              />
            </div>
          </div>

          {/* Location Box */}
          <div className="col-12 col-md-3">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-geo-alt"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Preferred Location"
                value={filters.location}
                onChange={(e) =>
                  setFilters({ ...filters, location: e.target.value })
                }
              />
            </div>
          </div>

          {/* Job Type Dropdown */}
          <div className="col-12 col-md-3">
            <div className="input-group">
              <span className="input-group-text bg-light">
                <i className="bi bi-briefcase"></i>
              </span>
              <select
                className="form-select"
                value={filters.type}
                onChange={(e) =>
                  setFilters({ ...filters, type: e.target.value })
                }
              >
                <option value="">Job type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
          </div>

          {/* Salary Slider */}
          <div className="col-12 fs-7 col-md-2">
            <label className="form-label fs-7 text-dark">
              Salary Per Month: ₹{filters.minSalary}k - ₹{filters.maxSalary}k
            </label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              step="5"
              value={filters.maxSalary}
              onChange={(e) =>
                setFilters({ ...filters, maxSalary: Number(e.target.value) })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
