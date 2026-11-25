interface FloralDecorationProps {
  className?: string;
  flip?: boolean;
}

export default function FloralDecoration({
  className,
  flip = false,
}: FloralDecorationProps) {
  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <g stroke="#E4E7D1" strokeWidth="1.5" strokeLinecap="round">
        <path d="M20 310C45 250 65 190 120 135C155 100 190 75 240 20" />
        <path d="M76 240C35 220 20 190 15 160C50 165 75 190 76 240Z" />
        <path d="M99 202C145 195 170 170 180 140C140 145 115 165 99 202Z" />
        <path d="M132 145C95 125 85 95 90 65C125 85 140 110 132 145Z" />
        <path d="M163 105C205 105 225 85 240 55C205 55 180 75 163 105Z" />
        <path d="M48 275C25 265 15 245 15 225C40 235 50 250 48 275Z" />
        <path d="M190 72C180 45 190 25 210 10C220 35 215 55 190 72Z" />
      </g>

      <g fill="#E4E7D1" fillOpacity="0.45">
        <ellipse
          cx="128"
          cy="55"
          rx="8"
          ry="15"
          transform="rotate(-35 128 55)"
        />
        <ellipse
          cx="145"
          cy="48"
          rx="8"
          ry="15"
          transform="rotate(35 145 48)"
        />
        <ellipse cx="136" cy="39" rx="8" ry="15" />
        <ellipse cx="136" cy="55" rx="5" ry="8" />
      </g>

      <g stroke="#E4E7D1" strokeWidth="1.2">
        <path d="M25 125C15 110 25 95 40 95C55 95 60 110 50 125C40 140 35 140 25 125Z" />
        <path d="M40 95V140" />
        <path d="M205 155C195 140 205 125 220 125C235 125 240 140 230 155C220 170 215 170 205 155Z" />
        <path d="M220 125V170" />
      </g>
    </svg>
  );
}
