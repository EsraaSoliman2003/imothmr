export default function ServiceSkeleton() {
    return (
      <div className="animate-pulse grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-5 md:mt-20">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-[#1C1C1C] border border-[#2B2B2B] rounded-[10px] px-6 pt-7.5 pb-12 flex flex-col gap-3"
          >
            <div className="w-11 h-11 rounded-lg bg-[#2B2B2B]"></div>
  
            <div className="h-4 bg-[#2B2B2B] rounded w-2/3"></div>
  
            <div className="h-3 bg-[#2B2B2B] rounded w-full"></div>
            <div className="h-3 bg-[#2B2B2B] rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }
  