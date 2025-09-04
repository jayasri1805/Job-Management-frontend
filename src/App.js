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
  const [filters, setFilters] = useState({
    query: "",
    location: "",
    type: "All",
    minSalary: 50,
    maxSalary: 80,
  });

  const jobs = useMemo(() => [
    {
      id: 1,
      logo: amazon,
      title: "Full Stack Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 2,
      logo: tesla,
      title: "Node Js Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 3,
      logo: swiggy,
      title: "UX/UI Designer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 4,
      logo: amazon,
      title: "Full Stack Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 5,
      logo: tesla,
      title: "Node Js Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 6,
      logo: swiggy,
      title: "UX/UI Designer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 7,
      logo: amazon,
      title: "Full Stack Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
    {
      id: 8,
      logo: tesla,
      title: "Node Js Developer",
      experience: "1–3yr Exp",
      type: "Onsite",
      salary: "12LPA",
      badge: "24h Ago",
      summary: (
        <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
          <li>A user-friendly interface lets you browse stunning photos and videos.</li>
          <li>Filter destinations based on interests and travel style, and create personalized.</li>
        </ul>
      ),
    },
  ], []);

  const jobTypeMapping = {
    Fulltime: [1, 2, 5, 7, 8, 6],
    Parttime: [2, 3, 6, 4],
    Internship: [1, 4, 7, 3],
    Contract: [1, 5, 8],
    All: jobs.map((j) => j.id),
  };

  const filteredJobs = useMemo(() => {
    let selectedType = filters.type || "All";
    const allowedIds = jobTypeMapping[selectedType] || jobTypeMapping.All;

    const q = filters.query.toLowerCase().trim();
    const roleKeywords = ["fullstack", "nodejs", "ui/ux"];

    if (roleKeywords.some((rk) => q.includes(rk))) {
      return jobs.filter((j) =>
        (j.title.toLowerCase().includes("full stack") && q.includes("fullstack")) ||
        (j.title.toLowerCase().includes("node js") && q.includes("nodejs")) ||
        (j.title.toLowerCase().includes("ux/ui") && q.includes("ui/ux"))
      );
    }

    return jobs.filter((j) => {
      const matchType = allowedIds.includes(j.id);
      const matchLocation =
        !filters.location ||
        filters.location === "All" ||
        ["chennai", "bangalore", "hyderabad"].includes(filters.location.toLowerCase());
      const matchQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.type.toLowerCase().includes(q);

      return matchType && matchLocation && matchQuery;
    });
  }, [jobs, filters]);

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

      <AppNavbar />
      <div className="container my-4">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>
      <div className="container pb-5">
        <JobGrid jobs={filteredJobs} />
      </div>
      <CreateJobModal />
    </>
  );
}

export default App;


