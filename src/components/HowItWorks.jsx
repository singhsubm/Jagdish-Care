import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-8 lg:px-12 relative overflow-hidden font-sans bg-[#FCF8F5]">
      
      {/* BACKGROUND IMAGE FOR RIGHT 40% AREA */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-cover bg-center z-0 hidden lg:block "
        style={{
          // Yahan aap apni lady wali background image ka path set kar sakte hain:
          backgroundImage: `url('/images/bg2.png')`,
        }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Content wrapper width restricted to ~60% on left side */}
        <div className="w-full lg:w-[58%] flex flex-col justify-between">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#FFF3EB] px-3 py-1 rounded-full w-fit mb-2.5 border border-[#FFE2D1]">
            <span className="w-3.5 h-3.5 bg-[#F25A2B] text-white rounded-full flex items-center justify-center text-[9px] font-bold">
              ⚙
            </span>
            <span className="text-[10px] font-extrabold text-[#333333] tracking-wider uppercase">
              HOW IT WORKS
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#111827] leading-[1.15] tracking-tight">
            Get Home Services <br />
            in <span className="text-[#F25A2B]">4 Simple Steps</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs text-[#555555] font-medium mt-1.5 mb-6 max-w-lg">
            Booking a home service is quick, easy and hassle-free with Jagdish Care.
          </p>

          {/* 4 STEPS GRID (All 4 cards in one row on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            
            {/* STEP 1 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-[#F3EFEA] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#F25A2B] bg-[#FFF2EC] px-2 py-0.5 rounded-md inline-block mb-2">
                  01
                </span>
                
                {/* Smartphone Icon */}
                <div className="h-12 flex items-center justify-start my-1">
                  <div className="w-8 h-12 border-[2px] border-[#222222] rounded-md p-0.5 bg-white flex flex-col justify-between items-center shadow-xs">
                    <div className="w-2.5 h-0.5 bg-gray-300 rounded-full"></div>
                    <div className="grid grid-cols-2 gap-0.5 w-full my-auto px-0.5">
                      <div className="w-2 h-2 bg-orange-100 rounded-[1px] flex items-center justify-center text-[5px]">🔑</div>
                      <div className="w-2 h-2 bg-orange-100 rounded-[1px] flex items-center justify-center text-[5px]">🔧</div>
                      <div className="w-2 h-2 bg-orange-100 rounded-[1px] flex items-center justify-center text-[5px]">⚡</div>
                      <div className="w-2 h-2 bg-orange-100 rounded-[1px] flex items-center justify-center text-[5px]">💧</div>
                    </div>
                    <div className="w-1 h-1 rounded-full border border-gray-400"></div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#111827]">
                  Choose a Service
                </h3>
                <p className="text-[10px] text-[#666666] leading-snug mt-0.5 font-normal">
                  Select the service you need from our wide range of home services.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-[#F3EFEA] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#F25A2B] bg-[#FFF2EC] px-2 py-0.5 rounded-md inline-block mb-2">
                  02
                </span>
                
                {/* Calendar & Clock Icon */}
                <div className="h-12 flex items-center justify-start my-1">
                  <div className="relative w-10 h-10">
                    <div className="w-9 h-9 border-[2px] border-[#222222] rounded-md bg-white p-1 flex flex-col justify-between">
                      <div className="w-full h-1 bg-[#222222] rounded-t-[1px]"></div>
                      <div className="grid grid-cols-3 gap-0.5 w-full h-full pt-0.5">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="bg-gray-200 rounded-[1px]"></div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-[#F25A2B] rounded-full border border-white flex items-center justify-center text-white">
                      <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#111827]">
                  Pick a Date & Time
                </h3>
                <p className="text-[10px] text-[#666666] leading-snug mt-0.5 font-normal">
                  Choose a convenient date and time slot for your service.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-[#F3EFEA] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#F25A2B] bg-[#FFF2EC] px-2 py-0.5 rounded-md inline-block mb-2">
                  03
                </span>
                
                {/* Pro Guy Avatar Icon */}
                <div className="h-12 flex items-center justify-start my-1">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-[2px] border-[#222222] bg-[#1E293B] relative flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                      alt="Service Professional" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#111827]">
                  We Assign a Pro
                </h3>
                <p className="text-[10px] text-[#666666] leading-snug mt-0.5 font-normal">
                  Our verified professional will be assigned to your booking.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3.5 shadow-sm border border-[#F3EFEA] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#F25A2B] bg-[#FFF2EC] px-2 py-0.5 rounded-md inline-block mb-2">
                  04
                </span>
                
                {/* House + Check Icon */}
                <div className="h-12 flex items-center justify-start my-1">
                  <div className="relative w-10 h-10">
                    <svg className="w-9 h-9 text-[#222222]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 bg-[#F25A2B] rounded-full border border-white flex items-center justify-center text-white">
                      <svg className="w-2.5 h-2.5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-[#111827]">
                  Relax & Get It Done
                </h3>
                <p className="text-[10px] text-[#666666] leading-snug mt-0.5 font-normal">
                  Sit back while our expert completes the service at your home.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;