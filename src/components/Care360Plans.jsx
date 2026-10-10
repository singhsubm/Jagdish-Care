import React from 'react';
import EssentialDetail from "./EssentialDetail";
import PremiumDetail from "./PremiumDetail";
import Complete360Detail from "./Complete360Detail";
import { useNavigate } from "react-router-dom";

/* =========================================================
   SERVICE ICON
========================================================= */

const ServiceIcon = ({ type }) => {

  const icons = {

    ac: (
      <>
        <rect x="3" y="5" width="18" height="8" rx="2" />
        <path d="M7 17c0 2-1 3-2 3" strokeLinecap="round" />
        <path d="M12 17c0 2-1 3-2 3" strokeLinecap="round" />
        <path d="M17 17c0 2-1 3-2 3" strokeLinecap="round" />
        <path d="M7 9h.01M11 9h.01" strokeLinecap="round" />
      </>
    ),

    gas: (
      <>
        <path d="M12 3c1 4-3 5-3 9a3 3 0 006 0c0-2-1-3-2-5" />
        <path d="M9 15c0 2 1 4 3 4s3-2 3-4" />
      </>
    ),

    ro: (
      <>
        <path d="M12 3C9 7 6 10 6 14a6 6 0 0012 0c0-4-3-7-6-11z" />
        <path d="M9 15c.5 1.5 1.5 2 3 2" strokeLinecap="round" />
      </>
    ),

    electrical: (
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    ),

    carpenter: (
      <>
        <path d="M14 5l5 5" strokeLinecap="round" />
        <path d="M12 7l5 5" strokeLinecap="round" />
        <path d="M4 20l7-7" strokeLinecap="round" />
        <path d="M3 17l4 4" strokeLinecap="round" />
        <path d="M7 13l4 4" strokeLinecap="round" />
      </>
    ),

    fan: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10C9 5 13 3 16 5c2 1 1 4-4 5" />
        <path d="M14 12c5-3 7 1 5 4-1 2-4 1-5-3" />
        <path d="M12 14c3 5-1 7-4 5-2-1-1-4 3-5" />
      </>
    ),

    plumbing: (
      <>
        <path d="M5 4v7a4 4 0 004 4h6a4 4 0 004-4V8" />
        <path d="M15 4h4v4" />
        <path d="M9 15v5" strokeLinecap="round" />
        <path d="M6 20h6" strokeLinecap="round" />
      </>
    ),

    geyser: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M9 7h6M9 11h6" strokeLinecap="round" />
        <path d="M12 14c-1 1-1 2 0 3 1-1 1-2 0-3z" />
      </>
    ),

    cleaning: (
      <>
        <path d="M8 4h8" strokeLinecap="round" />
        <path d="M10 4v5l-4 10h12l-4-10V4" />
        <path d="M8 14h8" strokeLinecap="round" />
      </>
    ),

    pest: (
      <>
        <ellipse cx="12" cy="13" rx="4" ry="6" />
        <path d="M12 7V4M8 10l-3-2M16 10l3-2M8 14l-3 1M16 14l3 1M9 19l-2 2M15 19l2 2" />
      </>
    ),

    chimney: (
      <>
        <path d="M6 20V9h12v11" />
        <path d="M9 9V5h6v4" />
        <path d="M9 13h6M9 16h6" />
      </>
    ),

    washing: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="13" r="4" />
        <path d="M7 7h.01M10 7h.01" strokeLinecap="round" />
      </>
    ),

    refrigerator: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M6 11h12M9 7v2M9 14v2" strokeLinecap="round" />
      </>
    ),
    solar: (
      <>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </>
    ),
    "water tank": (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2" />
        <path d="M6 11h12M9 7v2M9 14v2" strokeLinecap="round" />
      </>
    ),

    home: (
      <>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </>
    ),

    warranty: (
      <>
        <path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3z" />
        <path
          d="M8 12l2.5 2.5L16 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),

  };

  return (
    <svg
      className="w-4.5 h-4.5 sm:w-5 sm:h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type] || icons.home}
    </svg>
  );
};


/* =========================================================
   FEATURE ROW
========================================================= */

const Feature = ({ icon, children }) => (

  <li className="flex items-center gap-3 py-1">

    <span
      className="
        w-7
        h-7
        sm:w-8
        sm:h-8
        rounded-lg
        bg-orange-50
        text-brand-orange
        flex
        items-center
        justify-center
        flex-shrink-0
      "
    >
      <ServiceIcon type={icon} />
    </span>

    <span
      className="
        text-xs
        sm:text-sm
        lg:text-[13px]
        xl:text-sm
        text-gray-700
        font-medium
        leading-tight
      "
    >
      {children}
    </span>

  </li>
);


