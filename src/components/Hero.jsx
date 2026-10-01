const Hero = () => {
  // Services data array taaki bottom card ka code clean rahe
  const services = [
    { 
      name: "Deep Cleaning", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path></svg> 
    },
    { 
      name: "Pest Control", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> 
    },
    { 
      name: "Electrical", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg> 
    },
    { 
      name: "Plumbing", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008z"></path></svg> 
    },
    { 
      name: "AC Service", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0l-3-3m3 3l3-3M6.364 6.364l11.272 11.272M17.636 6.364L6.364 17.636M3 12h18m0 0l-3-3m3 3l-3 3"></path></svg> 
    },
    { 
      name: "Appliance Repair", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path></svg> 
    },
    { 
      name: "Geyser Service", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.638 5.214 8.25 8.25 0 0112 3c1.986 0 3.805.696 5.362 1.936v.278z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01"></path></svg> 
    },
    { 
      name: "Carpentry", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21"></path></svg> 
    },
    { 
      name: "Painting", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"></path></svg> 
    },
    { 
      name: "Civil & Reno", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"></path></svg> 
    },
    { 
      name: "More Services", 
      icon: <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path></svg> 
    }
  ];

  return (
    // Parent container ko relative diya hai aur niche margin (mb-32) diya hai taaki overlap card ke liye space ban sake
    <div className="relative w-full mb-32 font-sans">
      
      {/* Background Image Container */}
      <div 
        className="w-full bg-cover bg-center bg-no-repeat pt-12 pb-32 md:pt-20 md:pb-40"
        // Yahan apni background image ka exact naam replace kar dena
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Content */}
          <div className="space-y-6 z-10">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-brand-orange px-4 py-1.5 rounded-full text-[10px] md:text-sm font-semibold">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              <span>Complete Home Care, Under One Roof</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-brand-dark leading-tight tracking-tight">
              Your Home. <br />
              <span className="text-brand-orange">Our Care.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm md:text-lg text-gray-800 max-w-md font-medium">
              From cleaning to AC service, pest control to plumbing <br />— everything your home needs, now in one place.
            </p>

            {/* Features List */}
            <div className="flex flex-col md:flex-row gap-4 text-sm font-bold text-brand-dark pt-2">
              <div className="flex items-center space-x-2">
                <div className="bg-brand-dark text-white rounded-full p-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg></div>
                <span>Verified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-brand-dark text-white rounded-full p-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"></path></svg></div>
                <span>Affordable Pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-brand-dark text-white rounded-full p-1"><svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <span>On-Time Service</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-row gap-4 pt-4">
              <button className="bg-brand-orange text-white text-[12px] md:text-sm px-6 py-3.5 rounded-full flex items-center justify-center space-x-2 font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200">
                
                <span className="hidden md:block">Book a Service on WhatsApp</span>
                <span className="block md:hidden">WhatsApp</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <button className="bg-white text-brand-dark text-[12px] md:text-sm px-10 md:px-6 py-3.5 rounded-full flex items-center justify-center space-x-2 font-bold hover:bg-gray-50 transition-colors shadow-md">
                <span className="hidden md:block">View Home Care Plans</span>
                <span className="block md:hidden">Plans</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>

          {/* Right Column - Overlays (Hidden on small screens) */}
          <div className="hidden lg:block relative z-10">
            

            {/* Bottom Right Price Card */}
            <div className="absolute bottom-10 right-0 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-4 border border-gray-100">
              <div className="bg-brand-orange p-3 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Home Care Plans</p>
                <p className="text-sm font-semibold text-brand-dark">Starting from</p>
                <p className="text-3xl font-extrabold text-brand-orange flex items-center space-x-1">
                  <span>₹3,999</span>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ubhar ke aane wala (Overlapping) Bottom Card */}
      {/* 'absolute' aur '-bottom-16' milkar isko background section ke theek adhe hisse se bahar nikalte hain */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-[95%] max-w-7xl bg-white rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* 'overflow-x-auto' hata diya hai aur spacing adjust kar di hai */}
        <div className="flex justify-between items-center px-4 md:px-6 py-5 gap-2 md:gap-8">
          {services.map((service, index) => (
            /* Mobile par sirf pehle 5 items dikhenge (index 0 se 4 tak), uske baad ke sab hidden rahenge jab tak screen bada (md) na ho */
            <div key={index} className={`flex-col items-center justify-center space-y-2 cursor-pointer group ${index > 4 ? 'hidden md:flex' : 'flex'} w-1/5 md:w-auto`}>
              <div className="w-8 h-8 md:w-9 md:h-9 text-brand-dark group-hover:text-brand-orange transition-colors">
                {service.icon}
              </div>
              <span className="text-[10px] md:text-[11px] font-bold text-center text-brand-dark group-hover:text-brand-orange transition-colors whitespace-nowrap">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;