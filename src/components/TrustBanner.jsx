const TrustBanner = () => {
  return (
    // Kam height (py-5) aur dark blue background
    <div className="w-full bg-brand-dark py-5 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Desktop pe ek row (divide-x) aur mobile pe column me stack hoga */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-0 xl:divide-x xl:divide-gray-500/50">
          
          {/* 1. Avatars & Rating Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 xl:pr-6">
            {/* Overlapping Avatars */}
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover z-40" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
              <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover z-30" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
              <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover z-20" src="https://i.pravatar.cc/100?img=3" alt="User 3" />
              <img className="w-10 h-10 rounded-full border-2 border-brand-dark object-cover z-10" src="https://i.pravatar.cc/100?img=4" alt="User 4" />
            </div>
            {/* Rating Text */}
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-yellow-400">
                {/* 5 Stars */}
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                <span className="text-white font-bold ml-1 text-sm">4.8/5</span>
              </div>
              <p className="text-gray-300 text-xs mt-0.5">Trusted by 1,000+ Homeowners</p>
            </div>
          </div>

          {/* Baaki ke 4 Stats - Inko Grid me rakha hai taaki mobile pe bhi achhe dikhein */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-0 xl:pl-6 w-full xl:w-auto xl:flex-1 xl:justify-around">
            
            {/* 2. Homes Served */}
            <div className="flex items-center gap-3 justify-center xl:justify-start xl:px-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path></svg>
              <p className="text-white text-sm font-medium leading-tight">Homes<br/>Served</p>
            </div>

            {/* 3. 10+ Service Categories */}
            <div className="flex items-center gap-3 justify-center xl:justify-start xl:px-4 xl:border-l xl:border-gray-500/50">
              <span className="text-brand-orange text-3xl font-extrabold leading-none">10+</span>
              <p className="text-white text-sm font-medium leading-tight">Service<br/>Categories</p>
            </div>

            {/* 4. Trained & Verified */}
            <div className="flex items-center gap-3 justify-center xl:justify-start xl:px-4 xl:border-l xl:border-gray-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-white text-sm font-medium leading-tight">Trained &<br/>Verified Staff</p>
            </div>

            {/* 5. On-Time Completion */}
            <div className="flex items-center gap-3 justify-center xl:justify-start xl:px-4 xl:border-l xl:border-gray-500/50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p className="text-white text-sm font-medium leading-tight">On-Time<br/>Completion</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;