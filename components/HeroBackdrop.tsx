export default function HeroBackdrop() {
  return (
    <svg
      viewBox="0 0 1600 900"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="paperBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF8F3" />
          <stop offset="60%" stopColor="#F5F1E8" />
          <stop offset="100%" stopColor="#EDE7D9" />
        </linearGradient>
        <radialGradient id="lightTop" cx="78%" cy="18%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="inkFade" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1A1A1A" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0" />
        </linearGradient>
        <pattern id="grain" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.4" fill="#1A1A1A" fillOpacity="0.05" />
        </pattern>
      </defs>

      <rect width="1600" height="900" fill="url(#paperBg)" />
      <rect width="1600" height="900" fill="url(#lightTop)" />

      {/* far building silhouette — depth */}
      <g opacity="0.07">
        <rect x="1180" y="500" width="70" height="320" fill="#1A1A1A" />
        <rect x="1260" y="460" width="90" height="360" fill="#1A1A1A" />
        <rect x="1360" y="520" width="60" height="300" fill="#1A1A1A" />
        <rect x="1430" y="480" width="80" height="340" fill="#1A1A1A" />
        <rect x="1520" y="510" width="70" height="310" fill="#1A1A1A" />
      </g>

      {/* abstract air-flow hairlines — quiet motion of conditioned air */}
      <g stroke="#6B7280" strokeWidth="0.5" fill="none" opacity="0.55">
        <path d="M -50 320 Q 380 280 800 340 T 1700 310" />
        <path d="M -50 380 Q 380 340 800 400 T 1700 370" />
        <path d="M -50 440 Q 380 400 800 460 T 1700 430" />
        <path d="M -50 500 Q 380 460 800 520 T 1700 490" />
        <path d="M -50 560 Q 380 520 800 580 T 1700 550" />
      </g>

      {/* outdoor unit motif — lower right */}
      <g opacity="0.18" transform="translate(1080 680)">
        <rect x="0" y="0" width="200" height="120" fill="none" stroke="#1A1A1A" strokeWidth="1" />
        <circle cx="68" cy="60" r="38" fill="none" stroke="#1A1A1A" strokeWidth="1" />
        <circle cx="68" cy="60" r="24" fill="none" stroke="#1A1A1A" strokeWidth="0.5" />
        <circle cx="68" cy="60" r="10" fill="#1A1A1A" />
        <line x1="68" y1="22" x2="68" y2="98" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="30" y1="60" x2="106" y2="60" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="120" y1="22" x2="190" y2="22" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="120" y1="42" x2="190" y2="42" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="120" y1="62" x2="190" y2="62" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="120" y1="82" x2="190" y2="82" stroke="#1A1A1A" strokeWidth="0.5" />
        <line x1="120" y1="102" x2="190" y2="102" stroke="#1A1A1A" strokeWidth="0.5" />
      </g>

      <rect width="1600" height="900" fill="url(#grain)" />
      <rect y="600" width="1600" height="300" fill="url(#inkFade)" />

      {/* bottom-left hairline rule */}
      <line x1="120" y1="780" x2="540" y2="780" stroke="#1A1A1A" strokeWidth="0.6" opacity="0.65" />
    </svg>
  );
}