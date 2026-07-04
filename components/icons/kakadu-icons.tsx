import type { SVGProps } from "react"

/**
 * Kakadu brand icon set — abstract, geometric single-color line SVGs
 * inspired by cockatoo/bird anatomy. All use `currentColor` so they
 * inherit text color and can be tinted for hover glow states.
 */

const baseProps: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
}

/** Feather / crest — raw creativity and styling */
export function FeatherIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      {/* vane / plume body */}
      <path d="M20.5 4.5c1 5.5-1 12-8 14.5-3 1.1-6 1.5-6 1.5s.4-3 1.5-6c2.5-7 9-9 12.5-10Z" />
      {/* central shaft trailing off */}
      <path d="M16 8 3.5 20.5" />
      {/* barbs */}
      <path d="M17.5 12H10" />
      <path d="M14.5 15.5H8" />
    </svg>
  )
}

/** Wing / flight path — speed and freedom */
export function WingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      {/* three swept, layered flight feathers */}
      <path d="M2.5 18.5c6.5 0 13.5-3.5 19-14" />
      <path d="M5.5 20c5.5-.3 11-3.6 15-11.5" />
      <path d="M10 20.5c4.3-.4 8.3-3.4 11.5-9.5" />
    </svg>
  )
}

/** Beak / talons — precision, strength, execution */
export function BeakIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...baseProps} {...props}>
      {/* hooked upper mandible */}
      <path d="M3 6.5c8-1 17 .5 18 6 .6 3.2-2 5.5-5.5 5.5 0 0 5-3.5-.5-6C10 10 5 8.5 3 6.5Z" />
      {/* nostril */}
      <path d="M7 8.5h.01" />
    </svg>
  )
}