/* =========================================================
   TRUST ITEM
========================================================= */

const TrustItem = ({ icon, title, text }) => {

  const iconMap = {

    user: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path
          strokeLinecap="round"
          d="M5 20c.8-3.5 3-5 7-5s6.2 1.5 7 5"
        />
      </>
    ),

    quality: (
      <path d="M12 3l2.2 4.5L19 8.2l-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8.2l4.8-.7L12 3z" />
    ),

    pricing: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" strokeLinecap="round" />
      </>
    ),

    warranty: (
      <>
        <path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3z" />
        <path
          d="M8 12l2.5 2.5L16 9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),

  };

  return (

    <div className="flex items-center gap-3">

      <div
        className="
          w-9
          h-9
          sm:w-10
          sm:h-10
          rounded-xl
          bg-orange-50
          text-brand-orange
          flex
          items-center
          justify-center
          flex-shrink-0
        "
      >

        <svg
          className="w-4.5 h-4.5 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          {iconMap[icon]}
        </svg>

      </div>

      <div>

        <h4 className="text-[11px] sm:text-xs lg:text-[13px] font-bold text-brand-dark leading-tight">
          {title}
        </h4>

        <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 leading-tight">
          {text}
        </p>

      </div>

    </div>

  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const Care360Plans = () => {
    const navigate = useNavigate();

  return (

    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 font-sans">

      <div className="max-w-7xl mx-auto">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="text-center mb-9">

          <div className="inline-flex items-center gap-2.5 mb-3">

            <span className="w-9 h-px bg-brand-orange"></span>

            <span className="text-xs font-extrabold tracking-[0.18em] uppercase text-brand-orange">
              HOME CARE PLANS
            </span>

            <span className="w-9 h-px bg-brand-orange"></span>

          </div>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              text-brand-dark
              tracking-tight
            "
          >
            One Plan.
            <span className="text-brand-orange">
              {' '}Complete Care.
            </span>
          </h2>

          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-gray-500
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Choose the level of care your home needs and let our professionals
            take care of the rest.
          </p>

        </div>


        {/* =====================================================
            PLANS
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-5
            items-stretch
            mb-6
          "
        >


          {/* ===================================================
              ESSENTIAL
          =================================================== */}

          <div
            className="
              bg-white
              rounded-2xl
              p-5
              lg:p-6
              border
              border-gray-200
              shadow-sm
              flex
              flex-col
              justify-between
              relative
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <div>

              {/* Header */}

              <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-orange-50
                      text-brand-orange
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <ServiceIcon type="home" />
                  </div>

                  <div>

                    <h3 className="text-base lg:text-lg font-black text-brand-dark uppercase">
                      Essential
                    </h3>

                    <p className="text-[10px] lg:text-xs text-gray-500">
                      Essential Home Maintenance
                    </p>

                  </div>

                </div>

                <span
                  className="
                    text-[9px]
                    lg:text-[10px]
                    font-bold
                    uppercase
                    bg-gray-100
                    text-gray-500
                    px-2.5
                    py-1.5
                    rounded-full
                  "
                >
                  Starter
                </span>

              </div>


              {/* Price */}

              <div>

                <span className="text-3xl lg:text-5xl font-black text-brand-dark">
                  ₹4,999
                </span>

                

              </div>


              <div
                className="
                  inline-flex
                  mt-2
                  text-[10px]
                  lg:text-xs
                  font-semibold
                  text-gray-500
                  bg-gray-50
                  border
                  border-gray-100
                  px-2.5
                  py-1.5
                  rounded-md
                "
              >
                For homes up to 2 BHK
              </div>


              {/* Description */}

              <p
                className="
                  text-xs
                  lg:text-sm
                  text-gray-500
                  leading-relaxed
                  mt-4
                  pb-4
                  border-b
                  border-gray-100
                "
              >
                Perfect for basic yearly maintenance.
                Keep your home running smoothly.
              </p>


              {/* Features */}

              <div className="mt-4">

                <p className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">
                  What's included
                </p>

                <ul>

                  <Feature icon="ac">
                    1 AC Service
                  </Feature>

                  <Feature icon="ro">
                    1 RO Service
                  </Feature>

                  <Feature icon="electrical">
                    Electrical Maintenance
                  </Feature>

                  <Feature icon="carpenter">
                    Carpenter Maintenance
                  </Feature>

                  <Feature icon="fan">
                    Fan Capacitor Replacement
                  </Feature>

                  <Feature icon="home">
                    Basic Home Maintenance
                  </Feature>

                </ul>

              </div>

            </div>


            <button
              onClick={() => navigate("/plans/essential")}
              className="
                mt-6
                w-full
                py-3
                lg:py-3.5
                rounded-xl
                border-2
                border-brand-orange
                text-brand-orange
                font-bold
                text-xs
                lg:text-sm
                hover:bg-brand-orange
                hover:text-white
                transition-all
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
              "
            >
              View Full Plan
              <span>→</span>
            </button>

          </div>



          {/* ===================================================
              PREMIUM
          =================================================== */}

          <div
            className="
              bg-white
              rounded-2xl
              p-5
              lg:p-6
              border-2
              border-brand-orange
              shadow-lg
              flex
              flex-col
              justify-between
              relative
              lg:-translate-y-2
              transition-all
              duration-300alert
              hover:-translate-y-3
            "
          >

            {/* Popular Badge */}

            <div
              className="
                absolute
                -top-3.5
                left-1/2
                -translate-x-1/2
                bg-brand-orange
                text-white
                px-4
                py-1.5
                rounded-full
                text-[9px]
                lg:text-[10px]
                font-black
                uppercase
                tracking-wider
                whitespace-nowrap
                shadow-md
              "
            >
              ★ Most Popular
            </div>


            <div>

              {/* Header */}

              <div className="flex items-center gap-3 mb-5 pt-1">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-orange-50
                    text-brand-orange
                    flex
                    items-center
                    justify-center
                  "
                >
                  <ServiceIcon type="home" />
                </div>

                <div>

                  <h3 className="text-base lg:text-lg font-black text-brand-dark uppercase">
                    Premium
                  </h3>

                  <p className="text-[10px] lg:text-xs text-gray-500">
                    Complete Home Maintenance
                  </p>

                </div>

              </div>


              {/* Price */}

              <div>

                <span className="text-3xl lg:text-5xl font-black text-brand-orange">
                  ₹7,999
                </span>

                

              </div>


              <div
                className="
                  inline-flex
                  mt-2
                  text-[10px]
                  lg:text-xs
                  font-semibold
                  text-brand-orange
                  bg-orange-50
                  border
                  border-orange-100
                  px-2.5
                  py-1.5
                  rounded-md
                "
              >
                For homes up to 2 BHK
              </div>


              {/* Description */}

              <p
                className="
                  text-xs
                  lg:text-sm
                  text-gray-500
                  leading-relaxed
                  mt-4
                  pb-4
                  border-b
                  border-gray-100
                "
              >
                Everything you need for regular home maintenance.
              </p>


              {/* Features */}

              <div className="mt-4">

                <p className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">
                  What's included
                </p>

                <ul>

                  <Feature icon="ac">
                    2 AC Services
                  </Feature>

                  <Feature icon="gas">
                    1 AC Gas Refill
                  </Feature>

                  <Feature icon="ro">
                    1 RO Service
                  </Feature>

                  <Feature icon="geyser">
                    1 Geyser Service
                  </Feature>

                  <Feature icon="plumbing">
                    Complete Plumbing Maintenance
                  </Feature>

                  <Feature icon="electrical">
                    Complete Electrical Maintenance
                  </Feature>

                  <Feature icon="cleaning">
                    Normal Floor Cleaning
                  </Feature>

                  <Feature icon="carpenter">
                    Carpenter Maintenance
                  </Feature>

                  <Feature icon="warranty">
                    3-Month Service Warranty
                  </Feature>

                </ul>

              </div>

            </div>


            <button
              onClick={() => navigate("/plans/premium")}
              className="
                mt-6
                w-full
                py-3
                lg:py-3.5
                rounded-xl
                bg-brand-orange
                text-white
                font-bold
                text-xs
                lg:text-sm
                hover:bg-orange-600
                transition-all
                shadow-md
                shadow-orange-100
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
              "
            >
              View Full Plan
              <span>→</span>
            </button>

          </div>



          {/* ===================================================
              COMPLETE 360
          =================================================== */}

          <div
            className="
              bg-white
              rounded-2xl
              p-5
              lg:p-6
              border
              border-gray-200
              shadow-sm
              flex
              flex-col
              justify-between
              relative
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <div>

              {/* Header */}

              <div className="flex items-center justify-between mb-5">

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-brand-dark
                      text-white
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3l9 6-9 6-9-6 9-6z" />
                      <path d="M3 12l9 6 9-6" />
                      <path d="M3 15l9 6 9-6" />
                    </svg>

                  </div>

                  <div>

                    <h3 className="text-base lg:text-lg font-black text-brand-dark uppercase">
                      Complete 360° Care
                    </h3>

                    <p className="text-[10px] lg:text-xs text-gray-500">
                      Complete Home Care
                    </p>

                  </div>

                </div>

                <span
                  className="
                    text-[9px]
                    lg:text-[10px]
                    font-bold
                    uppercase
                    bg-brand-dark
                    text-white
                    px-2.5
                    py-1.5
                    rounded-full
                  "
                >
                  Ultimate
                </span>

              </div>


              {/* Price */}

              <div>

                <span className="text-3xl lg:text-5xl font-black text-brand-dark">
                  ₹11,999
                </span>

                

              </div>


              <div
                className="
                  inline-flex
                  mt-2
                  text-[10px]
                  lg:text-xs
                  font-semibold
                  text-gray-500
                  bg-gray-50
                  border
                  border-gray-100
                  px-2.5
                  py-1.5
                  rounded-md
                "
              >
                For homes up to 3 BHK
              </div>


              {/* Description */}

              <p
                className="
                  text-xs
                  lg:text-sm
                  text-gray-500
                  leading-relaxed
                  mt-4
                  pb-4
                  border-b
                  border-gray-100
                "
              >
                From maintenance to deep cleaning — we've got your home covered.
              </p>


              {/* Features */}

              <div className="mt-4">

                <p className="text-[10px] lg:text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-2">
                  What's included
                </p>

                <ul>

                  <Feature icon="ac">
                    3 AC Services
                  </Feature>

                  <Feature icon="gas">
                    2 AC Gas Refills
                  </Feature>

                  <Feature icon="geyser">
                    2 Geyser Services
                  </Feature>

                  <Feature icon="ro">
                    1 RO Service
                  </Feature>

                  <Feature icon="pest">
                    Pest Control
                  </Feature>

                  <Feature icon="cleaning">
                    Deep Home Cleaning (Full)
                  </Feature>

                  <Feature icon="chimney">
                    Chimney & Exhaust Cleaning
                  </Feature>

                  <Feature icon="washing">
                    Washing Machine Cleaning
                  </Feature>

                  <Feature icon="refrigerator">
                    Refrigerator Servicing
                  </Feature>

                  <Feature icon="plumbing">
                    Complete Plumbing & Carpentry
                  </Feature>
                  
                  <Feature icon="solar">
                    Complete Solar Cleaning
                  </Feature>
                  
                  <Feature icon="water tank">
                    Complete Water Tank Cleaning
                  </Feature>

                  <Feature icon="ac">
                    Last Month AC Refresh (up to 3 AC)
                  </Feature>

                  <Feature icon="warranty">
                    6-Month Service Warranty
                  </Feature>

                </ul>

              </div>

            </div>


            <button
              onClick={() => navigate("/plans/complete-360")}
              className="
                mt-6
                w-full
                py-3
                lg:py-3.5
                rounded-xl
                border-2
                border-brand-dark
                text-brand-dark
                font-bold
                text-xs
                lg:text-sm
                hover:bg-brand-dark
                hover:text-white
                transition-all
                flex
                items-center
                justify-center
                gap-2
                cursor-pointer
              "
            >
              View Full Plan
              <span>→</span>
            </button>

          </div>

        </div>



        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <div
          className="
            bg-white
            rounded-2xl
            border
            border-gray-200
            shadow-sm
            px-5
            py-4
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mb-4
          "
        >

          <TrustItem
            icon="user"
            title="Experienced Professionals"
            text="Verified & trained experts"
          />

          <TrustItem
            icon="quality"
            title="Quality Service"
            text="Reliable and hassle-free"
          />

          <TrustItem
            icon="pricing"
            title="Transparent Pricing"
            text="No hidden charges"
          />

          <TrustItem
            icon="warranty"
            title="Service Warranty"
            text="3 or 6 months as per plan"
          />

        </div>



        {/* =====================================================
            NOTE
        ===================================================== */}

        <div
          className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            px-4
            py-3
            flex
            items-start
            gap-3
          "
        >

          <div
            className="
              w-7
              h-7
              rounded-full
              bg-orange-50
              text-brand-orange
              flex
              items-center
              justify-center
              flex-shrink-0
              font-bold
            "
          >
            i
          </div>

          <p
            className="
              text-[10px]
              sm:text-xs
              text-gray-500
              leading-relaxed
            "
          >
            Replacement parts,
            raw materials and major repairs are charged separately
            where applicable. Service scope, usage limits and
            warranty terms apply.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Care360Plans;