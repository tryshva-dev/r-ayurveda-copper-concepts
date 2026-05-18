export function HeroDecorSvg() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#fff8ed" />
          <stop offset="0.44" stopColor="#fff2df" />
          <stop offset="1" stopColor="#efc48b" />
        </linearGradient>
        <linearGradient id="copperMetal" x1="0" x2="1">
          <stop offset="0" stopColor="#f0b77c" />
          <stop offset="0.35" stopColor="#b56235" />
          <stop offset="0.72" stopColor="#7d321f" />
          <stop offset="1" stopColor="#d08b4f" />
        </linearGradient>
        <linearGradient id="brassMetal" x1="0" x2="1">
          <stop offset="0" stopColor="#fff0a8" />
          <stop offset="0.42" stopColor="#d7a530" />
          <stop offset="0.78" stopColor="#9a651c" />
          <stop offset="1" stopColor="#f3c969" />
        </linearGradient>
        <pattern id="tinyDots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#b36a38" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="1600" height="900" fill="url(#heroBg)" />
      <rect width="1600" height="900" fill="url(#tinyDots)" />
      <path d="M0 720 C260 612 420 828 660 720 C900 612 1050 742 1600 604 V900 H0 Z" fill="#fffaf2" opacity="0.86" />
      <g opacity="0.28">
        <circle cx="1250" cy="332" r="310" fill="none" stroke="#b36a38" strokeWidth="2" />
        {Array.from({ length: 52 }).map((_, index) => {
          const angle = (index / 52) * Math.PI * 2;
          const x1 = 1250 + Math.cos(angle) * 62;
          const y1 = 332 + Math.sin(angle) * 62;
          const x2 = 1250 + Math.cos(angle) * 268;
          const y2 = 332 + Math.sin(angle) * 268;
          return <line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9d4f2b" strokeWidth="3" />;
        })}
      </g>
      <g transform="translate(860 130)">
        <ellipse cx="310" cy="640" rx="240" ry="42" fill="#8b4324" opacity="0.16" />
        <path d="M76 590 H648 L728 760 H0 Z" fill="#d9a56c" opacity="0.42" />
        <path d="M110 610 H600 L650 760 H56 Z" fill="#fff5e7" opacity="0.55" />
        <g>
          <path d="M292 148 H392 C442 148 482 188 482 238 V574 C482 632 435 680 376 680 H308 C250 680 202 632 202 574 V238 C202 188 242 148 292 148 Z" fill="url(#copperMetal)" />
          <rect x="296" y="54" width="92" height="116" rx="22" fill="#8f3d25" />
          <rect x="252" y="214" width="24" height="270" rx="12" fill="#fff8ed" opacity="0.28" />
          <ellipse cx="342" cy="412" rx="82" ry="132" fill="none" stroke="#fff8ed" strokeWidth="5" opacity="0.55" />
          {Array.from({ length: 28 }).map((_, index) => {
            const angle = (index / 28) * Math.PI * 2;
            return (
              <line
                key={index}
                x1="342"
                y1="412"
                x2={342 + Math.cos(angle) * 72}
                y2={412 + Math.sin(angle) * 118}
                stroke="#fff8ed"
                strokeWidth="2"
                opacity="0.48"
              />
            );
          })}
          <circle cx="342" cy="412" r="16" fill="#fff8ed" opacity="0.6" />
        </g>
        <DiyaSvg x={70} y={572} scale={1.25} />
        <DiyaSvg x={520} y={574} scale={1.15} />
        <UrliSvg x={78} y={468} scale={0.98} />
        <UrliSvg x={486} y={452} scale={0.82} />
      </g>
    </svg>
  );
}

