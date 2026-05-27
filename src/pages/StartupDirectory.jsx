import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin, FiPlus, FiGlobe, FiUser } from "react-icons/fi";

// Temporary static data (later replaced by API)
const sampleStartups = [
  {
    _id: "1",
    startupName: "TechDroid Solutions",
    founderName: "Jaivardhan Tak",
    state: "Rajasthan",
    district: "Jaipur",
    website: "https://technova.com",
    status: "approved",
  },
  {
    _id: "2",
    startupName: "AgroSmart India",
    founderName: "Ankit Sharma",
    state: "Madhya Pradesh",
    district: "Indore",
    website: "https://agrosmart.in",
    status: "approved",
  },
  {
    _id: "3",
    startupName: "EduSpark",
    founderName: "Priya Mehta",
    state: "Delhi",
    district: "New Delhi",
    website: "https://eduspark.in",
    status: "approved",
  },
];

const states = [
  "All States",
  "Rajasthan",
  "Delhi",
  "Madhya Pradesh",
  "Gujarat",
  "Maharashtra",
  "Uttar Pradesh",
];

export default function StartupDirectory() {
  const [search, setSearch] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [startups, setStartups] = useState([]);

  // SCROLL TO TOP
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Later replace with API call:
    // const res = await getApprovedStartups();
    // setStartups(res.data);
    setStartups(sampleStartups);
  }, []);

  const filteredStartups = useMemo(() => {
    return startups.filter((startup) => {
      const matchesSearch =
        startup.startupName.toLowerCase().includes(search.toLowerCase()) ||
        startup.founderName.toLowerCase().includes(search.toLowerCase());

      const matchesState =
        selectedState === "All States" || startup.state === selectedState;

      return matchesSearch && matchesState;
    });
  }, [search, selectedState, startups]);

  return (
    <div className="min-h-screen bg-[#f8f2ea]">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3
  bg-white/70 backdrop-blur-xl
  px-5 py-3 rounded-full shadow-lg
  border border-white/40 mb-6"
          >
            {/* GLOW DOT */}
            <div className="relative flex items-center justify-center">
              {/* OUTER GLOW */}
              <span className="absolute w-5 h-5 rounded-full bg-[#ff7a00]/40 animate-ping"></span>

              {/* MAIN DOT */}
              <span className="relative w-3 h-3 rounded-full bg-[#ff7a00] shadow-[0_0_15px_#ff7a00]"></span>
            </div>

            <span className="text-sm font-semibold tracking-wide text-[#444] uppercase">
              Startup Directory
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1b1b1b]">
            Discover India's
            <span className="block text-[#ff7a00]">Emerging Startups</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg text-[#555] leading-relaxed">
            Explore innovative startups registered with MySBA. Search by startup
            name, founder, or state and connect with entrepreneurs shaping
            India's future.
          </p>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-xl p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search */}
              <div className="lg:col-span-6 relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777]" />
                <input
                  type="text"
                  placeholder="Search by startup or founder..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#f5d8ba] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
                />
              </div>

              {/* State Filter */}
              <div className="lg:col-span-3 relative">
                <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777]" />
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full appearance-none pl-12 pr-4 py-4 rounded-2xl border border-[#f5d8ba] bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#ff7a00]"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              {/* Register Button */}
              <div className="lg:col-span-3">
                <Link
                  to="/startup/register"
                  className="w-full h-full min-h-[56px] inline-flex items-center justify-center gap-2 bg-[#ff7a00] hover:bg-[#ea6b00] text-white font-semibold rounded-2xl shadow-[0_12px_30px_rgba(255,122,0,0.35)] transition-all duration-300"
                >
                  <FiPlus />
                  Register as Startup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS HEADER */}
      <section className="px-4 sm:px-6 lg:px-10 mt-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#1b1b1b]">
            Approved Startups
          </h2>
          <p className="text-[#666] font-medium">
            {filteredStartups.length} Results Found
          </p>
        </div>
      </section>

      {/* STARTUP CARDS */}
      <section className="px-4 sm:px-6 lg:px-10 py-8 pb-20">
        <div className="max-w-7xl mx-auto">
          {filteredStartups.length === 0 ? (
            <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-12 text-center shadow-xl">
              <h3 className="text-2xl font-bold text-[#1b1b1b]">
                No Startups Found
              </h3>
              <p className="mt-3 text-[#666]">
                Try changing your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredStartups.map((startup) => (
                <div
                  key={startup._id}
                  className="group bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Startup Name */}
                  <h3 className="text-2xl font-bold text-[#1b1b1b]">
                    {startup.startupName}
                  </h3>

                  {/* Founder */}
                  <div className="mt-4 flex items-center gap-2 text-[#555]">
                    <FiUser />
                    <span>{startup.founderName}</span>
                  </div>

                  {/* Location */}
                  <div className="mt-2 flex items-center gap-2 text-[#555]">
                    <FiMapPin />
                    <span>
                      {startup.district}, {startup.state}
                    </span>
                  </div>

                  {/* Website */}
                  {startup.website && (
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex items-center gap-2 text-[#ff7a00] hover:underline"
                    >
                      <FiGlobe />
                      Visit Website
                    </a>
                  )}

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-[#f5d8ba]">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-[#ff7a00] text-sm font-semibold">
                      Approved Startup
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
