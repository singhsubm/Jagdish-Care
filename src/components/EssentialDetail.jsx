import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const EssentialDetail = () => {
  return (
    <div className="min-h-screen bg-white text-brand-dark">

      {/* ================= NAVBAR ================= */}
      <Navbar />


      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-b from-orange-50/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <div className="max-w-4xl">

            <span className="inline-flex px-3 py-1.5 rounded-full bg-orange-100 text-brand-orange text-[10px] font-black uppercase tracking-wider">
              Essential Home Maintenance
            </span>

            <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                  Jagdish Care Essential
                </h1>

                <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                  A simple annual maintenance plan for homes that need
                  regular basic maintenance without the hassle of arranging
                  different service providers every time.
                </p>
              </div>

              <div className="lg:text-right">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-brand-orange">
                    ₹3,999
                  </span>

                  <span className="text-sm text-gray-500">
                    / year
                  </span>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  For homes up to 2 BHK
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

          {/* LEFT */}
          <div>

            <div className="mb-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">
                What's included
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black">
                Essential maintenance for your home
              </h2>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* AC */}
              <Service
                icon="❄️"
                title="AC Service"
                quantity="1 AC Service"
                points={[
                  "Basic AC servicing",
                  "Filter & unit cleaning",
                  "Basic performance check",
                  "Drain check",
                ]}
              />

              {/* RO */}
              <Service
                icon="💧"
                title="RO Service"
                quantity="1 RO Service"
                points={[
                  "RO inspection",
                  "Basic cleaning/service",
                  "Performance check",
                  "Filter and membrane replacement extra",
                ]}
              />

              {/* Electrical */}
              <Service
                icon="⚡"
                title="Electrical Maintenance"
                quantity="Electrical Maintenance"
                points={[
                  "Switches check",
                  "Loose connection check",
                  "MCB/basic board check",
                  "Loose fittings",
                  "Basic fan checking",
                  "Fan capacitor/condenser replacement included",
                ]}
              />

              {/* Carpenter */}
              <Service
                icon="🛠️"
                title="Carpenter Maintenance"
                quantity="Carpenter Maintenance"
                points={[
                  "Door & cabinet hinges",
                  "Handles & hangers",
                  "Curtain rods",
                  "Loose fittings",
                  "Basic furniture adjustment",
                ]}
              />

            </div>


            {/* LIMIT */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <h3 className="font-black text-lg">
                Plan Limit
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                This plan is designed for homes up to <strong>2 BHK</strong>.
              </p>
            </div>


            {/* WARRANTY */}
            <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  🛡️
                </div>

                <div>
                  <h3 className="font-black text-lg">
                    Warranty
                  </h3>

                  <p className="text-xs text-gray-500">
                    No blanket warranty included
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                The Essential Plan does not include a blanket service warranty.
                Any warranty applicable to a specific repair or service will
                depend on the actual work performed and its applicable terms.
              </p>

            </div>


            {/* IMPORTANT */}
            <div className="mt-5 rounded-2xl border border-orange-100 bg-orange-50/60 p-5 sm:p-6">

              <h3 className="font-black text-lg">
                Important to know
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">

                <li>• Replacement parts and raw materials are charged separately.</li>
                <li>• Major repairs are outside the standard plan scope.</li>
                <li>• Service coverage applies to eligible household maintenance work.</li>
                <li>• Material/component costs are payable by the customer.</li>

              </ul>

            </div>

          </div>


          {/* RIGHT SUMMARY */}
          <aside className="lg:sticky lg:top-28 h-fit">

            <div className="rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-6 bg-white">

              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Your plan
              </p>

              <h3 className="mt-2 text-xl font-black">
                Essential Plan
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand-orange">
                  ₹3,999
                </span>

                <span className="text-xs text-gray-500">
                  / year
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                For homes up to 2 BHK
              </p>

              <button
                className="mt-6 w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-sm hover:bg-orange-600 transition"
              >
                Get Essential Plan →
              </button>

              <p className="mt-4 text-[10px] text-center text-gray-400">
                Replacement parts and materials charged separately.
              </p>

            </div>

          </aside>

        </div>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};


const Service = ({ icon, title, quantity, points }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-md transition">

      <div className="flex items-center gap-3">

        <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-xl">
          {icon}
        </div>

        <div>
          <h3 className="font-black text-sm sm:text-base">
            {title}
          </h3>

          <p className="text-[10px] text-brand-orange font-bold mt-1">
            {quantity}
          </p>
        </div>

      </div>

      <ul className="mt-4 space-y-2">
        {points.map((point, i) => (
          <li
            key={i}
            className="text-xs sm:text-sm text-gray-600 flex gap-2"
          >
            <span className="text-brand-orange">•</span>
            {point}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default EssentialDetail;