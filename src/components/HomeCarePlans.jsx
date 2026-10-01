import React from "react";

const HomeCarePlans = () => {
  return (
    <section className="w-full bg-brand-dark py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* =========================================================
            MAIN HOME CARE SECTION
            LEFT  = 25%
            RIGHT = 75%
        ========================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* =====================================================
              LEFT HOME CARE PLANS CARD
          ===================================================== */}

          <div
            className="
              relative
              overflow-hidden
              lg:col-span-3
              rounded-3xl
              p-6
              flex
              flex-col
              justify-between
              shadow-xl
              text-brand-dark
              border
              border-orange-200/50
              min-h-[380px]
            "
          >
            {/* Background Image */}
            <div
              className="
                absolute
                inset-0
                bg-[url('/images/bg1.avif')]
                bg-cover
                bg-center
                bg-no-repeat
                blur-[2px]
                scale-105
              "
            ></div>

            {/* White Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-white/25
              "
            ></div>

            {/* =================================================
                TOP CONTENT
            ================================================= */}

            <div className="relative z-10">
              {/* Small Badge */}
              <div
                className="
                  inline-flex
                  items-center
                  space-x-1.5
                  bg-white/80
                  backdrop-blur-sm
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-extrabold
                  text-brand-orange
                  border
                  border-orange-200
                "
              >
                {/* Star Icon */}
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="
                      M9.049 2.927
                      c.3-.921 1.603-.921 1.902 0
                      l1.07 3.292
                      a1 1 0 00.95.69
                      h3.462
                      c.969 0 1.371 1.24.588 1.81
                      l-2.8 2.034
                      a1 1 0 00-.364 1.118
                      l1.07 3.292
                      c.3.921-.755 1.688-1.54 1.118
                      l-2.8-2.034
                      a1 1 0 00-1.175 0
                      l-2.8 2.034
                      c-.784.57-1.838-.197-1.539-1.118
                      l1.07-3.292
                      a1 1 0 00-.364-1.118
                      L2.98 8.72
                      c-.783-.57-.38-1.81.588-1.81
                      h3.461
                      a1 1 0 00.951-.69
                      l1.07-3.292z
                    "
                  />
                </svg>

                <span>HOME CARE PLANS</span>
              </div>

              {/* Main Heading */}
              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  font-extrabold
                  text-brand-dark
                  leading-tight
                  mt-5
                "
              >
                Complete Care
                <br />
                for a <span className="text-brand-orange">Better Home</span>
              </h2>

              {/* Small Description */}
              <p
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-gray-700
                  max-w-[250px]
                  font-medium
                "
              >
                One simple plan for all your essential home maintenance needs.
              </p>
            </div>

            {/* =================================================
                BOTTOM CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-8
                pt-5
                border-t
                border-orange-200/60
              "
            >
              <div className="flex items-center space-x-3">
                {/* Home Icon */}
                <div
                  className="
                    bg-white
                    p-2.5
                    rounded-2xl
                    shadow-sm
                    text-brand-orange
                  "
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="
                        M2.25 12l8.954-8.955
                        c.44-.439 1.152-.439 1.591 0
                        L21.75 12
                        M4.5 9.75v10.125
                        c0 .621.504 1.125 1.125 1.125H9.75
                        v-4.875
                        c0-.621.504-1.125 1.125-1.125h2.25
                        c.621 0 1.125.504 1.125 1.125V21
                        h4.125
                        c.621 0 1.125-.504 1.125-1.125V9.75
                        M8.25 21h8.25
                      "
                    />
                  </svg>
                </div>

                {/* Tagline */}
                <div>
                  <p
                    className="
                      text-base
                      font-serif
                      italic
                      font-bold
                      text-brand-dark
                      leading-tight
                    "
                  >
                    A Cleaner, Safer,
                    <br />
                    <span className="text-brand-orange">Happier Home</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT LARGE IMAGE CARD
              WIDTH = 75%
          ===================================================== */}

          {/* =====================================================
    RIGHT LARGE HOME CARE CARD
    WIDTH = 75%
===================================================== */}

          <div
            className="
    relative
    overflow-hidden
    lg:col-span-9
    rounded-3xl
    shadow-xl
    border
    border-orange-200/50
    min-h-[380px]
    flex
    flex-col
    justify-between
  "
          >
            {/* =================================================
      BLURRED BACKGROUND IMAGE
  ================================================= */}

            <div
              className="
      absolute
      inset-0
      bg-[url('/images/home-care-banner.png')]
      bg-cover
      bg-center
      bg-no-repeat
      blur-[2px]
      scale-105
    "
            ></div>

            {/* =================================================
      WHITE OVERLAY
  ================================================= */}

            <div
              className="
      absolute
      inset-0
      bg-white
    "
            ></div>

            {/* =================================================
      MAIN CONTENT
  ================================================= */}

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              {/* Small Label */}
              <div
                className="
        inline-flex
        items-center
        space-x-2
        text-brand-orange
        text-xs
        sm:text-sm
        font-extrabold
        uppercase
        tracking-wide
      "
              >
                <span>OUR PLANS</span>

                <span
                  className="
          block
          w-10
          h-[1px]
          bg-brand-orange
        "
                ></span>
              </div>

              {/* Heading */}
              <h2
                className="
        mt-3
        text-4xl
        sm:text-5xl
        lg:text-6xl
        font-extrabold
        leading-[0.95]
        text-brand-dark
        max-w-2xl
      "
              >
                Your Home.
                <br />
                Our <span className="text-brand-orange">Responsibility.</span>
              </h2>

              {/* Description */}
              <p
                className="
        mt-4
        text-sm
        sm:text-base
        text-gray-700
        font-medium
        leading-relaxed
        max-w-2xl
      "
              >
                Choose the right plan for your home and let our expert team
                handle everything — from maintenance to deep cleaning.
              </p>

              {/* Handwritten Style Text */}
              <div
                className="
        absolute
        right-6
        top-6
        hidden
        md:block
        text-right
      "
              >
                <p
                  className="
          text-2xl
          lg:text-3xl
          font-serif
          italic
          font-medium
          text-brand-dark
          leading-tight
        "
                >
                  Maintenance
                  <br />
                  made easy
                </p>

                <div
                  className="
          w-16
          h-[2px]
          bg-brand-orange
          rotate-[-5deg]
          ml-auto
          mt-2
        "
                ></div>
              </div>
            </div>

            {/* =================================================
      BOTTOM FEATURES
  ================================================= */}

            <div
              className="
      relative
      z-10
      mx-5
      sm:mx-8
      mb-5
      sm:mb-8
      bg-white/65
      backdrop-blur-md
      border
      border-orange-100
      rounded-2xl
      px-4
      py-3
      shadow-sm
    "
            >
              <div
                className="
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-3
        lg:gap-0
      "
              >
                {/* =================================================
          FEATURE 1
      ================================================= */}

                <div
                  className="
          flex
          items-center
          gap-2.5
          lg:px-4
          lg:border-r
          border-orange-200
        "
                >
                  <div
                    className="
            w-9
            h-9
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            text-brand-dark
            shadow-sm
            flex-shrink-0
          "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="
                M3 11.5
                L12 4
                L21 11.5
                M5 10.5V20
                H19V10.5
                M9 20V14H15V20
              "
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">
                    For homes up to
                    <br />
                    <span className="font-bold text-brand-dark">3 BHK</span>
                  </p>
                </div>

                {/* =================================================
          FEATURE 2
      ================================================= */}

                <div
                  className="
          flex
          items-center
          gap-2.5
          lg:px-4
          lg:border-r
          border-orange-200
        "
                >
                  <div
                    className="
            w-9
            h-9
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            text-brand-dark
            shadow-sm
            flex-shrink-0
          "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="
                M12 3
                L20 6
                V11
                C20 16 16.5 19.5 12 21
                C7.5 19.5 4 16 4 11
                V6
                L12 3Z
              "
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12L11 14L15 10"
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">
                    Trusted & verified
                    <br />
                    <span className="font-bold text-brand-dark">
                      professionals
                    </span>
                  </p>
                </div>

                {/* =================================================
          FEATURE 3
      ================================================= */}

                <div
                  className="
          flex
          items-center
          gap-2.5
          lg:px-4
          lg:border-r
          border-orange-200
        "
                >
                  <div
                    className="
            w-9
            h-9
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            text-brand-dark
            shadow-sm
            flex-shrink-0
          "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <rect x="4" y="5" width="16" height="15" rx="2" />

                      <path
                        strokeLinecap="round"
                        d="
                M8 3V7
                M16 3V7
                M4 10H20
              "
                      />

                      <path
                        strokeLinecap="round"
                        d="
                M8 14H10
                M14 14H16
                M8 17H10
                M14 17H16
              "
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">
                    One plan, multiple
                    <br />
                    <span className="font-bold text-brand-dark">services</span>
                  </p>
                </div>

                {/* =================================================
          FEATURE 4
      ================================================= */}

                <div
                  className="
          flex
          items-center
          gap-2.5
          lg:px-4
        "
                >
                  <div
                    className="
            w-9
            h-9
            rounded-xl
            bg-white
            flex
            items-center
            justify-center
            text-brand-dark
            shadow-sm
            flex-shrink-0
          "
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="
                M12 3
                L20 6
                V11
                C20 16 16.5 19.5 12 21
                C7.5 19.5 4 16 4 11
                V6
                L12 3Z
              "
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12L11 14L15 10"
                      />
                    </svg>
                  </div>

                  <p className="text-[10px] sm:text-xs font-semibold text-gray-700 leading-tight">
                    Service warranty
                    <br />
                    <span className="font-bold text-brand-dark">
                      (except Essential)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCarePlans;
