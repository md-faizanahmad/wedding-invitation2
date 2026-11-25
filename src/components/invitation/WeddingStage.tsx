export default function WeddingStage() {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#eadcc4]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 390 700"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stage-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8edda" />
            <stop offset="65%" stopColor="#e8d7bb" />
            <stop offset="100%" stopColor="#c6b18e" />
          </linearGradient>

          <linearGradient id="stage-pillar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a88c69" />
            <stop offset="45%" stopColor="#f4e5ca" />
            <stop offset="100%" stopColor="#b49a77" />
          </linearGradient>

          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#b9d0c8" />
            <stop offset="100%" stopColor="#6f9d91" />
          </linearGradient>

          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8d8bc" />
            <stop offset="100%" stopColor="#c8b18d" />
          </linearGradient>
        </defs>

        {/* Main stage */}
        <rect width="390" height="700" fill="url(#stage-bg)" />

        {/* Back wall */}
        <path
          d="M48 0 H342 V560 H48 Z"
          fill="#f4e8d4"
          stroke="#c4aa84"
          strokeWidth="3"
        />
        <path
          d="M60 0 H330 V548 H60 Z"
          fill="none"
          stroke="#ddc9a8"
          strokeWidth="1.5"
        />

        {/* Top curtain valance */}
        <path
          d="M0 0 H390 V94 Q350 132 310 94 Q270 132 230 94 Q195 132 155 94 Q115 132 75 94 Q35 132 0 94 Z"
          fill="#c4a783"
        />
        <path
          d="M0 0 H390 V76 Q350 112 310 76 Q270 112 230 76 Q195 112 155 76 Q115 112 75 76 Q35 112 0 76 Z"
          fill="#ead7ba"
        />
        <path
          d="M0 15 Q35 55 75 15 Q115 55 155 15 Q195 55 230 15 Q270 55 310 15 Q350 55 390 15"
          fill="none"
          stroke="#b79870"
          strokeWidth="3"
        />

        {/* Side drapes */}
        <path
          d="M0 0 H72 Q55 120 80 240 Q57 360 85 490 L0 560 Z"
          fill="#c5a783"
        />
        <path
          d="M0 0 H48 Q34 140 60 260 Q38 390 66 510 L0 560 Z"
          fill="#ead8bd"
        />
        <path
          d="M390 0 H318 Q335 120 310 240 Q333 360 305 490 L390 560 Z"
          fill="#c5a783"
        />
        <path
          d="M390 0 H342 Q356 140 330 260 Q352 390 324 510 L390 560 Z"
          fill="#ead8bd"
        />

        {/* Decorative side pillars */}
        {[76, 314].map((x) => (
          <g key={x}>
            <rect
              x={x - 12}
              y="175"
              width="24"
              height="330"
              rx="4"
              fill="url(#stage-pillar)"
            />
            <rect
              x={x - 19}
              y="170"
              width="38"
              height="13"
              rx="3"
              fill="#b69a75"
            />
            <rect
              x={x - 19}
              y="495"
              width="38"
              height="15"
              rx="3"
              fill="#b69a75"
            />
            <path
              d={`M${x - 12} 190 V485`}
              stroke="#fff3dc"
              strokeWidth="2"
              opacity=".7"
            />
          </g>
        ))}

        {/* Floor */}
        <path d="M0 540 Q195 510 390 540 V700 H0 Z" fill="url(#floor)" />

        {/* Garden greenery */}
        <g fill="#687957">
          <path d="M0 570 Q25 470 60 540 Q75 465 105 550 Q115 490 145 560 L125 650 H0Z" />
          <path d="M390 570 Q365 470 330 540 Q315 465 285 550 Q275 490 245 560 L265 650 H390Z" />
        </g>

        {/* Floral clusters */}
        {[
          [37, 535],
          [95, 565],
          [293, 565],
          [352, 535],
          [55, 615],
          [335, 615],
        ].map(([x, y], i) => (
          <g key={i}>
            <path
              d={`M${x} ${y + 15} q-15 -35 -8 -55 M${x} ${y + 15} q18 -32 12 -48`}
              stroke="#526447"
              strokeWidth="3"
              fill="none"
            />
            <circle cx={x} cy={y} r="10" fill="#d6a5a0" />
            <circle cx={x - 9} cy={y - 4} r="7" fill="#f3e4d0" />
            <circle cx={x + 8} cy={y - 5} r="7" fill="#f0d5c7" />
            <circle cx={x} cy={y - 11} r="7" fill="#e8c4b3" />
            <circle cx={x} cy={y} r="3" fill="#b18b56" />
          </g>
        ))}

        {/* Fountain base */}
        <ellipse cx="195" cy="605" rx="92" ry="19" fill="#a78d6e" />
        <path
          d="M111 581 Q195 562 279 581 L264 610 Q195 630 126 610 Z"
          fill="#e8ddc8"
          stroke="#ad9877"
          strokeWidth="4"
        />
        <ellipse cx="195" cy="582" rx="82" ry="15" fill="url(#water)" />
        <ellipse
          cx="195"
          cy="581"
          rx="65"
          ry="9"
          fill="none"
          stroke="#e9f0df"
          strokeWidth="2"
        />

        {/* Fountain centre */}
        <path d="M195 568 Q180 540 195 520 Q210 540 195 568Z" fill="#9abdb1" />
        <path d="M195 565 Q184 544 195 532 Q206 544 195 565Z" fill="#d7e5d8" />
        <circle cx="195" cy="516" r="5" fill="#c3a77d" />

        {/* Small floral pots */}
        {[118, 272].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 14} 550 H${x + 14} L${x + 10} 575 H${x - 10} Z`}
              fill="#c3a37e"
            />
            <path
              d={`M${x} 550 Q${x - 22} 522 ${x - 12} 510 M${x} 550 Q${x + 20} 520 ${x + 13} 505`}
              stroke="#64734f"
              strokeWidth="3"
              fill="none"
            />
            <circle cx={x - 12} cy="510" r="7" fill="#e7c4b5" />
            <circle cx={x + 13} cy="505" r="7" fill="#f1dfca" />
          </g>
        ))}
      </svg>
    </div>
  );
}
