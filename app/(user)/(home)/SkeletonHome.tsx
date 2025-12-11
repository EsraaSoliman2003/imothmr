type SkeletonHomeProps = {
  categoriesCount?: number;
  howToWorksCount?: number;
  servicesCount?: number;
  worksCount?: number;
  className?: string;
};

const Placeholder = ({ className = "" }: { className?: string }) => (
  <div
    className={
      "bg-gray-200/70 dark:bg-gray-700/50 rounded-lg animate-pulse " +
      className
    }
    aria-hidden="true"
  />
);

export default function SkeletonHome({
  categoriesCount = 6,
  howToWorksCount = 3,
  servicesCount = 4,
  worksCount = 6,
  className = "",
}: SkeletonHomeProps) {
  return (
    <div className={`space-y-8 p-4 md:p-6 ${className}`}>
      {/* HERO / HEADER SKELETON */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-2/3 space-y-3">
          <Placeholder className="h-8 w-3/4 md:w-1/2" />
          <Placeholder className="h-4 w-full max-w-xl" />
        </div>
        <div className="w-full md:w-1/3 flex justify-end">
          <Placeholder className="h-10 w-24 md:w-32" />
        </div>
      </div>

      {/* CATEGORIES (grid responsive) */}
      <section>
        <div className="mb-3">
          <Placeholder className="h-6 w-44" />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {Array.from({ length: categoriesCount }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-3 rounded-lg border border-transparent"
            >
              <Placeholder className="w-12 h-12 rounded-full" />
              <Placeholder className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO WORKS (horizontal responsive) */}
      <section>
        <div className="mb-3">
          <Placeholder className="h-6 w-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: howToWorksCount }).map((_, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg"
              aria-hidden
            >
              <Placeholder className="w-14 h-14 rounded-md shrink-0" />
              <div className="flex-1 space-y-2">
                <Placeholder className="h-4 w-2/3" />
                <Placeholder className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES (cards) */}
      <section>
        <div className="mb-3">
          <Placeholder className="h-6 w-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: servicesCount }).map((_, i) => (
            <div
              key={i}
              className="border rounded-lg p-4 space-y-3"
              role="status"
              aria-busy="true"
            >
              <Placeholder className="w-full h-36 md:h-28 lg:h-32 rounded-md" />
              <div className="space-y-2">
                <Placeholder className="h-4 w-3/4" />
                <Placeholder className="h-3 w-full" />
                <div className="flex gap-2">
                  <Placeholder className="h-8 w-20 rounded-md" />
                  <Placeholder className="h-8 w-16 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKS / PORTFOLIO (responsive masonry-ish) */}
      <section>
        <div className="mb-3">
          <Placeholder className="h-6 w-36" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Array.from({ length: worksCount }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Placeholder className="w-full h-28 rounded-md" />
              <Placeholder className="h-3 w-3/4" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / SOCIALS small placeholders */}
      <section className="pt-2">
        <div className="flex items-center gap-3">
          <Placeholder className="w-10 h-3/4 rounded-md" />
          <Placeholder className="w-10 h-3/4 rounded-md" />
          <Placeholder className="w-10 h-3/4 rounded-md" />
        </div>
      </section>
    </div>
  );
}