export function CategoryIllustration({ type }) {
  return (
    <svg className="h-48 w-full rounded-[1.15rem] bg-[#fff3e1]" viewBox="0 0 420 220" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id={`catCopper-${type}`} x1="0" x2="1">
          <stop offset="0" stopColor="#efb071" />
          <stop offset="0.5" stopColor="#b56235" />
          <stop offset="1" stopColor="#7f321f" />
        </linearGradient>
        <linearGradient id={`catBrass-${type}`} x1="0" x2="1">
          <stop offset="0" stopColor="#ffe890" />
          <stop offset="0.5" stopColor="#d19b2c" />
          <stop offset="1" stopColor="#9a651c" />
        </linearGradient>
      </defs>
      <rect width="420" height="220" fill="#fff3e1" />
      <circle cx="332" cy="64" r="98" fill="#f0c987" opacity="0.24" />
      <path d="M0 176 C72 142 130 194 210 160 C282 130 326 174 420 138 V220 H0 Z" fill="#f9dfb8" opacity="0.8" />
      {type === "Diyas" && (
        <g transform="translate(82 70)">
          <DiyaSvg x={0} y={64} scale={1.28} />
          <DiyaSvg x={120} y={34} scale={1.5} />
          <DiyaSvg x={248} y={70} scale={1.08} />
        </g>
      )}
      {type === "Copperware" && (
        <g transform="translate(92 34)">
          <BottleSvg x={110} y={0} scale={0.72} />
          <UrliSvg x={0} y={118} scale={0.9} />
          <CupSvg x={250} y={114} scale={0.88} />
        </g>
      )}
      {type === "Decor" && (
        <g transform="translate(76 30)">
          <UrliSvg x={70} y={120} scale={1.1} />
          <BottleSvg x={220} y={18} scale={0.58} />
          <DiyaSvg x={0} y={130} scale={0.95} />
        </g>
      )}
      {type === "Care" && (
        <g transform="translate(90 58)">
          <rect x="25" y="28" width="112" height="104" rx="22" fill={`url(#catBrass-${type})`} />
          <circle cx="82" cy="80" r="36" fill="none" stroke="#fff8ed" strokeWidth="8" opacity="0.65" />
          <rect x="170" y="76" width="130" height="62" rx="16" fill="#2d5d4a" opacity="0.86" />
          <path d="M182 58 C220 24 268 28 306 58 C264 60 224 84 182 58 Z" fill="#2d5d4a" opacity="0.55" />
        </g>
      )}
    </svg>
  );
}

export function DecorRangeSvg() {
  return (
    <svg className="h-[24rem] w-full rounded-[1.6rem] bg-[#fff3e1]" viewBox="0 0 720 420" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect width="720" height="420" fill="#fff3e1" />
      <circle cx="560" cy="120" r="170" fill="#efc48b" opacity="0.22" />
      <path d="M0 330 C120 278 210 372 344 318 C454 272 548 340 720 286 V420 H0 Z" fill="#f8dfbb" />
      <g transform="translate(110 48)">
        <BottleSvg x={220} y={0} scale={0.9} />
        <UrliSvg x={24} y={250} scale={1.24} />
        <DiyaSvg x={420} y={268} scale={1.32} />
        <DiyaSvg x={516} y={244} scale={1.04} />
      </g>
    </svg>
  );
}

function BottleSvg({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M70 72 H150 C190 72 222 104 222 144 V360 C222 408 183 448 134 448 H86 C38 448 0 408 0 360 V144 C0 104 32 72 70 72 Z" fill="url(#copperMetal)" />
      <rect x="74" y="0" width="74" height="92" rx="18" fill="#873621" />
      <rect x="42" y="132" width="18" height="220" rx="9" fill="#fff8ed" opacity="0.28" />
      <ellipse cx="112" cy="250" rx="58" ry="92" fill="none" stroke="#fff8ed" strokeWidth="4" opacity="0.55" />
    </g>
  );
}

function DiyaSvg({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M48 30 C74 30 96 47 104 72 C86 96 58 108 28 96 C7 88 -5 70 2 50 C14 58 31 30 48 30 Z" fill="url(#brassMetal)" />
      <ellipse cx="50" cy="52" rx="36" ry="13" fill="#fff1b4" opacity="0.58" />
      <path d="M48 -34 C68 -9 68 14 48 34 C28 14 28 -9 48 -34 Z" fill="#f3a734" />
      <path d="M48 -23 C59 -6 59 10 48 25 C37 10 37 -6 48 -23 Z" fill="#fff3a5" />
    </g>
  );
}

function UrliSvg({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="116" cy="30" rx="112" ry="28" fill="#dca064" />
      <path d="M12 30 H220 C206 96 166 128 116 128 C66 128 26 96 12 30 Z" fill="url(#copperMetal)" />
      <ellipse cx="116" cy="30" rx="88" ry="18" fill="#5d2619" opacity="0.32" />
      <circle cx="66" cy="18" r="10" fill="#f7d98a" />
      <circle cx="112" cy="15" r="8" fill="#fff0a8" />
      <circle cx="156" cy="19" r="10" fill="#f7d98a" />
    </g>
  );
}

function CupSvg({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="58" cy="8" rx="54" ry="14" fill="#efb071" />
      <path d="M8 8 H108 L94 116 H22 Z" fill="url(#copperMetal)" />
      <rect x="28" y="58" width="52" height="10" rx="5" fill="#d8a929" opacity="0.58" />
    </g>
  );
}
