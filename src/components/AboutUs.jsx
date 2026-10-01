import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-brand-dark">
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f8f9fa]">

          {/* Decorative shapes */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-orange-100/60 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-blue-100/50 blur-3xl" />

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-16
              sm:py-20
              lg:py-24
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-10
                lg:gap-16
                items-center
              "
            >

              {/* LEFT */}

              <div>

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-orange-50
                    border
                    border-orange-100
                    mb-5
                  "
                >

                  <span className="w-2 h-2 rounded-full bg-brand-orange" />

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      uppercase
                      tracking-wider
                      text-brand-orange
                    "
                  >
                    About Jagdish Care
                  </span>

                </div>


                <h1
                  className="
                    text-4xl
                    sm:text-5xl
                    lg:text-6xl
                    font-black
                    leading-[1.02]
                    tracking-[-0.04em]
                    text-brand-dark
                  "
                >
                  Home Care,
                  <br />

                  <span className="text-brand-orange">
                    Without the Hassle.
                  </span>
                </h1>


                <p
                  className="
                    mt-6
                    max-w-xl
                    text-sm
                    sm:text-base
                    lg:text-lg
                    leading-7
                    text-gray-600
                  "
                >
                  We believe taking care of a home shouldn't mean
                  calling different people for every small problem.
                  Jagdish Care brings essential home services together
                  under one trusted name.
                </p>


                <p
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    font-semibold
                    text-brand-dark
                  "
                >
                  One call. One team. Better home care.
                </p>


                {/* CTA */}

                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                  <a
                    href="/home-care-plans"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-6
                      py-3.5
                      rounded-xl
                      bg-brand-orange
                      text-white
                      text-sm
                      font-bold
                      shadow-lg
                      shadow-orange-200
                      hover:bg-orange-600
                      hover:-translate-y-0.5
                      transition-all
                    "
                  >
                    Explore Our Services
                    <span>→</span>
                  </a>


                  

                </div>

              </div>


              {/* RIGHT IMAGE */}

              <div className="relative">

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    aspect-[4/3]
                    bg-gray-100
                    shadow-2xl
                    shadow-gray-200
                  "
                >

                  <img
                    src="/images/hero-service-bg.png"
                    alt="Jagdish Care home service"
                    className="
                      w-full
                      h-full
                      object-cover
                        object-right
                    "
                  />

                  {/* White overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/25
                      via-transparent
                      to-transparent
                    "
                  />

                </div>


                {/* Floating card */}

                <div
                  className="
                    absolute
                    -bottom-5
                    left-4
                    sm:left-8
                    bg-white
                    rounded-2xl
                    shadow-xl
                    border
                    border-gray-100
                    px-5
                    py-4
                    max-w-[250px]
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-orange-50
                        flex
                        items-center
                        justify-center
                        text-xl
                      "
                    >
                      🏠
                    </div>

                    <div>

                      <p className="text-sm font-bold text-brand-dark">
                        Home Care Made Simple
                      </p>

                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Repairs • Maintenance • Cleaning
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            OUR STORY
        ===================================================== */}

        <section className="bg-white">

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-20
              lg:py-24
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[0.9fr_1.1fr]
                gap-12
                lg:gap-20
                items-center
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  order-2
                  lg:order-1
                "
              >

                <div
                  className="
                    overflow-hidden
                    rounded-[28px]
                    aspect-[4/3]
                    bg-gray-100
                  "
                >

                  <img
                    src="/images/about-story.jpg"
                    alt="Home maintenance service"
                    className="
                      w-full
                      h-full
                      object-cover
                    "
                  />

                </div>


                {/* Decorative border */}

                <div
                  className="
                    absolute
                    -bottom-4
                    -right-4
                    w-32
                    h-32
                    rounded-3xl
                    border-2
                    border-orange-200
                    -z-0
                  "
                />

              </div>


              {/* CONTENT */}

              <div className="order-1 lg:order-2">

                <SectionLabel>
                  OUR STORY
                </SectionLabel>


                <h2
                  className="
                    mt-4
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                    tracking-tight
                  "
                >
                  Built Around
                  <br />

                  <span className="text-brand-orange">
                    a Simple Idea.
                  </span>
                </h2>


                <div
                  className="
                    mt-6
                    space-y-4
                    text-sm
                    sm:text-base
                    leading-7
                    text-gray-600
                  "
                >

                  <p>
                    A home has many things that need attention.
                    An AC needs servicing, a tap starts leaking,
                    a switch stops working, a geyser needs maintenance
                    or a room simply needs cleaning.
                  </p>

                  <p>
                    Usually, every problem means finding a different
                    person, checking availability, discussing prices
                    and hoping the work is done properly.
                  </p>

                  <p>
                    <strong className="text-brand-dark">
                      Jagdish Care was built to make that simpler.
                    </strong>
                  </p>

                  <p>
                    Our goal is to give homeowners a reliable way to
                    manage their everyday home-service needs through
                    one service partner.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT WE DO
        ===================================================== */}

        <section className="bg-[#f8f9fa]">

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-20
              lg:py-24
            "
          >

            <div className="text-center max-w-2xl mx-auto">

              <SectionLabel>
                WHAT WE DO
              </SectionLabel>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  tracking-tight
                "
              >
                More Than Just
                <span className="text-brand-orange">
                  {" "}Repairs.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  leading-7
                  text-gray-600
                "
              >
                From everyday repairs to regular maintenance,
                we bring essential home services together.
              </p>

            </div>


            {/* SERVICE GRID */}

            <div
              className="
                mt-12
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                gap-5
              "
            >

              <ServiceCard
                icon="❄️"
                title="AC & Appliance Care"
                description="Regular servicing and maintenance for essential home appliances."
              />

              <ServiceCard
                icon="⚡"
                title="Electrical Services"
                description="Everyday electrical maintenance, fittings and troubleshooting."
              />

              <ServiceCard
                icon="🚰"
                title="Plumbing Services"
                description="Leakages, blockages, fittings and routine plumbing maintenance."
              />

              <ServiceCard
                icon="🪚"
                title="Carpentry Services"
                description="Doors, hinges, handles, fittings and everyday carpentry work."
              />

              <ServiceCard
                icon="🧹"
                title="Cleaning & Home Care"
                description="Regular cleaning, deep cleaning and other home-care services."
              />

              <ServiceCard
                icon="🏠"
                title="Annual Home Care Plans"
                description="Structured plans for homeowners who want regular maintenance handled throughout the year."
                featured
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY JAGDISH CARE
        ===================================================== */}

        <section className="bg-white">

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-20
              lg:py-24
            "
          >

            <div className="text-center max-w-2xl mx-auto">

              <SectionLabel>
                WHY JAGDISH CARE
              </SectionLabel>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                  tracking-tight
                "
              >
                One Home.
                <br />

                <span className="text-brand-orange">
                  One Service Partner.
                </span>
              </h2>

            </div>


            <div
              className="
                mt-14
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-4
                gap-5
              "
            >

              <WhyCard
                icon="🛠️"
                title="Multiple Services"
                text="Manage more of your home's everyday service needs through one service partner."
              />

              <WhyCard
                icon="👨‍🔧"
                title="Professional Service"
                text="We aim to connect customers with trained and reliable professionals for the work they need."
              />

              <WhyCard
                icon="₹"
                title="Transparent Pricing"
                text="Clear service scope and pricing so customers know what they are paying for."
              />

              <WhyCard
                icon="🤝"
                title="Service Support"
                text="Our goal is to make the complete service experience easier, not just the booking."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="bg-[#f8f9fa]">

          <div
            className="
              max-w-7xl
              mx-auto
              px-5
              sm:px-8
              lg:px-10
              py-20
              lg:py-24
            "
          >

            <div className="text-center">

              <SectionLabel>
                HOW IT WORKS
              </SectionLabel>

              <h2
                className="
                  mt-4
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-black
                "
              >
                Home Care,
                <span className="text-brand-orange">
                  {" "}Made Simple.
                </span>
              </h2>

            </div>


            <div
              className="
                mt-14
                grid
                grid-cols-1
                md:grid-cols-3
                gap-8
                relative
              "
            >

              <StepCard
                number="01"
                title="Tell Us What Your Home Needs"
                text="Choose the service or maintenance plan that fits your requirement."
              />

              <StepCard
                number="02"
                title="We Arrange the Service"
                text="Our team coordinates the appropriate professional for the job."
              />

              <StepCard
                number="03"
                title="Get the Work Done"
                text="The professional visits your home and completes the eligible service."
              />

            </div>

          </div>

        </section>


        {/* =====================================================
            PROMISE
        ===================================================== */}

        <section className="bg-brand-dark">

          <div
            className="
              max-w-4xl
              mx-auto
              px-5
              sm:px-8
              py-20
              lg:py-24
              text-center
            "
          >

            <div
              className="
                mx-auto
                w-14
                h-14
                rounded-2xl
                bg-brand-orange
                text-white
                flex
                items-center
                justify-center
                text-2xl
              "
            >
              ♥
            </div>


            <h2
              className="
                mt-7
                text-3xl
                sm:text-4xl
                lg:text-5xl
                font-black
                leading-tight
                text-white
              "
            >
              Your Home Deserves
              <br />

              <span className="text-brand-orange">
                More Than a Service.
              </span>

            </h2>


            <p
              className="
                mt-6
                max-w-2xl
                mx-auto
                text-sm
                sm:text-base
                leading-7
                text-gray-400
              "
            >
              We want Jagdish Care to become the name homeowners
              think of when something at home needs attention —
              not just for emergencies or repairs, but for regular
              maintenance and keeping the home running smoothly.
            </p>


            <p
              className="
                mt-6
                text-sm
                sm:text-base
                font-bold
                text-white
              "
            >
              Jagdish Care — Home Services, Made Simple.
            </p>


            {/* CTA */}

            <div
              className="
                mt-9
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-3
              "
            >

              <a
                href="https://wa.me/919415726896"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-3.5
                  rounded-xl
                  bg-brand-orange
                  text-white
                  text-sm
                  font-bold
                  hover:bg-orange-600
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                Book a Service
                <span>→</span>
              </a>


              <a
                href="/home-care-plans"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-7
                  py-3.5
                  rounded-xl
                  bg-white/5
                  border
                  border-white/15
                  text-white
                  text-sm
                  font-bold
                  hover:bg-white/10
                  transition-all
                "
              >
                Explore Home Care Plans
              </a>

            </div>

          </div>

        </section>

      </main>


      <Footer />

    </div>
  );
};


