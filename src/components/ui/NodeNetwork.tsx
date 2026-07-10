"use client";

/**
 * Signature visual motif for hamiaiworks: a lightweight automation-graph
 * network — nodes connected by paths, with small pulses traveling along
 * the connections. Meant to echo the shape of an actual n8n/automation
 * workflow graph, not a generic decorative blob.
 *
 * Pure CSS animation (no JS ticking) so it stays cheap on the main thread.
 */
export function NodeNetwork({ className }: { className?: string }) {
  const nodes = [
    { x: 60, y: 80 },
    { x: 260, y: 40 },
    { x: 260, y: 160 },
    { x: 460, y: 100 },
    { x: 460, y: 220 },
    { x: 660, y: 60 },
    { x: 660, y: 180 },
    { x: 860, y: 120 },
  ];

  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 5],
    [3, 6],
    [4, 6],
    [5, 7],
    [6, 7],
  ];

  return (
    <svg
      viewBox="0 0 900 260"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6E5BFF" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6E5BFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6E5BFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {edges.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        return (
          <g key={`edge-${i}`}>
            <line
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="url(#edgeGradient)"
              strokeWidth="1.5"
            />
            {/* traveling pulse along the edge */}
            <circle r="3" fill="#22D3EE">
              <animateMotion
                dur={`${3 + (i % 4)}s`}
                repeatCount="indefinite"
                path={`M${n1.x},${n1.y} L${n2.x},${n2.y}`}
                begin={`${i * 0.4}s`}
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                dur={`${3 + (i % 4)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.4}s`}
              />
            </circle>
          </g>
        );
      })}

      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle cx={n.x} cy={n.y} r="18" fill="url(#nodeGlow)" opacity="0.5" />
          <circle
            cx={n.x}
            cy={n.y}
            r="4.5"
            fill="#0A0E17"
            stroke="#6E5BFF"
            strokeWidth="1.5"
            className="animate-pulse-node"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
