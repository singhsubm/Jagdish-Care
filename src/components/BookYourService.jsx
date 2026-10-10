const BookYourService = () => {
  return (
    <section className="relative w-full overflow-hidden">

      {/* ================= BACKGROUND IMAGE ================= */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-service-bg.png"
          alt=""
          className="
            w-full
            h-full
            object-cover
            object-center
          "
        />

        {/* Light overlay for text readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white/10
            via-transparent
            to-transparent
          "
        />
      </div>


      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          min-h-[300px]
          sm:min-h-[360px]
          lg:min-h-[390px]
          px-6
          sm:px-8
          lg:px-10
          flex
          items-center
        "
      >

        <div className="w-full lg:w-[55%] py-10 sm:py-14">

          {/* Small Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-white/80
              backdrop-blur-sm
              shadow-sm
              mb-4
            "
          >

            <span
              className="
                w-5
                h-5
                rounded-full
                bg-brand-orange
                text-white
                flex
                items-center
                justify-center
                text-[10px]
              "
            >
              ★
            </span>

            <span
              className="
                text-[9px]
                sm:text-[10px]
                font-black
                tracking-wide
                text-brand-dark
              "
            >
              READY TO GET STARTED?
            </span>

          </div>


          {/* ================= HEADING ================= */}

          <h1
            className="
              text-[32px]
              leading-[1.02]
              sm:text-[42px]
              sm:leading-[1.02]
              lg:text-[50px]
              lg:leading-[1]
              xl:text-[56px]
              font-black
              tracking-[-0.035em]
              text-brand-dark
              max-w-[650px]
            "
          >
            Book Your Home Service
            <br />

            in{" "}
            <span className="text-brand-orange">
              Minutes
            </span>
          </h1>


          {/* ================= DESCRIPTION ================= */}

          <p
            className="
              mt-4
              text-xs
              sm:text-sm
              lg:text-base
              text-gray-600
              leading-relaxed
              max-w-[560px]
            "
          >
            Join hundreds of happy homeowners who trust Jagdish Care
            for reliable, affordable and professional home services.
          </p>


          {/* ================= BUTTONS ================= */}

          <div
            className="
              mt-5
              flex
              flex-col
              xs:flex-row
              sm:flex-row
              gap-3
            "
          >

            {/* WhatsApp */}

            <a
              href="https://wa.me/919415726796"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                sm:px-6
                py-3
                rounded-full
                bg-brand-orange
                text-white
                text-xs
                sm:text-sm
                font-bold
                shadow-lg
                shadow-orange-200
                hover:bg-orange-600
                hover:-translate-y-0.5
                transition-all
              "
            >

              {/* WhatsApp Icon */}

              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="
                    M20.52 3.48
                    A11.78 11.78 0 0 0 12.1 0
                    C5.58 0 .27 5.31.27 11.83
                    c0 2.08.54 4.11 1.57 5.9L.17 24
                    l6.42-1.64a11.8 11.8 0 0 0 5.51 1.4h.01
                    c6.52 0 11.83-5.31 11.83-11.83
                    0-3.16-1.23-6.13-3.42-8.45z
                  "
                />

                <path
                  fill="white"
                  d="
                    M17.47 14.43
                    c-.3-.15-1.77-.87-2.05-.97
                    -.27-.1-.47-.15-.67.15
                    -.2.3-.77.97-.95 1.17
                    -.17.2-.35.22-.65.07
                    -.3-.15-1.26-.46-2.4-1.48
                    -.89-.79-1.49-1.77-1.66-2.07
                    -.17-.3-.02-.46.13-.61
                    .13-.13.3-.35.45-.52
                    .15-.17.2-.3.2-.5
                    .1-.2.05-.37-.02-.52
                    -.07-.15-.67-1.62-.92-2.22
                    -.24-.58-.49-.5-.67-.51
                    -.17-.01-.37-.01-.57-.01
                    -.2 0-.52.07-.79.37
                    -.27.3-1.04 1.02-1.04 2.48
                    0 1.46 1.07 2.87 1.22 3.07
                    .15.2 2.1 3.21 5.09 4.5
                    .71.31 1.27.5 1.7.64
                    .72.23 1.37.2 1.89.12
                    .58-.09 1.77-.72 2.02-1.42
                    .25-.7.25-1.3.17-1.42
                    -.07-.12-.27-.2-.57-.35z
                  "
                />
              </svg>

              Book on WhatsApp

              <span>→</span>

            </a>


            {/* Call */}

            <a
              href="tel:+919415726796"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-5
                sm:px-6
                py-3
                rounded-full
                bg-white/80
                backdrop-blur-sm
                border
                border-gray-400
                text-brand-dark
                text-xs
                sm:text-sm
                font-bold
                hover:bg-white
                hover:-translate-y-0.5
                transition-all
              "
            >

              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="
                    M22 16.92v3a2 2 0 0 1-2.18 2
                    19.79 19.79 0 0 1-8.63-3.07
                    19.5 19.5 0 0 1-6-6
                    19.79 19.79 0 0 1-3.07-8.67
                    A2 2 0 0 1 4.11 2h3
                    a2 2 0 0 1 2 1.72
                    12.84 12.84 0 0 0 .7 3.11
                    2 2 0 0 1-.45 2.11L8.09 10.2
                    a16 16 0 0 0 6 6l1.26-1.26
                    a2 2 0 0 1 2.11-.45
                    12.84 12.84 0 0 0 3.11.7
                    A2 2 0 0 1 22 16.92z
                  "
                />
              </svg>

              Call Now

            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BookYourService;