/* =========================================================
   SECTION LABEL
========================================================= */

const SectionLabel = ({ children }) => {
  return (
    <span
      className="
        inline-flex
        items-center
        gap-2
        text-[10px]
        sm:text-xs
        font-black
        tracking-[0.16em]
        text-brand-orange
      "
    >

      <span className="w-7 h-px bg-brand-orange" />

      {children}

      <span className="w-7 h-px bg-brand-orange" />

    </span>
  );
};


/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({
  icon,
  title,
  description,
  featured = false,
}) => {

  return (
    <div
      className={`
        group
        rounded-2xl
        p-6
        border
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl

        ${
          featured
            ? "bg-brand-dark border-brand-dark text-white"
            : "bg-white border-gray-100 hover:border-orange-100"
        }
      `}
    >

      <div
        className={`
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          text-xl
          ${
            featured
              ? "bg-brand-orange/20"
              : "bg-orange-50"
          }
        `}
      >
        {icon}
      </div>


      <h3
        className={`
          mt-5
          text-base
          sm:text-lg
          font-bold
          ${
            featured
              ? "text-white"
              : "text-brand-dark"
          }
        `}
      >
        {title}
      </h3>


      <p
        className={`
          mt-2
          text-xs
          sm:text-sm
          leading-6
          ${
            featured
              ? "text-gray-400"
              : "text-gray-500"
          }
        `}
      >
        {description}
      </p>

    </div>
  );
};


