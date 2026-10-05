import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white text-brand-dark">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f8f5ef]">

          {/* Decorative background */}

          <div
            className="
              absolute
              -left-32
              top-10
              w-72
              h-72
              rounded-full
              bg-orange-100/50
              blur-3xl
              pointer-events-none
            "
          />

          <div
            className="
              absolute
              right-0
              bottom-0
              w-80
              h-80
              rounded-full
              bg-orange-50/60
              blur-3xl
              pointer-events-none
            "
          />


          <div
            className="
              relative
              max-w-[1400px]
              mx-auto
              px-5
              sm:px-8
              lg:px-12
              py-10
              sm:py-14
              lg:py-16
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[0.95fr_1.05fr]
                items-center
              "
            >

              {/* =================================================
                  LEFT HERO CONTENT
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  py-8
                  lg:py-0
                  lg:pr-8
                "
              >

                {/* Label */}

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-3
                    py-1.5
                    rounded-full
                    bg-orange-100/70
                    mb-5
                  "
                >

                  <span
                    className="
                      w-8
                      h-8
                      rounded-full
                      bg-brand-orange
                      flex
                      items-center
                      justify-center
                      text-white
                    "
                  >

                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 11.5L12 4l9 7.5" />
                      <path d="M5 10.5V20h14v-9.5" />
                      <path d="M9 20v-5h6v5" />
                    </svg>

                  </span>


                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      tracking-wide
                      text-brand-dark
                    "
                  >
                    CONTACT US
                  </span>

                </div>


                {/* Heading */}

                <h1
                  className="
                    text-[42px]
                    sm:text-5xl
                    lg:text-[58px]
                    xl:text-[64px]
                    leading-[0.98]
                    tracking-[-0.045em]
                    font-black
                    text-brand-dark
                  "
                >
                  We're Here to

                  <br />

                  <span className="text-brand-orange">
                    Help You.
                  </span>

                </h1>


                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-[590px]
                    text-sm
                    sm:text-base
                    lg:text-lg
                    leading-7
                    text-gray-600
                  "
                >
                  Have a question, need help with a booking, or want
                  to know more about our services? Our team is just
                  a call or message away.
                </p>


                {/* Small benefits */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-2
                    sm:grid-cols-4
                    lg:grid-cols-4
                    gap-4
                    max-w-[650px]
                  "
                >

                  <MiniFeature
                    icon="⚡"
                    title="Quick"
                    subtitle="Response"
                  />

                  <MiniFeature
                    icon="◉"
                    title="Friendly"
                    subtitle="Support"
                  />

                  <MiniFeature
                    icon="▣"
                    title="Service"
                    subtitle="Assistance"
                  />

                  <MiniFeature
                    icon="♙"
                    title="Dedicated"
                    subtitle="Team"
                  />

                </div>

              </div>


              {/* =================================================
                  HERO IMAGE
              ================================================= */}

              <div
                className="
                hidden
                lg:block
                  relative
                  w-full
                  min-h-[280px]
                  sm:min-h-[360px]
                  lg:min-h-[480px]
                  overflow-hidden
                "
              >

                <img
                  src="/images/hero-service-bg.png"
                  alt="Jagdish Care professional"
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    object-center
                    sm:object-right
                  "
                />


                {/* Soft white fade */}

                <div
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-1/2
                    sm:w-2/5
                    lg:w-1/3
                    bg-gradient-to-r
                    from-[#f8f5ef]
                    via-[#f8f5ef]/60
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            CONTACT INFO CARDS
        ===================================================== */}

        <section
          className="
            relative
            z-20
            -mt-1
            px-5
            sm:px-8
            lg:px-12
          "
        >

          <div
            className="
              max-w-[1320px]
              mx-auto
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >

            <ContactInfoCard
              icon="location"
              title="Our Location"
              value="Noida, Uttar Pradesh"
              subtitle="Serving across Noida"
            />

            <ContactInfoCard
              icon="phone"
              title="Call Us"
              value="+91 94157 26796"
              subtitle="Mon - Sun, 8:00 AM - 8:00 PM"
              href="tel:+919415726796"
            />

            <ContactInfoCard
              icon="email"
              title="Email Us"
              value="support@jagdishcare.in"
              subtitle="We reply within 1 hour"
              href="mailto:support@jagdishcare.in"
            />

            <ContactInfoCard
              icon="whatsapp"
              title="Chat on WhatsApp"
              value="Quick response"
              subtitle="Talk to our support team"
              href="https://wa.me/919415726796"
              whatsapp
            />

          </div>

        </section>


        {/* =====================================================
            CONTACT FORM + LOCATION
        ===================================================== */}

        <section className="bg-white">

          <div
            className="
              max-w-[1320px]
              mx-auto
              px-5
              sm:px-8
              lg:px-12
              py-12
              sm:py-16
              lg:py-20
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-5
              "
            >

              {/* =================================================
                  FORM
              ================================================= */}

              <div
                className="
                  rounded-3xl
                  bg-brand-dark
                  p-6
                  sm:p-8
                  lg:p-9
                  text-white
                "
              >

                <div className="flex items-center gap-3">

                  <span className="w-10 h-[2px] bg-brand-orange" />

                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      tracking-[0.15em]
                      text-white
                    "
                  >
                    SEND US A MESSAGE
                  </span>

                </div>


                <h2
                  className="
                    mt-4
                    text-3xl
                    sm:text-4xl
                    font-black
                    tracking-tight
                  "
                >
                  Get in Touch
                </h2>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-gray-400
                  "
                >
                  Fill out the form and our team will get back
                  to you shortly.
                </p>


                <form
                  className="mt-7 space-y-3"
                  onSubmit={(e) => e.preventDefault()}
                >

                  {/* Name + Phone */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-3
                    "
                  >

                    <InputField
                      label="Full Name *"
                      placeholder="Enter your name"
                    />

                    <InputField
                      label="Mobile Number *"
                      placeholder="Enter your mobile number"
                      type="tel"
                    />

                  </div>


                  {/* Email */}

                  <InputField
                    label="Email Address"
                    placeholder="Enter your email (optional)"
                    type="email"
                  />


                  {/* Message */}

                  <div>

                    <label
                      className="
                        block
                        text-[10px]
                        sm:text-xs
                        font-semibold
                        text-gray-300
                        mb-1.5
                      "
                    >
                      Your Message *
                    </label>

                    <textarea
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      className="
                        w-full
                        rounded-xl
                        bg-white
                        text-gray-800
                        px-4
                        py-3
                        text-xs
                        sm:text-sm
                        outline-none
                        resize-none
                        placeholder:text-gray-400
                        focus:ring-2
                        focus:ring-orange-500/30
                      "
                    />

                  </div>


                  {/* Submit */}

                  <button
                    type="submit"
                    className="
                      w-full
                      mt-2
                      h-12
                      rounded-xl
                      bg-brand-orange
                      hover:bg-orange-600
                      text-white
                      text-sm
                      font-bold
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-all
                    "
                  >
                    Send Message

                    <span>→</span>

                  </button>

                </form>

              </div>


              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="flex flex-col gap-4">

                {/* ================= MAP ================= */}

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-3xl
                    h-[330px]
                    sm:h-[390px]
                    lg:h-[395px]
                    w-full
                    bg-gray-100
                  "
                >

                  <iframe
                    src="https://www.google.com/maps?q=Noida%2C%20Uttar%20Pradesh&output=embed"
                    title="Jagdish Care Location"
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      border-0
                    "
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />


                  {/* Light overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-white/5
                      pointer-events-none
                    "
                  />


                  {/* Location card */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      bg-white
                      rounded-2xl
                      shadow-xl
                      px-5
                      py-4
                      min-w-[210px]
                      max-w-[calc(100%-32px)]
                    "
                  >

                    <div className="flex items-start gap-3">

                      <div
                        className="
                          w-10
                          h-10
                          rounded-full
                          bg-brand-orange
                          text-white
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                        "
                      >

                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" />
                          <circle
                            cx="12"
                            cy="10"
                            r="2.5"
                          />
                        </svg>

                      </div>


                      <div>

                        <p
                          className="
                            text-sm
                            font-bold
                            text-brand-dark
                          "
                        >
                          Jagdish Care
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-xs
                            text-gray-600
                          "
                        >
                          Noida, Uttar Pradesh
                        </p>

                        <p
                          className="
                            mt-0.5
                            text-[10px]
                            text-gray-400
                          "
                        >
                          Serving across Noida
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ================= OFFICE CARD ================= */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    shadow-sm
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    gap-5
                  "
                >

                  <div>

                    <p
                      className="
                        text-base
                        sm:text-lg
                        font-bold
                        text-brand-dark
                      "
                    >
                      Visit Our Office
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-gray-700
                      "
                    >
                      Noida, Uttar Pradesh
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-gray-500
                      "
                    >
                      Serving across Noida and nearby areas.
                    </p>

                  </div>


                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Noida%2C%20Uttar%20Pradesh"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      px-5
                      py-3
                      rounded-full
                      border
                      border-gray-300
                      text-xs
                      sm:text-sm
                      font-bold
                      text-brand-dark
                      hover:border-brand-orange
                      hover:text-brand-orange
                      transition-all
                      whitespace-nowrap
                    "
                  >

                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9 20-7z" />
                    </svg>

                    Get Directions

                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SUPPORT CTA
        ===================================================== */}

        <section
          className="
            relative
            overflow-hidden
            bg-[#fff7ed]
          "
        >

          <div
            className="
              absolute
              -left-20
              bottom-0
              w-56
              h-56
              rounded-full
              bg-orange-100/60
              blur-3xl
              pointer-events-none
            "
          />


          <div
            className="
              relative
              max-w-[1320px]
              mx-auto
              px-5
              sm:px-8
              lg:px-12
              py-14
              sm:py-16
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-[1fr_auto]
                items-center
                gap-10
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
                    bg-orange-100
                  "
                >

                  <span
                    className="
                      w-7
                      h-7
                      rounded-full
                      bg-brand-orange
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                    "
                  >
                    ?
                  </span>


                  <span
                    className="
                      text-[10px]
                      sm:text-xs
                      font-bold
                      tracking-wide
                      text-brand-dark
                    "
                  >
                    STILL HAVE QUESTIONS?
                  </span>

                </div>


                <h2
                  className="
                    mt-5
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-black
                    leading-tight
                    text-brand-dark
                  "
                >
                  We're Always{" "}

                  <span className="text-brand-orange">
                    Here to Help.
                  </span>

                </h2>


                <p
                  className="
                    mt-4
                    max-w-xl
                    text-sm
                    sm:text-base
                    leading-7
                    text-gray-600
                  "
                >
                  Whether it's a service inquiry, booking support
                  or general questions, our team is happy to assist you.
                </p>

              </div>


              {/* RIGHT FEATURES */}

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  lg:grid-cols-3
                  gap-6
                  lg:min-w-[580px]
                "
              >

                <SupportFeature
                  icon="◉"
                  title="Quick Support"
                  text="We usually respond within 1 hour"
                />

                <SupportFeature
                  icon="▣"
                  title="Booking Assistance"
                  text="Help with new or existing bookings"
                />

                <SupportFeature
                  icon="i"
                  title="General Inquiries"
                  text="Any questions about our services or plans"
                />

              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
};


/* =========================================================
   MINI FEATURE
========================================================= */

const MiniFeature = ({
  icon,
  title,
  subtitle,
}) => {

  return (
    <div className="flex items-center gap-2">

      <div
        className="
          w-9
          h-9
          rounded-full
          bg-white
          shadow-sm
          flex
          items-center
          justify-center
          text-brand-orange
          text-sm
          flex-shrink-0
        "
      >
        {icon}
      </div>


      <div>

        <p
          className="
            text-[10px]
            sm:text-xs
            font-bold
            text-brand-dark
          "
        >
          {title}
        </p>

        <p
          className="
            text-[10px]
            sm:text-xs
            text-gray-500
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   CONTACT INFO CARD
========================================================= */

const ContactInfoCard = ({
  icon,
  title,
  value,
  subtitle,
  href,
  whatsapp = false,
}) => {

  const content = (
    <div
      className="
        h-full
        bg-white
        rounded-2xl
        border
        border-gray-100
        shadow-sm
        px-4
        sm:px-5
        py-4
        flex
        items-center
        gap-3
        transition-all
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div
        className={`
          w-11
          h-11
          rounded-full
          flex
          items-center
          justify-center
          flex-shrink-0
          ${
            whatsapp
              ? "bg-green-50 text-green-600"
              : "bg-orange-50 text-brand-orange"
          }
        `}
      >

        <InfoIcon type={icon} />

      </div>


      <div className="min-w-0">

        <p
          className="
            text-[10px]
            sm:text-xs
            font-semibold
            text-gray-500
          "
        >
          {title}
        </p>


        <p
          className="
            mt-0.5
            text-xs
            sm:text-sm
            font-bold
            text-brand-dark
            truncate
          "
        >
          {value}
        </p>


        <p
          className="
            mt-0.5
            text-[9px]
            sm:text-[10px]
            text-gray-400
          "
        >
          {subtitle}
        </p>

      </div>

    </div>
  );


  if (href) {

    return (
      <a
        href={href}
        target={
          href.startsWith("http")
            ? "_blank"
            : undefined
        }
        rel={
          href.startsWith("http")
            ? "noreferrer"
            : undefined
        }
      >
        {content}
      </a>
    );

  }


  return content;
};


/* =========================================================
   INFO ICON
========================================================= */

const InfoIcon = ({ type }) => {

  const common = {
    className: "w-5 h-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  if (type === "location") {

    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1116 0z" />
        <circle
          cx="12"
          cy="10"
          r="2.5"
        />
      </svg>
    );

  }


  if (type === "phone") {

    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.8 19.8 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.9.33 1.78.63 2.63a2 2 0 01-.45 2.11L8.02 9.73a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0122 16.92z" />
      </svg>
    );

  }


  if (type === "email") {

    return (
      <svg {...common}>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />

        <path d="M3 7l9 6 9-6" />
      </svg>
    );

  }


  if (type === "whatsapp") {

    return (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >

        <path d="M20.5 3.5A11.7 11.7 0 0012.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.4-1.6a11.8 11.8 0 005.5 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.4-8.5z" />

        <path
          fill="white"
          d="M17.5 14.4c-.3-.1-1.8-.9-2.1-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z"
        />

      </svg>
    );

  }


  return null;
};


/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  placeholder,
  type = "text",
}) => {

  return (
    <div>

      <label
        className="
          block
          text-[10px]
          sm:text-xs
          font-semibold
          text-gray-300
          mb-1.5
        "
      >
        {label}
      </label>


      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          h-11
          px-4
          rounded-xl
          bg-white
          text-gray-800
          text-xs
          sm:text-sm
          outline-none
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-orange-500/30
        "
      />

    </div>
  );
};


/* =========================================================
   SUPPORT FEATURE
========================================================= */

const SupportFeature = ({
  icon,
  title,
  text,
}) => {

  return (
    <div className="flex items-start gap-3">

      <div
        className="
          w-11
          h-11
          rounded-full
          bg-white
          flex
          items-center
          justify-center
          text-brand-orange
          font-bold
          flex-shrink-0
          shadow-sm
        "
      >
        {icon}
      </div>


      <div>

        <h3
          className="
            text-xs
            sm:text-sm
            font-bold
            text-brand-dark
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-1
            max-w-[150px]
            text-[10px]
            sm:text-xs
            leading-5
            text-gray-500
          "
        >
          {text}
        </p>

      </div>

    </div>
  );
};


export default ContactUs;