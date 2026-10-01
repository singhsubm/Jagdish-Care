import React from "react";
import Navbar from "./Navbar";

const Complete360Detail = () => {
  return (
    <div className="min-h-screen bg-white text-brand-dark">

      {/* NAVBAR */}
      <Navbar />


      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          <span className="inline-flex px-3 py-1.5 rounded-full bg-brand-dark text-white text-[10px] font-black uppercase tracking-wider">
            Complete 360° Care
          </span>

          <div className="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Jagdish Care Complete 360° Care
              </h1>

              <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl leading-relaxed">
                Complete annual home care — from routine maintenance to deep
                cleaning, pest control and an end-of-year AC refresh.
              </p>

            </div>

            <div className="lg:text-right">

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-black text-brand-orange">
                  ₹11,999
                </span>

                <span className="text-sm text-gray-500">
                  / year
                </span>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                For homes up to 3 BHK
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
              Complete Home Care
            </p>

            <h2 className="mt-2 text-2xl sm:text-3xl font-black">
              One annual plan for your complete home
            </h2>


            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

              <Service
                icon="❄️"
                title="AC Care"
                quantity="3 AC Services"
                points={[
                  "Up to 3 AC services",
                  "Basic cleaning",
                  "Performance check",
                  "Drain check",
                ]}
              />

              <Service
                icon="🔥"
                title="AC Gas Refill"
                quantity="2 AC Gas Refills"
                points={[
                  "Up to 2 AC gas refills",
                  "Gas leakage repair extra",
                  "Major AC components extra",
                ]}
              />

              <Service
                icon="♨️"
                title="Geyser Care"
                quantity="2 Geyser Services"
                points={[
                  "Inspection",
                  "Cleaning",
                  "Basic maintenance",
                  "Performance check",
                  "Parts/material extra",
                ]}
              />

              <Service
                icon="💧"
                title="RO Service"
                quantity="1 RO Service"
                points={[
                  "RO inspection",
                  "Basic cleaning",
                  "Performance check",
                  "Filters/membrane extra",
                ]}
              />

              <Service
                icon="🪳"
                title="Pest Control"
                quantity="1 Pest Control Treatment"
                points={[
                  "Standard household pest-control treatment",
                  "Specialized termite treatment excluded",
                  "Specialized bed-bug treatment excluded",
                ]}
              />

              <Service
                icon="🧹"
                title="Deep Home Cleaning"
                quantity="Complete Home Deep Cleaning"
                points={[
                  "Complete floor cleaning",
                  "Kitchen deep cleaning",
                  "Bathroom deep cleaning",
                  "Accessible glass surfaces",
                  "Dusting & accessible surfaces",
                ]}
              />

              <Service
                icon="🏠"
                title="Chimney & Exhaust"
                quantity="Chimney & Exhaust Cleaning"
                points={[
                  "Basic chimney servicing",
                  "Chimney cleaning",
                  "Exhaust fan cleaning",
                  "Basic servicing",
                ]}
              />

              <Service
                icon="🧺"
                title="Washing Machine"
                quantity="Washing Machine Cleaning"
                points={[
                  "Basic internal cleaning",
                  "External cleaning",
                  "Machine-type appropriate cleaning",
                  "Major repairs/spare parts extra",
                ]}
              />

              <Service
                icon="🧊"
                title="Refrigerator"
                quantity="Refrigerator Servicing"
                points={[
                  "Basic inspection",
                  "Cleaning",
                  "Performance check",
                  "Basic maintenance",
                  "Major repair/spare parts extra",
                ]}
              />

              <Service
                icon="🚰"
                title="Complete Plumbing"
                quantity="Complete Plumbing Care"
                points={[
                  "Tap leakage",
                  "Drain blockage",
                  "Sink & flush",
                  "Bathroom & kitchen plumbing",
                  "Pipe/fitting inspection",
                  "Loose fittings",
                  "Labour/service included",
                  "Raw material charged separately",
                ]}
              />

              <Service
                icon="⚡"
                title="Complete Electrical"
                quantity="Complete Electrical Care"
                points={[
                  "Switches & sockets",
                  "MCB inspection",
                  "Loose connections",
                  "Fan issues",
                  "Fan capacitor replacement",
                  "Basic troubleshooting",
                  "Eligible electrical maintenance",
                ]}
              />

              <Service
                icon="🛠️"
                title="Complete Carpentry"
                quantity="Complete Carpentry Care"
                points={[
                  "Door & cabinet hinges",
                  "Handles & hangers",
                  "Curtain rods",
                  "Door adjustment",
                  "Cabinet adjustment",
                  "Loose fittings",
                  "Basic furniture maintenance",
                  "Major woodwork/material extra",
                ]}
              />

            </div>


            {/* REFRESH */}
            <div className="mt-8 rounded-2xl bg-brand-dark text-white p-6 sm:p-7">

              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-orange-300">
                Annual Home Refresh
              </span>

              <h3 className="mt-2 text-xl sm:text-2xl font-black">
                Your year ends with a fresh start.
              </h3>

              <p className="mt-3 text-sm text-gray-300 leading-relaxed max-w-2xl">
                During the last month of your annual plan, you can use the
                included AC refresh service for up to 3 ACs.
              </p>

              <div className="mt-5 inline-flex px-4 py-2 rounded-xl bg-white/10 text-xs font-bold">
                Last Month · Up to 3 ACs
              </div>

            </div>


            {/* WARRANTY */}
            <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50/60 p-5 sm:p-6">

              <div className="flex items-center gap-3">

                <div className="w-11 h-11 rounded-xl bg-white text-brand-orange flex items-center justify-center">
                  🛡️
                </div>

                <div>
                  <h3 className="font-black text-lg">
                    6-Month Service Warranty
                  </h3>

                  <p className="text-xs text-gray-500 mt-0.5">
                    Included with Complete 360° Care
                  </p>
                </div>

              </div>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                Covered service-related issues can qualify for service revisit
                support within the applicable six-month warranty period,
                subject to the defined warranty terms.
              </p>

              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Same covered service-related issue is eligible.</li>
                <li>• Physical damage and misuse are excluded.</li>
                <li>• New or unrelated faults are excluded.</li>
                <li>• Replacement parts/materials are excluded unless specifically covered.</li>
              </ul>

            </div>


            {/* NOTES */}
            <div className="mt-5 rounded-2xl border border-gray-200 p-5 sm:p-6">

              <h3 className="font-black text-lg">
                Important Notes
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>• Plan applicable for homes up to 3 BHK.</li>
                <li>• Deep home cleaning is included.</li>
                <li>• Standard household pest control is included.</li>
                <li>• Major repairs and replacement parts are charged separately.</li>
                <li>• Specialized pest treatments may require separate pricing.</li>
                <li>• Plumbing, electrical and carpentry coverage applies to eligible maintenance work.</li>
              </ul>

            </div>

          </div>


          {/* SUMMARY */}
          <aside className="lg:sticky lg:top-28 h-fit">

            <div className="rounded-2xl border border-gray-200 shadow-lg p-5 sm:p-6 bg-white">

              <span className="inline-flex px-3 py-1 rounded-full bg-brand-dark text-white text-[9px] font-black uppercase">
                Complete 360° Care
              </span>

              <h3 className="mt-4 text-xl font-black">
                Complete Home Care
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-3xl font-black text-brand-orange">
                  ₹11,999
                </span>

                <span className="text-xs text-gray-500">
                  / year
                </span>
              </div>

              <div className="mt-5 space-y-2 text-xs text-gray-600">
                <p>✓ 3 AC Services</p>
                <p>✓ 2 AC Gas Refills</p>
                <p>✓ 2 Geyser Services</p>
                <p>✓ Deep Home Cleaning</p>
                <p>✓ Pest Control</p>
                <p>✓ Plumbing + Electrical</p>
                <p>✓ 6-Month Warranty</p>
                <p>✓ Last-Month AC Refresh</p>
              </div>

              <button className="mt-6 w-full py-3.5 rounded-xl bg-brand-orange text-white font-bold text-sm hover:bg-orange-600 transition">
                Get Complete 360° Care →
              </button>

            </div>

          </aside>

        </div>

      </main>


      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-gray-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="flex flex-col sm:flex-row justify-between gap-5">

            <div>
              <p className="font-black">Jagdish Care</p>
              <p className="text-xs text-gray-500 mt-1">
                Complete home maintenance, made simple.
              </p>
            </div>

            <p className="text-xs text-gray-400 sm:self-end">
              © {new Date().getFullYear()} Jagdish Care. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

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

export default Complete360Detail;