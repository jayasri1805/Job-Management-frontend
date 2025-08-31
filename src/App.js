import React, { useState, useMemo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Helmet } from "react-helmet";
import AppNavbar from "./components/AppNavbar";
import FilterBar from "./components/FilterBar";
import JobGrid from "./components/JobGrid";
import CreateJobModal from "./components/CreateJobModal";
import amazon from "./assets/amazon.png";
import swiggy from "./assets/swiggy.png";
import tesla from "./assets/tesla.png";

function App() {
  // ---------------- MAIN STATE ----------------
  const [filters, setFilters] = useState({
    query: "",
    location: "",
    type: "",
    minSalary: 50,
    maxSalary: 80,
  });

  // ---------------- JOB DATA ----------------
  const jobs = useMemo(
    () => [
      {
        id: 1,
        logo:amazon,
        title: "Full Stack Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 2,
        logo: tesla,
        title: "Node Js Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 3,
        logo: swiggy,
        title: "UX/UI Designer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 4,
        logo: amazon,
        title: "Full Stack Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 5,
        logo: tesla,
        title: "Node Js Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 6,
        logo: swiggy,
        title: "UX/UI Designer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 7,
        logo: amazon,
        title: "Full Stack Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
      {
        id: 8,
        logo: tesla,
        title: "Node Js Developer",
        experience: "1–3 yr Exp",
        type: "Onsite",
        salary: "12 LPA",
        summary:
          "• A user-friendly interface lets you browse stunning photos and videos. • Filter destinations based on interests and travel style, and create personalized",
        badge: "24h Ago",
      },
    ],
    []
  );

  // ---------------- FILTERED JOBS ----------------
  const filteredJobs = useMemo(
    () =>
      jobs.filter((j) => {
        const q = filters.query.toLowerCase();
        const inQuery = !q || j.title.toLowerCase().includes(q);
        const inType = !filters.type || j.type === filters.type;
        return inQuery && inType;
      }),
    [jobs, filters]
  );

  // ---------------- RENDER ----------------
  return (
    <>
      <Helmet>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          defer
        ></script>
        <style>{`
          body { background: #f6f7fb; }
          .badge.border { border-color: #e5e7eb !important; }
          .navbar .nav-link { color: #475569; }
          .navbar .nav-link:hover { color: #111827; }
        `}</style>
      </Helmet>

      {/* Navbar */}
      <AppNavbar />

      {/* Filter Bar */}
      <div className="container my-4">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>

      {/* Job Grid */}
      <div className="container pb-5">
        <JobGrid jobs={filteredJobs} />
      </div>

      {/* Create Job Modal */}
      <CreateJobModal />
    </>
  );
}

export default App;
