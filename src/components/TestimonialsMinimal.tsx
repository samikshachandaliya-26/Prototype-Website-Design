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
    logoAdjustClass: "scale-[0.864] origin-center",
  },
  {
    quote:
      "A rare talent who combines strategic thinking with flawless execution. They challenged our assumptions in the best way, shipped on time without drama, and the work still looks effortless months later—I'd recommend them to any team serious about craft.",
    name: "Marcus Johnson",
    role: "Design Lead at Linear",
    logo: logoNba,
    logoAlt: "NBA",
    logoAdjustClass: "scale-[0.66] origin-center",
  },
  {
    quote:
      "The most seamless collaboration I've experienced. They truly understand modern design systems, stakeholder realities, and how to move fast without cutting corners—it's the partnership we needed to get from concept to confident launch.",
    name: "Elena Voss",
    role: "Founder at Notion",
    logo: logoPlaceholder,
    logoAlt: "Google",
    logoAdjustClass: "scale-[0.77] origin-center",
  },
] as const;

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full max-w-4xl py-10 md:py-16">
      {/* Logos */}
      <div className="mb-8 w-full md:mb-12">
        <div className="hidden w-full items-center justify-start gap-3 md:flex">
          {testimonials.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.logoAlt}`}
                aria-pressed={isActive}
                className={`
                  relative flex h-12 w-[108px] shrink-0 items-center justify-center
                  transition-[filter] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-sm
                  ${isActive ? "z-10" : "z-0"}
                `}
              >
                <img
                  src={t.logo}
                  alt=""
                  className={`
                    h-10 max-h-10 w-auto max-w-full object-contain
                    sm:h-11 sm:max-h-11
                    transition-[filter] duration-200 ease-out
                    object-center
                    ${isActive ? "grayscale-0" : "grayscale"}
                    ${t.logoAdjustClass}
                  `}
                />
              </button>
            );
          })}
        </div>

        <div className="flex w-full flex-col gap-4 md:hidden">
          <div className="relative flex h-12 shrink-0 items-center justify-start">
            <img
              src={testimonials[active].logo}
              alt=""
              className={`
                h-10 max-h-10 w-auto max-w-[132px] object-contain object-left
                transition-all duration-300 ease-out
                ${testimonials[active].logoAdjustClass}
              `}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial from ${t.logoAlt}`}
                  onClick={() => setActive(i)}
                  className={`h-2.5 w-2.5 shrink-0 rounded-full transition-[transform,background-color] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35 ${
                    isActive ? "scale-110 bg-white" : "bg-white/35 hover:bg-white/55"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Quote — room for ~2 lines at common breakpoints */}
      <div className="relative mb-8 min-h-[156px] md:min-h-[118px] md:mb-10">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 font-['Satoshi',sans-serif] font-normal leading-[1.5] not-italic text-[20px] md:text-[24px] text-white tracking-[-0.45px]
              transition-all duration-250 ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }
            `}
          >
            "{t.quote}"
          </p>
        ))}
      </div>

      {/* Active Author Info */}
      <div className="relative min-h-[54px] w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 flex flex-col justify-center gap-0.5
              transition-all duration-250 ease-out
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
  );
}
