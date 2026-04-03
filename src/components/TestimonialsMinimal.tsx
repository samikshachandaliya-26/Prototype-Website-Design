import { useState, useRef, useEffect, useCallback } from "react";
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

const AUTO_MS = 3000;
const PAUSE_AFTER_SCROLL_MS = 9000;
/** Must match Tailwind `gap-10` between slides (scroll stride = viewport + gap). */
const MOBILE_SLIDE_GAP_PX = 40;

export function TestimonialsMinimal() {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const pauseUntilRef = useRef(0);
  const isProgrammaticScrollRef = useRef(false);

  const syncIndexFromScroll = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const stride = w + MOBILE_SLIDE_GAP_PX;
    const i = Math.round(el.scrollLeft / stride);
    const clamped = Math.max(0, Math.min(testimonials.length - 1, i));
    setActive(clamped);
  }, []);

  const scrollToIndex = useCallback((i: number, behavior: ScrollBehavior = "smooth") => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth;
    if (w <= 0) return;
    const stride = w + MOBILE_SLIDE_GAP_PX;
    isProgrammaticScrollRef.current = true;
    el.scrollTo({ left: i * stride, behavior });
    window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 450);
  }, []);

  const activeRef = useRef(active);
  activeRef.current = active;
  const visibleRef = useRef(false);

  useEffect(() => {
    const el = scrollerRef.current;
    const root = rootRef.current;
    if (!el || !root) return;

    const onScroll = () => {
      if (!isProgrammaticScrollRef.current) {
        pauseUntilRef.current = Date.now() + PAUSE_AFTER_SCROLL_MS;
      }
      syncIndexFromScroll();
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = Boolean(entry?.isIntersecting && entry.intersectionRatio > 0.15);
      },
      { threshold: [0, 0.15, 0.35] },
    );
    io.observe(root);

    return () => {
      el.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, [syncIndexFromScroll]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (!visibleRef.current || Date.now() < pauseUntilRef.current) return;
      const i = activeRef.current;
      const next = (i + 1) % testimonials.length;
      scrollToIndex(next, "smooth");
    }, AUTO_MS);
    return () => window.clearInterval(timer);
  }, [scrollToIndex]);

  return (
    <div ref={rootRef} className="w-full max-w-4xl py-0 md:py-16">
      {/* Logos */}
      <div className="mb-0 w-full md:mb-12">
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

        {/* Mobile: horizontal slides — logo, quote, author in flow (no overlap) */}
        <div
          className="group/marquee md:hidden"
          onMouseEnter={() => {
            pauseUntilRef.current = Date.now() + 60_000;
          }}
          onMouseLeave={() => {
            pauseUntilRef.current = Date.now() + AUTO_MS;
          }}
          onTouchStart={() => {
            pauseUntilRef.current = Date.now() + PAUSE_AFTER_SCROLL_MS;
          }}
        >
          <div
            ref={scrollerRef}
            className="flex w-full snap-x snap-mandatory gap-10 overflow-x-auto overflow-y-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Partner testimonials"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-0 shrink-0 grow-0 basis-full snap-start snap-always"
              >
                <div className="flex h-10 w-full shrink-0 items-center justify-start">
                  <img
                    src={t.logo}
                    alt=""
                    className={`h-10 max-h-10 w-auto max-w-[min(200px,55vw)] object-contain object-left ${t.logoAdjustClass}`}
                  />
                </div>
                <p className="mt-6 font-['Satoshi',sans-serif] text-[16px] font-normal leading-[1.5] text-white tracking-[-0.45px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex flex-col gap-2">
                  <span className="font-['Satoshi',sans-serif] text-[18px] font-semibold leading-[1.25] text-white tracking-[-0.45px]">
                    {t.name}
                  </span>
                  <span className="font-['Satoshi',sans-serif] text-[16px] font-normal leading-normal text-[rgba(255,255,255,0.72)] tracking-[-0.23px]">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote — desktop only: cross-fade */}
      <div className="relative mb-8 hidden min-h-[118px] md:mb-10 md:block">
        {testimonials.map((t, i) => (
          <p
            key={i}
            className={`
              absolute inset-0 font-['Satoshi',sans-serif] font-normal leading-[1.5] not-italic text-[24px] text-white tracking-[-0.45px]
              transition-all duration-[250ms] ease-out
              ${
                active === i
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }
            `}
          >
            &ldquo;{t.quote}&rdquo;
          </p>
        ))}
      </div>

      {/* Active Author Info — desktop only */}
      <div className="relative hidden min-h-[54px] w-full md:block">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`
              absolute inset-0 flex flex-col justify-center gap-0.5
              transition-all duration-[250ms] ease-out
              ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}
            `}
          >
            <span className="font-['Satoshi',sans-serif] text-[24px] font-semibold leading-[1.2] text-white tracking-[-0.45px]">
              {t.name}
            </span>
            <span className="font-['Satoshi',sans-serif] text-[16px] font-normal leading-[normal] text-[rgba(255,255,255,0.72)] tracking-[-0.23px]">
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
