export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          {/* Simple paw print mark */}
          <svg
            viewBox="0 0 40 40"
            fill="currentColor"
            className="h-8 w-8 text-gold sm:h-10 sm:w-10"
          >
            <ellipse cx="20" cy="28" rx="10" ry="9" />
            <circle cx="10" cy="14" r="5" />
            <circle cx="22" cy="10" r="5" />
            <circle cx="33" cy="16" r="4.5" />
            <circle cx="5" cy="24" r="3.5" opacity="0.8" />
          </svg>
        </div>
        <p className="mt-3 text-2xl font-black uppercase tracking-[0.2em] text-white sm:text-3xl">
          Death Row
        </p>
        <p className="text-lg font-black uppercase tracking-[0.35em] text-gold sm:text-xl">
          Rescues
        </p>
      </div>
    </div>
  );
}
