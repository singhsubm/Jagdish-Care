import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PremiumDetail = () => {
  return (
    <div className="min-h-screen bg-white text-brand-dark">

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <section className="bg-gradient-to-b from-orange-50/70 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <span className="inline-flex px-3 py-1.5 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider">
            ★ Most Popular
          </span>

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Jagdish Care Premium
              </h1>

              <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                Complete annual home maintenance for families who want their
                regular household services handled through one reliable plan.
              </p>

            </div>

            <div className="lg:text-right">

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-brand-orange">
                  ₹7,999
                </span>

                
              </div>

              <p className="text-xs text-gray-500 mt-1">
                For homes up to 2 BHK
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">
              Complete Home Maintenance
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-black">
              Everything you need for regular home care
            </h2>


            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <Service
                icon="❄️"
                title="AC Care"
                quantity="2 AC Services"
                points={[
                  "2 AC servicing",
                  "Basic cleaning",
                  "Performance check",
                ]}
              />

              <Service
                icon="🔥"
                title="AC Gas"
                quantity="1 AC Gas Refill"
                points={[
                  "One AC gas refill included",
                  "Gas leakage repair extra",
                  "Major component repair extra",
                ]}
              />

              <Service
                icon="💧"
                title="RO Care"
                quantity="1 RO Service"
                points={[
                  "RO inspection & cleaning",
                  "Basic maintenance",
                  "Performance check",
                  "Filters and membrane extra",
                ]}
              />

              <Service
                icon="♨️"
                title="Geyser"
                quantity="1 Geyser Service"
                points={[
                  "Basic inspection",
                  "Cleaning & maintenance",
                  "Heating performance check",
                  "Electrical check",
                  "Major parts extra",
                ]}
              />

              <Service
                icon="🚰"
                title="Plumbing Maintenance"
                quantity="Complete Plumbing Maintenance"
                points={[
                  "Tap leakage",
                  "Drainage blockage",
                  "Sink blockage",
                  "Flush problems",
                  "Minor leakage",
                  "Bathroom & kitchen plumbing",
                  "Labour included",
                  "Raw material charged separately",
                ]}
              />

              <Service
                icon="⚡"
                title="Electrical Maintenance"
                quantity="Complete Electrical Maintenance"
                points={[
                  "Switches & sockets",
                  "MCB inspection",
                  "Loose connections",
                  "Fan issues",
                  "Basic troubleshooting",
                  "Fan capacitor replacement included",
                ]}
              />

              <Service
                icon="🧹"
                title="Floor Cleaning"
                quantity="Normal Floor Cleaning"
                points={[
                  "Living room",
                  "Bedrooms",
                  "Hall",
                  "Accessible floor areas",
                  "Deep cleaning not included",
                ]}
              />

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


            {/* WARRANTY */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/60 p-5 sm:p-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-white text-brand-orange flex items-center justify-center">
                  🛡️
                </div>

                <div>
                  <h3 className="font-black text-lg">
                    3-Month Service Warranty
                  </h3>

                  <p className="text-xs text-gray-500 mt-0.5">
                    Included with Premium Plan
                  </p>
                </div>

              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                If the same covered service-related issue occurs again within
                the applicable warranty period, Jagdish Care can provide a
                service revisit according to the defined warranty terms.
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Same service-related issue is covered.</li>
                <li>• Misuse and physical damage are excluded.</li>
                <li>• New or unrelated faults are excluded.</li>
                <li>• Replacement parts/material failures are excluded unless specifically covered.</li>
              </ul>

            </div>


            {/* IMPORTANT */}
            <div className="mt-5 rounded-2xl border border-gray-200 p-5 sm:p-6">

              <h3 className="font-black text-lg">
                Important Notes
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• Plan applicable for homes up to 2 BHK.</li>
                <li>• Eligible plumber, electrician and carpenter labour is included.</li>
                <li>• Replacement parts and raw materials are charged separately.</li>
                <li>• Major repairs are outside the standard plan scope.</li>
                <li>• Deep cleaning is not included in Premium.</li>
              </ul>

            </div>

          </div>


          {/* SUMMARY */}
          <aside className="lg:sticky lg:top-28 h-fit">

            <div className="rounded-2xl border-2 border-brand-orange shadow-lg p-5 sm:p-6 bg-white">

              <span className="inline-flex px-3 py-1 rounded-full bg-brand-orange text-white text-[9px] font-black uppercase">
                Most Popular
              </span>

              <h3 className="mt-4 text-xl font-black">
                Premium Plan
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand-orange">
                  ₹7,999
                </span>

                
              </div>

              <div className="mt-5 space-y-2 text-xs text-gray-600">
                <p>✓ 2 AC Services</p>
                <p>✓ 1 AC Gas Refill</p>
                <p>✓ 1 RO Service</p>
                <p>✓ 1 Geyser Service</p>
                <p>✓ Complete Plumbing</p>
                <p>✓ Complete Electrical</p>
                <p>✓ 3-Month Warranty</p>
              </div>

              <button onClick={() => {
                window.location.href = "/contact";
              }} className="mt-6 w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-sm hover:bg-orange-600 transition">
                Get Premium Plan →
              </button>

            </div>

          </aside>

        </div>

      </main>


      {/* FOOTER */}
      <Footer />

    </div>
  );
};


const Service = ({ icon, title, quantity, points }) => (
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
        <li key={i} className="text-xs sm:text-sm text-gray-600 flex gap-2">
          <span className="text-brand-orange">•</span>
          {point}
        </li>
      ))}
    </ul>

  </div>
);

export default PremiumDetail;