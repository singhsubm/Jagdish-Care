import React, { useState } from "react";

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <footer className="bg-[#061925] text-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        <div className="py-12 lg:py-14">

          {/* =================================================
              DESKTOP FOOTER
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-[1.45fr_0.75fr_1fr_1.15fr]
              gap-10
              lg:gap-12
            "
          >

            {/* =================================================
                BRAND
            ================================================= */}

            <div className="lg:pr-8">

              <a
                href="/"
                className="inline-block"
              >
                <img
                  src="/images/logo-white.png"
                  alt="Jagdish Care"
                  className="
                    w-[180px]
                    sm:w-[195px]
                    h-auto
                    object-contain
                  "
                />
              </a>


              <p
                className="
                  mt-5
                  max-w-[350px]
                  text-[13px]
                  leading-6
                  text-gray-400
                "
              >
                Your trusted partner for all home services.
                From cleaning to repairs, we make home care
                simple, affordable and hassle-free.
              </p>


              {/* SOCIAL ICONS */}

              <div className="flex items-center gap-2.5 mt-6">

                <SocialIcon
                  href="https://wa.me/91XXXXXXXXXX"
                  type="whatsapp"
                />

                <SocialIcon
                  href="#"
                  type="instagram"
                />

                <SocialIcon
                  href="#"
                  type="facebook"
                />

                <SocialIcon
                  href="#"
                  type="youtube"
                />

                <SocialIcon
                  href="#"
                  type="linkedin"
                />

              </div>

            </div>


            {/* =================================================
                QUICK LINKS - DESKTOP
            ================================================= */}

            <div className="hidden lg:block">

              <FooterHeading>
                Quick Links
              </FooterHeading>

              <FooterLinks
                links={[
                  ["Home", "/"],
                  ["Our Services", "/services"],
                  ["Home Care Plans", "/#care-plans"],
                  ["How It Works", "/#how-it-works"],
                  ["About Us", "/about"],
                  ["Contact", "/contact"],
                ]}
              />

            </div>


            {/* =================================================
                OUR SERVICES - DESKTOP
            ================================================= */}

            <div className="hidden lg:block">

              <FooterHeading>
                Our Services
              </FooterHeading>

              <FooterLinks
                links={[
                  ["Deep Cleaning", "/services/deep-cleaning"],
                  ["Pest Control", "/services/pest-control"],
                  ["Electrical Services", "/services/electrical"],
                  ["Plumbing Services", "/services/plumbing"],
                  ["AC Service", "/services/ac"],
                  ["Home Appliance Repair", "/services/appliance-repair"],
                  ["Geyser Service", "/services/geyser"],
                  ["Carpentry Services", "/services/carpentry"],
                  ["Painting Services", "/services/painting"],
                  ["Civil & Renovation", "/services/civil-renovation"],
                  ["More Services", "/services"],
                ]}
              />

            </div>


            {/* =================================================
                CONTACT US
            ================================================= */}

            <div>

              <FooterHeading>
                Contact Us
              </FooterHeading>


              <ContactItem
                icon="location"
                title="Noida, Uttar Pradesh"
                subtitle="Serving across Noida"
              />


              <ContactItem
                icon="phone"
                title="+91 94157 26896"
                subtitle="Mon - Sun, 8:00 AM - 8:00 PM"
              />


              <ContactItem
                icon="email"
                title="support@jagdishcare.in"
                subtitle="We reply within 1 hour"
              />


              <ContactItem
                icon="whatsapp"
                title="Chat on WhatsApp"
                subtitle="Quick response"
                href="https://wa.me/91XXXXXXXXXX"
              />

            </div>

          </div>


          {/* =================================================
              MOBILE ACCORDIONS
          ================================================= */}

          <div className="lg:hidden mt-8 border-t border-white/10">

            {/* QUICK LINKS */}

            <MobileAccordion
              title="Quick Links"
              isOpen={openMenu === "links"}
              onClick={() => toggleMenu("links")}
            >

              <FooterLinks
                links={[
                  ["Home", "/"],
                  ["Our Services", "/services"],
                  ["Home Care Plans", "/#care-plans"],
                  ["How It Works", "/#how-it-works"],
                  ["About Us", "/about"],
                  ["Contact", "/contact"],
                ]}
              />

            </MobileAccordion>


            {/* SERVICES */}

            <MobileAccordion
              title="Our Services"
              isOpen={openMenu === "services"}
              onClick={() => toggleMenu("services")}
            >

              <div className="grid grid-cols-2 gap-x-6 gap-y-3">

                {[
                  ["Deep Cleaning", "/services/deep-cleaning"],
                  ["Pest Control", "/services/pest-control"],
                  ["Electrical Services", "/services/electrical"],
                  ["Plumbing Services", "/services/plumbing"],
                  ["AC Service", "/services/ac"],
                  ["Home Appliance Repair", "/services/appliance-repair"],
                  ["Geyser Service", "/services/geyser"],
                  ["Carpentry Services", "/services/carpentry"],
                  ["Painting Services", "/services/painting"],
                  ["Civil & Renovation", "/services/civil-renovation"],
                  ["More Services", "/services"],
                ].map(([label, href]) => (

                  <a
                    key={label}
                    href={href}
                    className="
                      text-xs
                      text-gray-400
                      hover:text-white
                      transition
                    "
                  >
                    {label}
                  </a>

                ))}

              </div>

            </MobileAccordion>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="border-t border-white/10">

        <div
          className="
            max-w-[1400px]
            mx-auto
            px-5
            sm:px-8
            lg:px-12
            py-5
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-3
          "
        >

          {/* COPYRIGHT */}

          <p className="text-[10px] sm:text-xs text-gray-500">
            © {new Date().getFullYear()} Jagdish Care. All rights reserved.
          </p>


          {/* LEGAL LINKS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-[10px]
              sm:text-xs
              text-gray-500
            "
          >

            <a
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>

            <span className="text-gray-700">
              |
            </span>

            <a
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </a>

            <span className="text-gray-700">
              |
            </span>

            <a
              href="/refund-policy"
              className="hover:text-white transition"
            >
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};


/* =========================================================
   FOOTER HEADING
========================================================= */

const FooterHeading = ({ children }) => {
  return (
    <h3
      className="
        text-sm
        font-bold
        text-white
        mb-5
      "
    >
      {children}
    </h3>
  );
};


/* =========================================================
   FOOTER LINKS
========================================================= */

const FooterLinks = ({ links }) => {
  return (
    <div className="space-y-3">

      {links.map(([label, href]) => (

        <a
          key={label}
          href={href}
          className="
            block
            w-fit
            text-xs
            text-gray-400
            hover:text-white
            hover:translate-x-0.5
            transition-all
          "
        >
          {label}
        </a>

      ))}

    </div>
  );
};


/* =========================================================
   MOBILE ACCORDION
========================================================= */

const MobileAccordion = ({
  title,
  isOpen,
  onClick,
  children,
}) => {

  return (
    <div className="border-b border-white/10">

      <button
        type="button"
        onClick={onClick}
        className="
          w-full
          flex
          items-center
          justify-between
          py-5
          text-left
          cursor-pointer
        "
      >

        <span
          className="
            text-sm
            font-bold
            text-white
          "
        >
          {title}
        </span>


        <span
          className={`
            w-7
            h-7
            rounded-full
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            text-gray-400
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        >
          ↓
        </span>

      </button>


      <div
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pb-5"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >

        <div className="overflow-hidden">
          {children}
        </div>

      </div>

    </div>
  );
};


/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({
  icon,
  title,
  subtitle,
  href,
}) => {

  const content = (
    <div
      className="
        flex
        items-start
        gap-3
        mb-4
        group
      "
    >

      <div
        className="
          w-9
          h-9
          rounded-full
          bg-brand-orange
          flex
          items-center
          justify-center
          text-white
          flex-shrink-0
        "
      >
        <ContactIcon type={icon} />
      </div>


      <div className="pt-0.5">

        <p
          className="
            text-xs
            font-semibold
            text-gray-200
            group-hover:text-white
            transition
          "
        >
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[10px]
            text-gray-500
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
        target="_blank"
        rel="noreferrer"
      >
        {content}
      </a>
    );

  }


  return content;
};


/* =========================================================
   CONTACT ICON
========================================================= */

const ContactIcon = ({ type }) => {

  const common = {
    className: "w-4 h-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };


  /* LOCATION */

  if (type === "location") {

    return (
      <svg {...common}>
        <path
          d="
            M20 10
            c0 5-8 11-8 11
            S4 15 4 10
            a8 8 0 1 1 16 0z
          "
        />

        <circle
          cx="12"
          cy="10"
          r="2.5"
        />
      </svg>
    );

  }


  /* PHONE */

  if (type === "phone") {

    return (
      <svg {...common}>
        <path
          d="
            M22 16.92v3
            a2 2 0 01-2.18 2
            19.8 19.8 0 01-8.63-3.07
            19.5 19.5 0 01-6-6
            A19.8 19.8 0 012.12 4.18
            2 2 0 014.11 2h3
            a2 2 0 012 1.72
            c.12.9.33 1.78.63 2.63
            a2 2 0 01-.45 2.11
            L8.02 9.73
            a16 16 0 006 6
            l1.27-1.27
            a2 2 0 012.11-.45
            c.85.3 1.73.51 2.63.63
            A2 2 0 0122 16.92z
          "
        />
      </svg>
    );

  }


  /* EMAIL */

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


  /* WHATSAPP */

  if (type === "whatsapp") {

    return (
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="currentColor"
      >

        <path
          d="
            M20.5 3.5
            A11.7 11.7 0 0012.1 0
            C5.6 0 .3 5.3 .3 11.8
            c0 2.1 .5 4.1 1.6 5.9
            L.2 24
            l6.4-1.6
            a11.8 11.8 0 005.5 1.4
            c6.5 0 11.8-5.3 11.8-11.8
            0-3.2-1.2-6.1-3.4-8.5z
          "
        />

        <path
          fill="white"
          d="
            M17.5 14.4
            c-.3-.1-1.8-.9-2.1-1
            -.3-.1-.5-.1-.7.2
            -.2.3-.8 1-.9 1.2
            -.2.2-.4.2-.7.1
            -.3-.2-1.3-.5-2.4-1.5
            -.9-.8-1.5-1.8-1.7-2.1
            -.2-.3 0-.5.1-.6
            .1-.1.3-.4.5-.5
            .2-.2.2-.3.3-.5
            .1-.2 0-.4 0-.5
            -.1-.2-.7-1.6-.9-2.2
            -.2-.6-.5-.5-.7-.5
            h-.6
            c-.2 0-.5.1-.8.4
            -.3.3-1 1-1 2.5
            s1.1 2.9 1.2 3.1
            c.2.2 2.1 3.2 5.1 4.5
            .7.3 1.3.5 1.7.6
            .7.2 1.4.2 1.9.1
            .6-.1 1.8-.7 2-1.4
            .3-.7.3-1.3.2-1.4
            -.1-.2-.3-.3-.6-.4z
          "
        />

      </svg>
    );

  }


  return null;
};


/* =========================================================
   SOCIAL ICON
========================================================= */

const SocialIcon = ({ href, type }) => {

  const icons = {

    whatsapp: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
      >

        <path
          d="
            M20.5 3.5
            A11.7 11.7 0 0012.1 0
            C5.6 0 .3 5.3 .3 11.8
            c0 2.1 .5 4.1 1.6 5.9
            L.2 24
            l6.4-1.6
            a11.8 11.8 0 005.5 1.4
            c6.5 0 11.8-5.3 11.8-11.8
            0-3.2-1.2-6.1-3.4-8.5z
          "
        />

        <path
          fill="#061925"
          d="
            M17.5 14.4
            c-.3-.1-1.8-.9-2.1-1
            -.3-.1-.5-.1-.7.2
            -.2.3-.8 1-.9 1.2
            -.2.2-.4.2-.7.1
            -.3-.2-1.3-.5-2.4-1.5
            -.9-.8-1.5-1.8-1.7-2.1
            -.2-.3 0-.5.1-.6
            .1-.1.3-.4.5-.5
            .2-.2.2-.3.3-.5
            .1-.2 0-.4 0-.5
            -.1-.2-.7-1.6-.9-2.2
            -.2-.6-.5-.5-.7-.5
            h-.6
            c-.2 0-.5.1-.8.4
            -.3.3-1 1-1 2.5
            s1.1 2.9 1.2 3.1
            c.2.2 2.1 3.2 5.1 4.5
            .7.3 1.3.5 1.7.6
            .7.2 1.4.2 1.9.1
            .6-.1 1.8-.7 2-1.4
            .3-.7.3-1.3.2-1.4
            -.1-.2-.3-.3-.6-.4z
          "
        />

      </svg>
    ),

    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),

    facebook: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="
            M14 8h3V4h-3
            c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9
            c0-.7.3-1 1-1z
          "
        />
      </svg>
    ),

    youtube: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="
            M23.5 6.2
            a3 3 0 00-2.1-2.1
            C19.6 3.5 12 3.5 12 3.5
            s-7.6 0-9.4.6
            A3 3 0 00.5 6.2
            31 31 0 000 12
            a31 31 0 00.5 5.8
            3 3 0 002.1 2.1
            c1.8.6 9.4.6 9.4.6
            s7.6 0 9.4-.6
            a3 3 0 002.1-2.1
            A31 31 0 0024 12
            a31 31 0 00-.5-5.8z
            M9.6 15.5v-7l6.2 3.5-6.2 3.5z
          "
        />
      </svg>
    ),

    linkedin: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="
            M5.2 3
            A2.2 2.2 0 113 5.2
            2.2 2.2 0 015.2 3z

            M3.3 8.5h3.8V21H3.3V8.5z

            M9.5 8.5h3.6v1.7h.1
            c.5-1 1.8-2.1 3.7-2.1
            4 0 4.8 2.6 4.8 6V21h-3.8
            v-6.1
            c0-1.5 0-3.5-2.1-3.5
            s-2.4 1.7-2.4 3.4V21H9.5V8.5z
          "
        />
      </svg>
    ),

  };


  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        w-9
        h-9
        rounded-full
        bg-white/10
        border
        border-white/10
        flex
        items-center
        justify-center
        text-gray-300
        hover:bg-brand-orange
        hover:text-white
        hover:border-brand-orange
        transition-all
      "
    >

      <span className="w-4 h-4">
        {icons[type]}
      </span>

    </a>
  );
};


export default Footer;