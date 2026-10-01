import React, { useState } from 'react';

const PricingPlansSection = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'essential',
      name: 'JAGDISH CARE ESSENTIAL',
      badge: 'Essential Home Maintenance',
      price: '₹3,999',
      period: '/ Year',
      desc: 'For homes up to 2 BHK. Ghar ke regular chhote-mote maintenance issues ke liye.',
      borderColor: 'border-orange-200',
      bgColor: 'bg-white',
      btnBg: 'bg-slate-900 hover:bg-slate-800 text-white',
      features: [
        '❄️ 1 AC Service (Basic cleaning & check)',
        '💧 1 RO Service (Inspection & cleaning)',
        '🔌 Electrical Maintenance (Switches, MCB, Fan)',
        '🪚 Carpenter Maintenance (Hinges, handles, rods)',
        '📌 Plan Limit: Up to 2 BHK',
        '🛡️ Service-specific Warranty Terms'
      ],
      details: {
        tagline: 'Essential Home Maintenance for 2 BHK',
        overview: 'Iska purpose hai ghar ke regular chhote-mote maintenance issues ko ek hi service plan ke through handle karna.',
        servicesList: [
          { title: '❄️ AC Service', desc: '1 AC Service, Basic servicing, Filter & unit cleaning, Basic performance check, Drain check.' },
          { title: '💧 RO Service', desc: '1 RO Service, RO inspection, Basic cleaning/service, Performance check. (Filters/membrane extra).' },
          { title: '🔌 Electrical Maintenance', desc: 'Switches check, loose connections, MCB/basic board check, loose fittings fix, fans basic checking & capacitor replacement if required.' },
          { title: '🪚 Carpenter Maintenance', desc: 'Loose hinges, door hinges, cabinet hinges, handles, hangers, curtain rods, loose fittings, basic furniture adjustment.' },
          { title: '🛡️ Warranty', desc: 'Essential plan me warranty service-specific repair/service performed ke adhar par di jati hai.' }
        ]
      }
    },
    {
      id: 'premium',
      name: 'JAGDISH CARE PREMIUM',
      badge: 'Most Popular ⭐',
      price: '₹7,999',
      period: '/ Year',
      desc: 'Complete Home Maintenance for homes up to 2 BHK. Sabse zyada popular aur comprehensive.',
      borderColor: 'border-[#F25A2B] ring-2 ring-[#F25A2B]/30',
      bgColor: 'bg-[#FFFBF8]',
      btnBg: 'bg-[#F25A2B] hover:bg-[#d94e22] text-white shadow-lg shadow-orange-500/20',
      features: [
        '❄️ 2 AC Services + 🧊 1 AC Gas Refill',
        '💧 1 RO Service + 🔥 1 Geyser Service',
        '🚰 Complete Plumbing Maintenance (Labour included)',
        '🔌 Complete Electrical Care (Fan capacitor included)',
        '🧹 Normal Floor Cleaning (Living, Bedroom, Hall)',
        '🛡️ 3-Month Service Warranty USP'
      ],
      details: {
        tagline: 'Complete Home Maintenance (Most Popular)',
        overview: 'Ye tera main / most popular plan hai jisme Essential ke saath substantially zyada services milti hain.',
        servicesList: [
          { title: '❄️ AC Care & Gas', desc: '2 AC Services + 1 AC Gas Refill included. (Gas leakage repair/major parts extra).' },
          { title: '💧 RO & 🔥 Geyser Care', desc: '1 RO Service + 1 Geyser Service (Inspection, cleaning, heating & electrical check).' },
          { title: '🚰 Complete Plumbing', desc: 'Tap leakage, adjustment, drainage/sink blockage, flush problems, pipe issues. (Labour included, raw material extra).' },
          { title: '🔌 Complete Electrical', desc: 'Switches, MCB board, loose connections, fan capacitor replacement included.' },
          { title: '🧹 Normal Cleaning', desc: 'Floor cleaning for living room, bedroom, hall & accessible floor areas.' },
          { title: '🛡️ 3-Month Warranty', desc: 'Covered service ke baad same issue repeat hone par free revisit/support.' }
        ]
      }
    },
    {
      id: 'complete360',
      name: 'JAGDISH CARE COMPLETE 360°',
      badge: 'Flagship Plan 🔥',
      price: '₹11,999',
      period: '/ Year',
      desc: 'Complete Home Care from Maintenance to Deep Cleaning & Last-Month Refresh.',
      borderColor: 'border-purple-300',
      bgColor: 'bg-white',
      btnBg: 'bg-purple-900 hover:bg-purple-800 text-white',
      features: [
        '❄️ 3 AC Services + 🧊 2 AC Gas Refills',
        '🔥 2 Geyser Services + 💧 1 RO Service',
        '🪳 1 Pest Control Treatment',
        '🧹 Complete Home Deep Cleaning (Kitchen, Bathrooms, Glass)',
        '🧺 Washing Machine & 🧊 Refrigerator Servicing',
        '🛡️ 6-Month Warranty + 🔥 Last-Month Refresh Service'
      ],
      details: {
        tagline: 'Complete Home Care. From Maintenance to Deep Cleaning.',
        overview: 'Ye tera flagship plan hai. Customer ka basic idea hota hai ki mere ghar ki almost poori annual maintenance Jagdish Care handle karega.',
        servicesList: [
          { title: '❄️ AC Care & Gas', desc: '3 AC Services + 2 AC Gas Refills included.' },
          { title: '🔥 Geyser & 💧 RO', desc: '2 Geyser Services + 1 RO Service inspection & maintenance.' },
          { title: '🪳 Pest Control & 🧹 Deep Cleaning', desc: '1 Standard Pest Control + Complete Home Deep Cleaning (Kitchen, Bathroom, Floors, Glass surfaces).' },
          { title: '🧺 Appliances Care', desc: 'Washing Machine cleaning & Refrigerator basic servicing/inspection.' },
          { title: '🚰 Plumbing, Electrical & Carpentry', desc: 'Complete 360 degree routine maintenance coverage with labour included.' },
          { title: '🔥 Last-Month Refresh USP', desc: 'Plan ke last month me 3 ACs ki complimentary cleaning/service revisit: "Your year ends with a fresh start."' }
        ]
      }
    }
  ];

  return (
    <section className="w-full py-14 px-4 sm:px-8 lg:px-12 bg-[#FCF8F5] font-sans relative">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#FFF3EB] px-3.5 py-1 rounded-full text-xs font-bold text-[#F25A2B] mb-3 border border-[#FFE2D1]">
            <span>🛡️</span>
            <span className="uppercase tracking-wider">ANNUAL MAINTENANCE PLANS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
            Choose the Right Plan for <span className="text-[#F25A2B]">Your Home</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-2 font-medium">
            Hassle-free annual maintenance packages designed for modern homes up to 2 BHK. Click on any plan to explore full details[cite: 10, 11, 12].
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`${plan.bgColor} rounded-3xl p-6 sm:p-8 shadow-xl border ${plan.borderColor} flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative`}
            >
              {/* Badge */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-extrabold tracking-wider uppercase bg-orange-100 text-[#F25A2B] px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">Up to 2 BHK</span>
                </div>

                <h3 className="text-lg font-black text-[#111827] mb-1">{plan.name}</h3>
                <p className="text-xs text-slate-500 font-medium mb-6 min-h-[32px]">{plan.desc}</p>

                {/* Price Tag */}
                <div className="flex items-baseline mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl font-black text-[#111827]">{plan.price}</span>
                  <span className="text-sm font-bold text-slate-500 ml-1">{plan.period}</span>
                </div>

                {/* Features Bullet List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="text-xs text-slate-700 font-medium flex items-start space-x-2">
                      <span className="text-[#F25A2B] font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Choose Plan CTA Button */}
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${plan.btnBg}`}
              >
                Choose Plan & View Details
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* DETAIL MODAL POPUP */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative animate-in fade-in zoom-in duration-200">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedPlan(null)}
              className="absolute top-5 right-5 w-9 h-9 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-bold transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Header */}
            <span className="text-[10px] font-black uppercase tracking-wider bg-orange-100 text-[#F25A2B] px-3 py-1 rounded-full">
              {selectedPlan.badge}
            </span>
            <h3 className="text-2xl font-black text-[#111827] mt-2">{selectedPlan.name}</h3>
            <p className="text-sm font-bold text-[#F25A2B] mt-1">{selectedPlan.details.tagline}</p>
            <p className="text-xs text-slate-600 mt-2 font-medium bg-slate-50 p-3 rounded-xl border border-slate-100">
              {selectedPlan.details.overview}
            </p>

            {/* Detailed Services List */}
            <div className="mt-6 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Complete Service Scope Included:</h4>
              
              {selectedPlan.details.servicesList.map((srv, sIdx) => (
                <div key={sIdx} className="p-3.5 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col">
                  <span className="text-xs font-bold text-slate-900">{srv.title}</span>
                  <span className="text-[11px] text-slate-600 font-medium mt-0.5">{srv.desc}</span>
                </div>
              ))}
            </div>

            {/* Modal Footer CTA */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block">Total Investment</span>
                <span className="text-2xl font-black text-slate-900">{selectedPlan.price} <span className="text-xs font-normal text-slate-500">{selectedPlan.period}</span></span>
              </div>
              <button 
                onClick={() => {
                  alert(`Aapne ${selectedPlan.name} select kiya hai! Proceeding to checkout...`);
                  setSelectedPlan(null);
                }}
                className="bg-[#F25A2B] hover:bg-[#d94e22] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
              >
                Proceed with this Plan →
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default PricingPlansSection;