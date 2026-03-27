import { useState } from "react";
import logoCocaCola from "../assets/b07c59db1f930f349d78f88f1539a45fadb516fd.png";
import logoNba from "../assets/f27e9b699c0830cb489fd15868d944346bd3ccd1.png";
import logoPlaceholder from "../assets/6685bb55a5822c06513e7f7efb8337bdd5f0377a.png";

const testimonials = [
  {
    quote:
      "Working with them transformed our entire brand identity. The attention to detail was exceptional across every touchpoint—from early strategy workshops through launch—and our customers finally see us the way we've always wanted to be seen.",
    name: "Sarah Chen",
    role: "CEO at Stripe",
    logo: logoCocaCola,
    logoAlt: "Coca-Cola",
    /** Script mark reads huge at same bbox as other logos — shrink only this asset */
    logoAdjustClass: "scale-[0.72] origin-left",
  },
  {
    quote:
      "A rare talent who combines strategic thinking with flawless execution. They challenged our assumptions in the best way, shipped on time without drama, and the work still looks effortless months later—I'd recommend them to any team serious about craft.",
    name: "Marcus Johnson",
    role: "Design Lead at Linear",
    logo: logoNba,
    logoAlt: "NBA",
    logoAdjustClass: "scale-[1.32] origin-center",
  },
  {
    quote:
      "The most seamless collaboration I've experienced. They truly understand modern design systems, stakeholder realities, and how to move fast without cutting corners—it's the partnership we needed to get from concept to confident launch.",
    name: "Elena Voss",
    role: "Founder at Notion",
    logo: logoPlaceholder,
    logoAlt: "Client partner",
    logoAdjustClass: "scale-[1.32] origin-center",
  },
] as const;

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-4xl py-16">
      {/* Quote — room for ~2 lines at common breakpoints */}
      <div className="relative mb-12 min-h-[120px] sm:min-h-[100px]">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 font-['Satoshi',sans-serif] font-normal leading-[1.55] not-italic text-[18px] md:text-[20px] text-white tracking-[-0.45px]
              transition-all duration-500 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-4 blur-sm pointer-events-none"
              }
            `}
          >
            "{t.quote}"
          </p>
        ))}
      </div>

      {/* Author row — same rhythm as original: gap-6 between logos | divider | name */}
      <div className="flex w-full min-w-0 items-center gap-6">
        <div className="flex shrink-0 items-center justify-start gap-3 sm:gap-4 md:gap-5">
          {testimonials.map((t, i) => {
            const isActive = active === i;
            const isFirst = i === 0;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.logoAlt}`}
                aria-pressed={isActive}
                className={`
                  relative flex h-12 shrink-0 items-center
                  transition-[filter] duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm
                  ${isActive ? "z-10" : "z-0"}
                  ${isFirst ? "justify-start" : "justify-center"}
                `}
              >
                <img
                  src={t.logo}
                  alt=""
                  className={`
                    h-10 max-h-10 w-auto max-w-[132px] sm:h-11 sm:max-h-11 sm:max-w-[148px] object-contain
                    transition-[filter] duration-300 ease-out
                    ${isFirst ? "object-left" : "object-center"}
                    ${isActive ? "grayscale-0" : "grayscale"}
                    ${t.logoAdjustClass}
                  `}
                />
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-8 w-px shrink-0 bg-white/25" aria-hidden />

        {/* Active Author Info */}
        <div className="relative min-h-[44px] min-w-0 flex-1">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`
                absolute inset-0 flex flex-col justify-center gap-0.5
                transition-all duration-[400ms] ease-out
                ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
              `}
            >
              <span className="font-['Satoshi',sans-serif] font-semibold leading-[1.2] text-[20px] sm:text-[22px] md:text-[24px] text-white tracking-[-0.45px]">
                {t.name}
              </span>
              <span className="font-['Satoshi',sans-serif] font-normal leading-[normal] text-[14px] sm:text-[15px] text-[rgba(255,255,255,0.72)] tracking-[-0.23px]">
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
