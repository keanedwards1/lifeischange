type ImagePlaceholderProps = {
  className?: string;
  label?: string;
};

export function ImagePlaceholder({ className = "", label }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-warm ${className}`}
      aria-label={label ?? "Image placeholder"}
    >
      {/* Subtle cross-hatch grain to suggest a photograph */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grain" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <line x1="0" y1="24" x2="24" y2="0" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grain)" />
      </svg>
      {label && (
        <span className="absolute bottom-4 left-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/30">
          {label}
        </span>
      )}
    </div>
  );
}
