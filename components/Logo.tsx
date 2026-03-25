export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Dog silhouette — strong pit bull profile facing right */}
      <g transform="translate(120, 10) scale(1.1)">
        {/* Body */}
        <path
          d="M40 200 C40 160, 50 130, 70 110 C80 100, 85 85, 82 70 C80 60, 85 50, 95 48 C105 46, 110 50, 112 58 C114 52, 120 48, 128 50 C136 52, 138 60, 136 68 C134 78, 128 85, 130 95 C132 105, 145 108, 155 105 C165 102, 170 95, 172 90 L176 90 C178 95, 176 105, 168 112 C160 119, 148 120, 140 118 C135 125, 130 140, 130 160 C130 180, 135 195, 140 200 L145 200 L145 230 L125 230 L125 205 C120 200, 110 195, 100 195 C90 195, 80 200, 75 205 L75 230 L55 230 L55 200 Z"
          fill="#D4AF37"
        />
        {/* Eye */}
        <circle cx="118" cy="72" r="4" fill="black" />
        {/* Ear */}
        <path
          d="M95 48 C90 35, 95 22, 108 20 C112 19, 115 22, 112 30 C110 38, 105 45, 95 48Z"
          fill="#D4AF37"
        />
      </g>

      {/* Text: DEATH ROW */}
      <text
        x="200"
        y="265"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900"
        fontSize="48"
        fill="white"
        letterSpacing="6"
      >
        DEATH ROW
      </text>

      {/* Text: RESCUES */}
      <text
        x="200"
        y="305"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#D4AF37"
        letterSpacing="10"
      >
        RESCUES
      </text>
    </svg>
  );
}
