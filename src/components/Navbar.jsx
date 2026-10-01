import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // =========================================================
  // LOCK BACKGROUND SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu whenever route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="sticky top-0 z-[100] w-full bg-white shadow-sm border-b border-gray-100">

        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-20">

          <div className="flex justify-between items-center h-20">

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex-shrink-0 flex items-center">

              <Link
                to="/"
                onClick={closeMenu}
                className="flex items-center"
              >
                <img
                  className="h-20 w-auto cursor-pointer object-contain"
                  src="/images/logo.png"
                  alt="Jagdish Care Home Services"
                />
              </Link>

            </div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden lg:flex lg:items-center lg:space-x-8">

              <NavLink
                to="/"
                active={isActive("/")}
              >
                Home
              </NavLink>

              

              <NavLink
                to="/home-care-plans"
                active={isActive("/home-care-plans")}
              >
                Home Care Plans
              </NavLink>

              <NavLink
                to="/#how-it-works"
                active={false}
              >
                How It Works
              </NavLink>

              <NavLink
                to="/about"
                active={isActive("/about")}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                active={isActive("/contact")}
              >
                Contact
              </NavLink>

            </div>

            {/* =================================================
                DESKTOP WHATSAPP
            ================================================= */}

            <div className="hidden lg:flex items-center">

              <a
                href="https://wa.me/919415726896"
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center
                  space-x-2
                  border-2
                  border-brand-green
                  rounded-full
                  px-5
                  py-2.5
                  text-brand-dark
                  font-semibold
                  hover:bg-green-50
                  hover:-translate-y-0.5
                  transition-all
                "
              >

                {/* WhatsApp Icon */}
                <svg
                  className="w-6 h-6 text-brand-green"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="
                      M12.031 6.172c-3.181 0-5.767 2.586-5.768
                      5.766-.001 1.298.38 2.27 1.019 3.287l-.582
                      2.128 2.182-.573c.978.58 1.911.928 3.145.929
                      3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.595 1.216.774 1.39.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z
                    "
                  />
                </svg>

                <span>
                  Book on WhatsApp
                </span>

                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>

              </a>

            </div>

            {/* =================================================
                MOBILE / TABLET MENU BUTTON
            ================================================= */}

            <div className="flex lg:hidden items-center">

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="
                  relative
                  z-[120]
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  text-brand-dark
                  hover:text-brand-orange
                  hover:bg-orange-50
                  focus:outline-none
                  transition-all
                "
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
              >

                {isMenuOpen ? (

                  /* CLOSE ICON */
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>

                ) : (

                  /* HAMBURGER ICON */
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                )}

              </button>

            </div>

          </div>

        </div>
      </nav>


      {/* =====================================================
          FULL SCREEN MOBILE / TABLET MENU
      ===================================================== */}

      {isMenuOpen && (
        <div
          className="
            fixed
            inset-0
            z-[90]
            lg:hidden
            bg-white
            w-full
            h-[100dvh]
            overflow-hidden
          "
        >

          {/* =================================================
              MENU CONTAINER
          ================================================= */}

          <div
            className="
              h-full
              w-full
              flex
              flex-col
              pt-24
              px-5
              sm:px-8
              pb-6
            "
          >

            {/* =================================================
                MENU HEADER
            ================================================= */}

            <div className="flex items-center justify-between mb-6">

              <div>
                <p className="text-xs font-bold tracking-[0.18em] text-brand-orange uppercase">
                  Jagdish Care
                </p>

                <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-brand-dark">
                  Navigation
                </h2>
              </div>

            </div>


            {/* =================================================
                NAVIGATION LINKS
            ================================================= */}

            <div className="flex-1 overflow-y-auto overscroll-contain">

              <div className="space-y-2">

                <MobileNavLink
                  to="/"
                  active={isActive("/")}
                  onClick={closeMenu}
                >
                  <span>Home</span>
                  <ArrowIcon />
                </MobileNavLink>


                


                <MobileNavLink
                  to="/home-care-plans"
                  active={isActive("/home-care-plans")}
                  onClick={closeMenu}
                >
                  <span>Home Care Plans</span>
                  <ArrowIcon />
                </MobileNavLink>


                <MobileNavLink
                  to="/#how-it-works"
                  onClick={closeMenu}
                >
                  <span>How It Works</span>
                  <ArrowIcon />
                </MobileNavLink>


                <MobileNavLink
                  to="/about"
                  active={isActive("/about")}
                  onClick={closeMenu}
                >
                  <span>About Us</span>
                  <ArrowIcon />
                </MobileNavLink>


                <MobileNavLink
                  to="/contact"
                  active={isActive("/contact")}
                  onClick={closeMenu}
                >
                  <span>Contact</span>
                  <ArrowIcon />
                </MobileNavLink>

              </div>

            </div>


            {/* =================================================
                BOTTOM CTA
            ================================================= */}

            <div className="pt-5 mt-4 border-t border-gray-200">

              <p className="text-center text-sm text-gray-500 mb-3">
                Need a home service?
              </p>

              <a
                href="https://wa.me/919415726896"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  w-full
                  rounded-full
                  bg-brand-green
                  px-6
                  py-4
                  text-white
                  font-bold
                  shadow-lg
                  hover:brightness-95
                  transition-all
                "
              >

                {/* WhatsApp Icon */}
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="
                      M12.031 6.172c-3.181 0-5.767 2.586-5.768
                      5.766-.001 1.298.38 2.27 1.019 3.287l-.582
                      2.128 2.182-.573c.978.58 1.911.928 3.145.929
                      3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.595 1.216.774 1.39.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z
                    "
                  />
                </svg>

                <span>
                  Book on WhatsApp
                </span>

                <span className="text-lg">
                  →
                </span>

              </a>

            </div>

          </div>

        </div>
      )}

    </>
  );
};


/* =========================================================
   DESKTOP NAV LINK
========================================================= */

const NavLink = ({
  to,
  children,
  active = false,
}) => {

  return (
    <Link
      to={to}
      className={`
        relative
        text-sm
        font-semibold
        transition-colors
        py-2

        ${
          active
            ? "text-brand-orange"
            : "text-brand-dark hover:text-brand-orange"
        }

        after:absolute
        after:left-0
        after:-bottom-0.5
        after:h-[2px]
        after:bg-brand-orange
        after:transition-all
        after:duration-300

        ${
          active
            ? "after:w-full"
            : "after:w-0 hover:after:w-full"
        }
      `}
    >
      {children}
    </Link>
  );
};


/* =========================================================
   MOBILE NAV LINK
========================================================= */

const MobileNavLink = ({
  to,
  children,
  active = false,
  onClick,
}) => {

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        group
        flex
        items-center
        justify-between
        w-full
        rounded-2xl
        px-5
        py-4
        sm:py-5
        text-base
        sm:text-lg
        font-semibold
        transition-all
        border

        ${
          active
            ? "bg-orange-50 border-brand-orange/20 text-brand-orange"
            : "bg-white border-gray-100 text-brand-dark hover:bg-orange-50 hover:border-orange-100 hover:text-brand-orange"
        }
      `}
    >

      {children}

    </Link>
  );
};


/* =========================================================
   ARROW ICON
========================================================= */

const ArrowIcon = () => (
  <svg
    className="
      w-5
      h-5
      text-gray-400
      group-hover:text-brand-orange
      group-hover:translate-x-1
      transition-all
    "
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 5l7 7-7 7"
    />
  </svg>
);


export default Navbar;