/* =========================================================
   WHY CARD
========================================================= */

const WhyCard = ({
  icon,
  title,
  text,
}) => {

  return (
    <div
      className="
        p-6
        rounded-2xl
        border
        border-gray-100
        bg-white
        hover:border-orange-100
        hover:shadow-lg
        transition-all
      "
    >

      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-orange-50
          flex
          items-center
          justify-center
          text-xl
        "
      >
        {icon}
      </div>


      <h3
        className="
          mt-5
          text-base
          font-bold
          text-brand-dark
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-2
          text-xs
          sm:text-sm
          leading-6
          text-gray-500
        "
      >
        {text}
      </p>

    </div>
  );
};


/* =========================================================
   STEP CARD
========================================================= */

const StepCard = ({
  number,
  title,
  text,
}) => {

  return (
    <div className="relative text-center">

      <div
        className="
          mx-auto
          w-16
          h-16
          rounded-2xl
          bg-white
          border
          border-orange-100
          shadow-sm
          flex
          items-center
          justify-center
          text-brand-orange
          text-lg
          font-black
        "
      >
        {number}
      </div>


      <h3
        className="
          mt-6
          text-base
          sm:text-lg
          font-bold
          text-brand-dark
        "
      >
        {title}
      </h3>


      <p
        className="
          mt-2
          max-w-xs
          mx-auto
          text-xs
          sm:text-sm
          leading-6
          text-gray-500
        "
      >
        {text}
      </p>

    </div>
  );
};


export default AboutUs;