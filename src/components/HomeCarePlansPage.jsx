import Navbar from "./Navbar";
import Footer from "./Footer";
import Care360Plans from "./Care360Plans";

const plans = [
  {
    name: "JAGDISH CARE ESSENTIAL",
    price: "₹3,999",
    description:
      "Essential home maintenance support for everyday household needs.",
    ideal: "Ideal for homes up to 2 BHK",
    features: [
      "1 AC Service",
      "1 RO Service",
      "Electrical Maintenance",
      "Carpenter Maintenance",
    ],
    note: "No Warranty Included",
    popular: false,
  },
  {
    name: "JAGDISH CARE PREMIUM",
    price: "₹7,999",
    description:
      "Complete maintenance support with additional appliance and service coverage.",
    ideal: "Ideal for regular home maintenance",
    features: [
      "2 AC Services",
      "1 AC Gas Refill",
      "1 RO Service",
      "1 Geyser Service",
      "Plumbing Support",
      "Electrical Support",
      "Normal Floor Cleaning",
      "Carpenter Maintenance",
      "3-Month Service Warranty",
    ],
    note: "3 Months Service Warranty",
    popular: true,
  },
];

const HomeCarePlansPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orange">
              JAGDISH CARE HOME PLANS
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              One Plan.
              <br />
              <span className="text-brand-orange">
                Complete Home Care.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-300">
              Your home needs regular maintenance. Instead of arranging
              different professionals every time, choose a yearly home care
              plan designed to keep your essential services covered.
            </p>
          </div>
        </div>
      </section>



      {/* COMPLETE 360 */}
      <section className="bg-gray-50 py-0 ">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Existing Care360Plans component */}
          <Care360Plans />

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-dark">
              How Your Home Care Plan Works
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                number: "01",
                title: "Choose Your Plan",
                text: "Select the annual plan that matches your home's maintenance requirements.",
              },
              {
                number: "02",
                title: "Book a Service",
                text: "Whenever a covered service is required, contact Jagdish Care.",
              },
              {
                number: "03",
                title: "Professional Service",
                text: "Our service process is arranged according to your requirement.",
              },
              {
                number: "04",
                title: "Keep Your Home Maintained",
                text: "Regular maintenance helps you manage multiple home care needs through one plan.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                <div className="text-4xl font-bold text-brand-orange/30">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-dark py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Your home deserves regular care.
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
            Choose a Jagdish Care annual plan and keep your essential home
            maintenance organised throughout the year.
          </p>

          <a
            href="https://wa.me/919415726796"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-8 items-center justify-center rounded-full bg-brand-orange px-8 py-4 font-bold text-white transition-all hover:scale-[1.02] hover:bg-orange-600"
          >
            Talk to Jagdish Care
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeCarePlansPage;