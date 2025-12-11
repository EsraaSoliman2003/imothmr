export default function OfferSkeleton() {
    return (
      <div className="animate-pulse mt-4 md:mt-8 bg-[#1C1C1C] border border-[#2B2B2B] py-8 md:py-12 px-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="relative w-[100px] lg:w-[168px] hidden md:block">
          <div className="w-[70px] lg:w-[168px] h-[150px] lg:h-[215px] bg-[#2B2B2B] rounded"></div>
        </div>
  
        {/* Text */}
        <div className="grow w-full">
          <div className="h-4 bg-[#2B2B2B] rounded w-32"></div>
          <div className="mt-4 space-y-3">
            <div className="h-3 bg-[#2B2B2B] rounded w-full"></div>
            <div className="h-3 bg-[#2B2B2B] rounded w-11/12"></div>
            <div className="h-3 bg-[#2B2B2B] rounded w-10/12"></div>
          </div>
        </div>
  
        {/* Icons */}
        <div className="flex md:flex-col gap-5">
          <div className="w-7 h-7 bg-[#2B2B2B] rounded"></div>
          <div className="w-7 h-7 bg-[#2B2B2B] rounded"></div>
          <div className="w-7 h-7 bg-[#2B2B2B] rounded"></div>
        </div>
  
      </div>
    );
  }
  