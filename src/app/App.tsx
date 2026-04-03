import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { AddieClientLogo } from "@/components/AddieClientLogo";
import { TestimonialsMinimal } from "@/components/TestimonialsMinimal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import svgPaths from "../imports/svg-9yfe37tpyu";
import Plasma from "./components/Plasma";
import imgImage120 from "../assets/Brewery logo red.svg";
import imgCocaColaLogoSvg from "../assets/b07c59db1f930f349d78f88f1539a45fadb516fd.png";
import imgNbaLogoNbaIconTransparentFreePng from "../assets/f27e9b699c0830cb489fd15868d944346bd3ccd1.png";
import img5968863 from "../assets/6685bb55a5822c06513e7f7efb8337bdd5f0377a.png";
import imgFossilGroupLogoWine from "../assets/65d8e3b63f29b375435372d3a6a5c4f46fddd264.png";
import img67499F452B7D45C48Cb5Ab3FSeo from "../assets/mgp logo.png";
import imgImage122 from "../assets/Klasnobl logo.png";
import img482Df7C8B90645369C33B8445Ce39Aa31 from "../assets/trailerpark logo.png";
import imgHennessyLogoPngImageHd from "../assets/4b99611c8f53821098dec44346dab8471c3a10a2.png";
import imgIvukLogo30011 from "../assets/future ventures logo.svg";
import imgColourLogoOnWhiteV11 from "../assets/ff35cc666d39aacef5eb058126345d78ae40e40f.png";
import imgKeynoteSystemsLogoPngSeeklogo78182 from "../assets/key node logo.png";
import imgUntrapLogo from "../assets/untrap logo.png";
import imgParticipantLogo from "../assets/participant logo.png";
import imgUiAppConceptForCommunityOfDesigners from "../assets/586456e31488f8c169fa075ef9f5534fada3cc0d.png";
import imgExperimentalMusicAppUi from "../assets/5c008c433b69e1c43602b9bfa4507f66610ed9d4.png";
import imgImage126 from "../assets/8b55e6cc6038907cb96735a4bd022d2efe2032c7.png";
import imgImage127 from "../assets/902ebce3a0eaeee9fbd0fbccfc3da751a28cd379.png";
import imgJourneyBreweryEstablished from "../assets/journey-brewery-established.png";
import imgJourneyKareemTrophy from "../assets/journey-kareem-trophy.png";
import imgJourneyWebbyAward from "../assets/journey-webby-award.png";
import imgJourney8YearsGrowing from "../assets/journey-8-years-growing.png";
import imgIndustryNgo from "../assets/ngo industry.jpg";
import imgIndustryAi from "../assets/AI industry.png";
import imgIndustryHealthcare from "../assets/healthcare industry.png";
import imgIndustryEducation from "../assets/Education industry.jpg";
import imgIndustryRetail from "../assets/retail industry.jpg";
import imgIndustryFintech from "../assets/fintech industry.jpg";
import imgIndustryFashion from "../assets/entertainment industry.jpg";

const CustomCursorLazy = lazy(() =>
  import("@/components/CustomCursor").then((m) => ({ default: m.CustomCursor })),
);

function DesktopCustomCursorGate() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setShow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <CustomCursorLazy />
    </Suspense>
  );
}

const HERO_INTRO_L1 = "Since 2020 we've helped startups and enterprises";
const HERO_INTRO_L2 = "design and build high\u2011performance digital products";
const HERO_INTRO_L3 = "that drive growth and user adoption";
/** Mobile: one paragraph; desktop hero uses three lines (see `HeroSection`). */
const HERO_INTRO_COPY = `${HERO_INTRO_L1} ${HERO_INTRO_L2} ${HERO_INTRO_L3}`;

/** Footer social — update if your company slug differs. */
const BREWERY_LINKEDIN_URL = "https://www.linkedin.com/company/brewery-agency/";

function Header() {
  return (
    <div className="relative z-[2] w-full shrink-0 py-4 sm:py-[24px]">
      <div
        className={`mx-auto flex w-full max-w-[1440px] content-stretch items-center justify-between ${SECTION_EDGE_X}`}
      >
        <div className="flex h-8 min-w-0 shrink-0 items-center justify-start md:h-[50px]">
          <img
            alt="Brewery"
            className="h-[1.8rem] w-auto max-h-8 max-w-[7.4rem] object-contain object-left pointer-events-none md:h-[42px] md:max-h-[50px] md:max-w-[min(240px,calc(100vw-180px))]"
            src={imgImage120}
          />
        </div>
        <InteractiveHoverButton text="Contact Us" onClick={() => window.open("mailto:vijay@brewery.agency", "_self")} />
      </div>
    </div>
  );
}

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Intro", href: "#intro" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Impact", href: "#impact" },
  { label: "Our Work", href: "#our-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

function computeActiveNavHref(): string {
  const probeY = window.innerHeight * 0.32;
  for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
    const item = NAV_ITEMS[i];
    const el = document.getElementById(item.href.slice(1));
    if (!el) continue;
    const r = el.getBoundingClientRect();
    if (r.top <= probeY && r.bottom >= probeY) {
      return item.href;
    }
  }
  let bestHref = NAV_ITEMS[0].href;
  let bestDist = Infinity;
  for (const item of NAV_ITEMS) {
    const el = document.getElementById(item.href.slice(1));
    if (!el) continue;
    const r = el.getBoundingClientRect();
    const dist =
      probeY < r.top ? r.top - probeY : probeY > r.bottom ? probeY - r.bottom : 0;
    if (dist < bestDist) {
      bestDist = dist;
      bestHref = item.href;
    }
  }
  return bestHref;
}

function useActiveSectionHref() {
  const [activeHref, setActiveHref] = useState<string>(NAV_ITEMS[0].href);

  useEffect(() => {
    let raf = 0;
    const sync = () => {
      raf = 0;
      setActiveHref(computeActiveNavHref());
    };
    const onScrollOrResize = () => {
      if (raf === 0) raf = requestAnimationFrame(sync);
    };
    sync();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, []);

  return activeHref;
}

function NavButton({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive?: boolean;
}) {
  const base =
    "backdrop-blur-[2px] bg-[rgba(255,255,255,0.15)] border border-transparent content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-[background-color,transform] duration-300 hover:bg-[rgba(255,255,255,0.07)] hover:scale-105 hover:border-white active:border-transparent no-underline";
  return (
    <a
      href={href}
      aria-current={isActive ? "location" : undefined}
      className={`${base} ${isActive ? "gap-[6px]" : "gap-0"}`}
    >
      {isActive ? (
        <span className="size-[5px] shrink-0 rounded-full bg-white" aria-hidden />
      ) : null}
      <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.23px]">
        {label}
      </p>
    </a>
  );
}

function SideNav({ activeHref }: { activeHref: string }) {
  return (
    <nav
      className="pointer-events-auto fixed left-[var(--sidenav-gutter)] top-1/2 z-50 hidden w-[var(--sidenav-width)] -translate-y-1/2 flex-col content-stretch items-start gap-[8px] lg:flex lg:flex-col"
      aria-label="Section navigation"
    >
      {NAV_ITEMS.map((item) => (
        <NavButton
          key={item.href}
          label={item.label}
          href={item.href}
          isActive={activeHref === item.href}
        />
      ))}
    </nav>
  );
}

function MobileTopNav({ activeHref }: { activeHref: string }) {
  return (
    <nav
      className="pointer-events-none fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 pt-[calc(2px+max(0.35rem,env(safe-area-inset-top,0px)))] pb-[calc(0.5rem+2px)] backdrop-blur-md lg:hidden"
      aria-label="Section navigation"
    >
      <div
        className={`pointer-events-auto mx-auto flex max-w-[1440px] gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-[max(1.5rem,var(--content-inset-left))] pr-[max(1.5rem,var(--content-inset-right))] sm:pl-[max(2.5rem,var(--content-inset-left))] sm:pr-[max(2.5rem,var(--content-inset-right))]`}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = activeHref === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={`shrink-0 rounded-full border border-transparent px-2.5 py-1.5 font-['Satoshi',sans-serif] text-[16px] font-normal leading-none tracking-[-0.2px] text-white no-underline transition-[background-color,transform] duration-300 active:scale-[0.98] ${
                isActive
                  ? "bg-white/20 ring-1 ring-white/25"
                  : "bg-white/10 hover:bg-white/15"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function HeroPlasmaLayer() {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[100dvh] w-full overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 70%, rgba(0,0,0,0.75) 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 70%, rgba(0,0,0,0.75) 88%, transparent 100%)",
      }}
    >
      <div className="h-full w-full">
        <Plasma
          color="#bc312e"
          speed={0.6}
          direction="forward"
          scale={0.98}
          opacity={0.82}
          mouseInteractive={false}
        />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative z-[2] flex w-full flex-1 min-h-0 flex-col content-stretch items-stretch">
      {/* Mobile: left-aligned copy; flex spacers 1 : 5 → ~⅙ space above, ~⅚ below (another step up from 1:3) */}
      <div className="flex min-h-0 w-full flex-1 flex-col md:hidden">
        <div className="min-h-0 flex-[1] basis-0" aria-hidden />
        <div className={`flex shrink-0 flex-col items-start text-left ${SECTION_EDGE_X}`}>
          <div className={`w-full ${HERO_MOBILE_HEADLINE_TYPO}`}>
            <p className="text-left">{`We design products `}</p>
            <p className="text-left">people actually want to use</p>
          </div>
          <p className="mt-8 w-full max-w-[min(100%,340px)] text-pretty font-['Satoshi',sans-serif] font-normal leading-[1.45] not-italic text-[16px] text-white/95 tracking-[-0.23px]">
            {HERO_INTRO_COPY}
          </p>
        </div>
        <div className="min-h-0 flex-[5] basis-0" aria-hidden />
      </div>
      {/* Desktop: original absolute layout */}
      <div className="relative hidden h-[460px] w-full shrink-0 md:block">
        <div className="absolute left-[max(1rem,min(210px,12vw))] top-[230px] flex w-[min(968px,calc(100%-2rem))] max-w-[968px] flex-col items-end font-['Cormorant_Garamond',sans-serif] font-medium not-italic text-[clamp(3rem,6vw,80px)] leading-[normal] text-white tracking-[-0.45px] xl:left-[210px] xl:text-[80px]">
          <p className="relative w-[min-content] min-w-full shrink-0 whitespace-pre-wrap">{`We design products `}</p>
          <p className="relative shrink-0 text-center">people actually want to use</p>
        </div>
        <p className="absolute left-[max(1rem,min(793px,52vw))] top-[100px] w-[min(580px,calc(100%-max(1rem,min(793px,52vw))-1.5rem))] font-['Satoshi',sans-serif] font-normal leading-[1.45] not-italic text-[16px] text-white tracking-[-0.23px] xl:left-[793px] xl:w-[min(580px,calc(100%-793px-1.5rem))]">
          {HERO_INTRO_L1}
          <br />
          {HERO_INTRO_L2}
          <br />
          {HERO_INTRO_L3}
        </p>
      </div>
    </div>
  );
}

/** Same horizontal inset left & right as main content (matches sidenav gutter). */
const SECTION_EDGE_X =
  "pl-[max(1.5rem,var(--content-inset-left))] sm:pl-[max(2.5rem,var(--content-inset-left))] md:pl-[max(3.5rem,var(--content-inset-left))] lg:pl-[max(5rem,var(--content-inset-left))] xl:pl-[max(90px,var(--content-inset-left))] pr-[max(1.5rem,var(--content-inset-left))] sm:pr-[max(2.5rem,var(--content-inset-left))] md:pr-[max(3.5rem,var(--content-inset-left))] lg:pr-[max(5rem,var(--content-inset-left))] xl:pr-[max(90px,var(--content-inset-left))]";

function SectionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[1440px] mx-auto ${SECTION_EDGE_X} ${className}`}>
      {children}
    </div>
  );
}

/** Vertical space between stacked main sections (60px mobile; hero block is separate). */
const SECTION_STACK_GAP = "gap-[60px] sm:gap-[60px] md:gap-28 lg:gap-[120px]";
/** No extra vertical padding inside sections on mobile — rhythm comes from SECTION_STACK_GAP + heading gaps. */
const SECTION_BODY_PY_MOBILE = "py-0 md:py-0";
/** Extra bottom padding after Clients — stacks with SECTION_STACK_GAP (Clients → Services). */
const SECTION_AFTER_CLIENTS = "md:pb-10 lg:pb-14 xl:pb-[4.5rem]";
/** Section title → body: 40px mobile, larger from md up. */
const SECTION_HEADING_TO_CONTENT_GAP = "gap-[40px] md:gap-16 lg:gap-[60px]";
/** Services header → columns (40px mobile). */
const SERVICES_HEADING_TO_CONTENT_GAP =
  "gap-[40px] md:gap-20 lg:gap-[72px]";

/** Cormorant scale for main section titles (Clients, Services, Industries, Work, Impact, Journey, Testimonials, FAQs, Contact). */
const SECTION_TITLE_TYPO =
  "font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic tracking-[-0.45px] text-[clamp(2.25rem,7vw,3.75rem)] md:text-[52px] lg:text-[60px]";

/** Hero mobile headline: same fluid scale as section titles, +1rem on min/max clamp (visible only below `md`). */
const HERO_MOBILE_HEADLINE_TYPO =
  "font-['Cormorant_Garamond',sans-serif] font-medium leading-[1.08] not-italic tracking-[-0.45px] text-white text-[clamp(3.25rem,7.5vw,4.75rem)]";

/** Full-width grid: cells stretch; logos stay centered; gap comes from column distribution (xl: five equal columns). */
const clientLogoCellClass =
  "flex min-h-[48px] w-full min-w-0 max-w-full items-center justify-center p-1 transition-all duration-300 hover:scale-110 cursor-pointer";
/** Slightly smaller — visually heavy marks (Coca-Cola, Lead Me Not) */
const clientLogoImgSm =
  "max-h-[44px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[46px]";
/** Addie — inline SVG scales; icon stays brand blue, wordmark white */
const clientLogoImgAddie =
  "max-h-[34px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[38px]";
/** Default visual weight */
const clientLogoImgMd =
  "max-h-[52px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[56px]";
/** Wordmarks with lots of empty canvas (NBA, Google, Fossil, Klas Nobl) */
const clientLogoImgLg =
  "max-h-[76px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[88px]";
/** Icon column — G3 */
const clientLogoImgIconCol =
  "max-h-[84px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[96px]";
/** Icon column — MGP & Trailer Park (larger than G3) */
const clientLogoImgIconColLg =
  "max-h-[102px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[118px]";
/** Klas Nobl — ~2× previous wordmark cap */
const clientLogoImgKlas =
  "max-h-[152px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[176px]";
/** KeyNode — slightly under default row weight */
const clientLogoImgKeyNode =
  "max-h-[29px] max-w-full h-auto w-auto object-contain object-center pointer-events-none sm:max-h-[32px]";
/** MGP brand orange (mask fill) */
const MGP_ORANGE = "#FF5F23";

/** Marquee row: fixed-width cells only — do not use `clientLogoCellClass` here (`w-full` breaks horizontal flex). */
const clientLogoMarqueeCellClass =
  "flex min-h-[52px] w-[112px] min-w-[112px] max-w-[112px] shrink-0 items-center justify-center p-1";

const MARQUEE_STRIP_GAP_PX = 24;

/** One horizontal pass of client logos for the mobile marquee (`clipPathId` must be unique per mounted strip). */
function ClientsMarqueeStrip({ clipPathId }: { clipPathId: string }) {
  return (
    <>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={clientLogoImgSm} src={imgCocaColaLogoSvg} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img
          alt=""
          className={`${clientLogoImgLg} brightness-125 contrast-110 scale-50 origin-center`}
          src={imgNbaLogoNbaIconTransparentFreePng}
        />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgLg} scale-[0.6] origin-center`} src={img5968863} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img
          alt=""
          className={`${clientLogoImgLg} brightness-0 invert opacity-90 scale-[0.8] origin-center`}
          src={imgFossilGroupLogoWine}
        />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <svg className="max-h-[40px] w-auto max-w-full shrink-0" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 118 42">
          <g clipPath={`url(#${clipPathId})`}>
            <path d={svgPaths.p19b2bd00} fill="#f1f5f9" />
            <path d={svgPaths.p3e5bbff2} fill="#f1f5f9" />
            <path d={svgPaths.p282f8280} fill="#f1f5f9" />
            <path d={svgPaths.p15c8db30} fill="#f1f5f9" />
            <path d={svgPaths.p1e7c3c80} fill="#f1f5f9" />
            <path d={svgPaths.p30b32200} fill="#f1f5f9" />
            <path d={svgPaths.p1fbdbdc0} fill="#f1f5f9" />
            <path d={svgPaths.pa7f9cc0} fill="#f1f5f9" />
            <path d={svgPaths.pee90500} fill="#f1f5f9" />
            <path d={svgPaths.p2fcec900} fill="#f1f5f9" />
            <path d={svgPaths.p34b57500} fill="#f1f5f9" />
            <path d={svgPaths.p3caaac00} fill="#f1f5f9" />
            <path d={svgPaths.p271d7b80} fill="#f1f5f9" />
            <path d={svgPaths.p37e38b00} fill="#f1f5f9" />
          </g>
          <defs>
            <clipPath id={clipPathId}>
              <rect fill="white" height="42" width="118" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgKlas} brightness-0 invert opacity-90`} src={imgImage122} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <AddieClientLogo className={`${clientLogoImgAddie} w-auto max-w-full shrink-0`} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgHennessyLogoPngImageHd} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={clientLogoImgMd} src={imgIvukLogo30011} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgColourLogoOnWhiteV11} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgMd} scale-[0.8] origin-center`} src={imgUntrapLogo} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={clientLogoImgKeyNode} src={imgKeynoteSystemsLogoPngSeeklogo78182} />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <div className="relative inline-flex max-w-full items-center justify-center scale-50 origin-center">
          <img alt="MGP" className={`${clientLogoImgIconColLg} max-w-full opacity-0`} src={img67499F452B7D45C48Cb5Ab3FSeo} />
          <div
            aria-hidden
            className="absolute inset-0 m-auto max-h-full max-w-full [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
            style={{
              backgroundColor: MGP_ORANGE,
              maskImage: `url(${img67499F452B7D45C48Cb5Ab3FSeo})`,
              WebkitMaskImage: `url(${img67499F452B7D45C48Cb5Ab3FSeo})`,
            }}
          />
        </div>
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img
          alt=""
          className={`${clientLogoImgIconColLg} brightness-0 invert contrast-200`}
          src={img482Df7C8B90645369C33B8445Ce39Aa31}
        />
      </div>
      <div className={`${clientLogoMarqueeCellClass} justify-center`}>
        <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgParticipantLogo} />
      </div>
    </>
  );
}

/** Below `md`: infinite marquee — rAF + pixel loop (avoids `w-full` flex bugs & %-transform issues). */
function MobileClientLogosMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const xRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const stripEl = stripRef.current;
    if (!track || !stripEl) return;

    let rafId = 0;
    const speed = 1.45;

    const loopPeriod = () => {
      const w = stripEl.getBoundingClientRect().width;
      if (!Number.isFinite(w) || w < 8) return 0;
      return w + MARQUEE_STRIP_GAP_PX;
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (pausedRef.current) return;

      const p = loopPeriod();
      if (p <= 0) return;

      let x = xRef.current - speed;
      while (x <= -p) {
        x += p;
      }
      xRef.current = x;
      track.style.transform = `translate3d(${x}px,0,0)`;
    };

    rafId = requestAnimationFrame(tick);

    const ro = new ResizeObserver(() => {
      const p = loopPeriod();
      if (p <= 0) return;
      while (xRef.current <= -p) {
        xRef.current += p;
      }
      track.style.transform = `translate3d(${xRef.current}px,0,0)`;
    });
    ro.observe(stripEl);
    ro.observe(track);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative z-[3] w-full overflow-hidden pb-3 pt-0 min-h-[64px] md:hidden"
      aria-label="Client logos"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max flex-row flex-nowrap items-center gap-6 will-change-transform"
      >
        <div ref={stripRef} className="flex shrink-0 flex-row flex-nowrap items-center gap-6 px-6">
          <ClientsMarqueeStrip clipPathId="clients-mq-lmn-a" />
        </div>
        <div className="flex shrink-0 flex-row flex-nowrap items-center gap-6 px-6">
          <ClientsMarqueeStrip clipPathId="clients-mq-lmn-b" />
        </div>
      </div>
    </div>
  );
}

function ClientsSection() {
  return (
    <div
      id="clients"
      className={`relative z-[2] shrink-0 w-full scroll-mt-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_22%,rgba(0,0,0,0.55)_48%,#000000_72%)] ${SECTION_AFTER_CLIENTS}`}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <SectionContainer className={`content-stretch flex flex-col gap-8 items-stretch justify-center ${SECTION_BODY_PY_MOBILE} relative w-full`}>
          <div className="flex w-full min-w-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-4">
            <div className={`min-w-0 max-w-[min(100%,554px)] shrink-0 whitespace-pre-wrap text-white ${SECTION_TITLE_TYPO}`}>
              <p className="mb-0">{`They trusted us `}</p>
              <p>with their biggest bets</p>
            </div>
            <p className="ml-0 w-full min-w-0 max-w-full text-left font-['Satoshi',sans-serif] text-[16px] font-normal leading-[1.45] not-italic tracking-[-0.45px] text-[rgba(255,255,255,0.82)] md:max-w-[min(100%,24rem)] md:text-[17px] lg:ml-0 lg:max-w-[346px] lg:w-auto lg:shrink-0 lg:text-right lg:text-[18px]">
              From Fortune 500s to funded startups, we help teams ship products that users love
            </p>
          </div>

          <MobileClientLogosMarquee />

          <div className="hidden w-full md:grid md:grid-cols-3 md:justify-items-stretch md:gap-x-[clamp(1rem,3.5vw,2.25rem)] md:gap-y-2 xl:grid-cols-5 xl:gap-x-[clamp(1.25rem,4vw,3rem)] xl:gap-y-2">
              {/* DOM order: main 4×3 block first, then icon column (MGP, Trailer, Participant) for <xl auto-flow; xl uses explicit placement */}
              <div className={`${clientLogoCellClass} xl:col-start-1 xl:row-start-1`}>
                <img alt="" className={clientLogoImgSm} src={imgCocaColaLogoSvg} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-2 xl:row-start-1`}>
                <img
                  alt=""
                  className={`${clientLogoImgLg} brightness-125 contrast-110 scale-50 origin-center`}
                  src={imgNbaLogoNbaIconTransparentFreePng}
                />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-3 xl:row-start-1`}>
                <img alt="" className={`${clientLogoImgLg} scale-[0.6] origin-center`} src={img5968863} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-4 xl:row-start-1`}>
                <img
                  alt=""
                  className={`${clientLogoImgLg} brightness-0 invert opacity-90 scale-[0.8] origin-center`}
                  src={imgFossilGroupLogoWine}
                />
              </div>

              <div className={`${clientLogoCellClass} xl:col-start-1 xl:row-start-2`}>
                <svg
                  className="max-h-[44px] w-auto max-w-full shrink-0 sm:max-h-[46px]"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 118 42"
                >
                  <g clipPath="url(#clip0_clients_leadmenot)">
                    <path d={svgPaths.p19b2bd00} fill="#f1f5f9" />
                    <path d={svgPaths.p3e5bbff2} fill="#f1f5f9" />
                    <path d={svgPaths.p282f8280} fill="#f1f5f9" />
                    <path d={svgPaths.p15c8db30} fill="#f1f5f9" />
                    <path d={svgPaths.p1e7c3c80} fill="#f1f5f9" />
                    <path d={svgPaths.p30b32200} fill="#f1f5f9" />
                    <path d={svgPaths.p1fbdbdc0} fill="#f1f5f9" />
                    <path d={svgPaths.pa7f9cc0} fill="#f1f5f9" />
                    <path d={svgPaths.pee90500} fill="#f1f5f9" />
                    <path d={svgPaths.p2fcec900} fill="#f1f5f9" />
                    <path d={svgPaths.p34b57500} fill="#f1f5f9" />
                    <path d={svgPaths.p3caaac00} fill="#f1f5f9" />
                    <path d={svgPaths.p271d7b80} fill="#f1f5f9" />
                    <path d={svgPaths.p37e38b00} fill="#f1f5f9" />
                  </g>
                  <defs>
                    <clipPath id="clip0_clients_leadmenot">
                      <rect fill="white" height="42" width="118" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-2 xl:row-start-2`}>
                <img alt="" className={`${clientLogoImgKlas} brightness-0 invert opacity-90`} src={imgImage122} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-3 xl:row-start-2`}>
                <AddieClientLogo className={`${clientLogoImgAddie} w-auto max-w-full shrink-0`} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-4 xl:row-start-2`}>
                <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgHennessyLogoPngImageHd} />
              </div>

              <div className={`${clientLogoCellClass} xl:col-start-1 xl:row-start-3 xl:mt-8`}>
                <img alt="" className={clientLogoImgMd} src={imgIvukLogo30011} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-2 xl:row-start-3 xl:mt-8`}>
                <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgColourLogoOnWhiteV11} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-3 xl:row-start-3 xl:mt-8`}>
                <img alt="" className={`${clientLogoImgMd} scale-[0.8] origin-center`} src={imgUntrapLogo} />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-4 xl:row-start-3 xl:mt-8`}>
                <img alt="" className={clientLogoImgKeyNode} src={imgKeynoteSystemsLogoPngSeeklogo78182} />
              </div>

              <div className={`${clientLogoCellClass} xl:col-start-5 xl:row-start-1`}>
                <div className="relative inline-flex max-w-full items-center justify-center scale-50 origin-center">
                  <img
                    alt="MGP"
                    className={`${clientLogoImgIconColLg} max-w-full opacity-0`}
                    src={img67499F452B7D45C48Cb5Ab3FSeo}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 m-auto max-h-full max-w-full [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                    style={{
                      backgroundColor: MGP_ORANGE,
                      maskImage: `url(${img67499F452B7D45C48Cb5Ab3FSeo})`,
                      WebkitMaskImage: `url(${img67499F452B7D45C48Cb5Ab3FSeo})`,
                    }}
                  />
                </div>
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-5 xl:row-start-2`}>
                <img
                  alt=""
                  className={`${clientLogoImgIconColLg} brightness-0 invert contrast-200`}
                  src={img482Df7C8B90645369C33B8445Ce39Aa31}
                />
              </div>
              <div className={`${clientLogoCellClass} xl:col-start-5 xl:row-start-3 xl:mt-8`}>
                <img alt="" className={`${clientLogoImgMd} brightness-0 invert opacity-90`} src={imgParticipantLogo} />
              </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

const SERVICES_COLUMNS: {
  category: string;
  name: string;
  description: string;
}[] = [
  {
    category: "Research",
    name: "User Research",
    description:
      "Ethnography, interviews, and usability studies that uncover real needs and inform every product decision.",
  },
  {
    category: "Strategy",
    name: "UX Consulting",
    description:
      "Journey mapping, audits, and roadmaps that align stakeholders on what to fix first for impact.",
  },
  {
    category: "Design",
    name: "Product & UI",
    description:
      "Interaction design, systems, and prototyping so interfaces feel intuitive, cohesive, and ready to ship.",
  },
  {
    category: "Visual",
    name: "Branding",
    description:
      "Visual identity and UI craft that express your brand clearly across every touchpoint.",
  },
  {
    category: "Build",
    name: "App Development",
    description:
      "Engineering across web and mobile with integrations and scalable architecture for growth.",
  },
];

function ServicesSection() {
  return (
    <div
      id="services"
      className="relative -mt-6 shrink-0 w-full scroll-mt-0 sm:-mt-7 md:-mt-8"
    >
      <div className="flex flex-col items-center size-full">
        <SectionContainer
          className={`content-stretch flex flex-col ${SERVICES_HEADING_TO_CONTENT_GAP} items-stretch ${SECTION_BODY_PY_MOBILE} relative w-full`}
        >
          <div className="content-stretch flex w-full min-w-0 flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-4 not-italic relative shrink-0 text-white tracking-[-0.45px]">
            <p className={`min-w-0 max-w-[min(100%,520px)] shrink-0 text-white ${SECTION_TITLE_TYPO}`}>
              How we help you win
            </p>
            <p className="ml-0 w-full min-w-0 max-w-full text-left font-['Satoshi',sans-serif] text-[16px] font-normal leading-[1.45] sm:max-w-[min(100%,24rem)] md:ml-auto md:max-w-[min(100%,520px)] md:text-balance md:text-[17px] md:text-right lg:max-w-[min(100%,560px)] lg:text-[18px]">
              Our services include end-to-end product design and development spanning strategy, design, and engineering.
            </p>
          </div>

          {/* Below md: true viewport full-bleed so cards + dividers span screen width (inset only by padding). Section padding alone cannot reach the right edge when layout is complex. */}
          <div
            className="relative w-full min-w-0 overflow-x-auto overflow-y-hidden max-md:ml-[calc(50%-50vw)] max-md:w-screen max-md:max-w-[100dvw] max-md:shrink-0 max-md:pl-[max(1.5rem,var(--content-inset-left))] max-md:pr-[max(1.5rem,var(--content-inset-right))] sm:max-md:pl-[max(2.5rem,var(--content-inset-left))] sm:max-md:pr-[max(2.5rem,var(--content-inset-right))] md:ml-0 md:w-full md:max-w-none md:overflow-visible md:px-0"
          >
            <div className="flex w-full min-w-0 max-w-none flex-col divide-y divide-[#bc312e] md:min-h-0 md:flex-row md:divide-x md:divide-y-0">
            {SERVICES_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className={`group relative flex min-h-0 w-full min-w-0 max-w-none cursor-pointer flex-col justify-between py-6 transition-[flex-grow,flex-basis,background-color] duration-500 ease-out max-md:px-0 md:min-h-[360px] md:flex-[1_1_0%] md:px-5 md:py-6 md:hover:z-10 md:hover:flex-[1.35_1_0%] md:hover:bg-[rgba(255,255,255,0.04)] ${
                  idx === 0 ? "md:border-l md:border-[#bc312e]" : ""
                }`}
              >
                <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic text-[16px] uppercase tracking-[-0.45px] text-white sm:text-[17px] md:text-[18px]">
                  {col.category}
                </p>
                <div className="mt-auto flex flex-col items-stretch justify-end">
                  <p className="font-['Satoshi',sans-serif] font-medium text-[20px] leading-[normal] tracking-[-0.45px] text-white sm:text-[24px] md:text-[24px]">
                    {col.name}
                  </p>
                  {/* Mobile / touch: always show copy; desktop: reveal on hover */}
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                    <div className="min-h-0 overflow-hidden">
                      <p className="pt-4 font-['Satoshi',sans-serif] text-[16px] font-normal leading-[1.45] tracking-[-0.23px] text-[rgba(255,255,255,0.72)]">
                        {col.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}

function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const row = rowRef.current;
    const viewport = viewportRef.current;
    if (!track || !row || !viewport) return;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const trackTop = window.scrollY + trackRect.top;
      const scrollable = Math.max(0, track.offsetHeight - window.innerHeight);
      // Row is as wide as its content; use the clip container width, not row.clientWidth.
      const visibleW = viewport.clientWidth;
      const maxScroll = Math.max(0, row.scrollWidth - visibleW +100);
      const rawProgress =
        scrollable <= 0
          ? 0
          : Math.min(1, Math.max(0, (window.scrollY - trackTop) / scrollable));
      // Map full vertical travel through the track to horizontal motion (no dead scroll after the row finishes).
      const horizontalT = Math.min(1, rawProgress);
      const eased = easeInOutQuad(horizontalT);
      const tx = -eased * maxScroll;
      row.style.transform = `translate3d(${tx}px, 0, 0)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(track);
    ro.observe(row);
    ro.observe(viewport);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  const industries = [
    {
      title: "NGO & Social Welfare",
      description:
        "Mission-driven platforms that enable donations, volunteer coordination, and community impact at scale",
      image: imgIndustryNgo,
    },
    {
      title: "IT & AI Workflows",
      description:
        "Scalable IT systems and AI-powered workflows that simplify complex operations and enhance productivity",
      image: imgIndustryAi,
    },
    {
      title: "E-commerce & Retail",
      description:
        "Next-gen shopping experiences that blend seamless checkout, personalization, and inventory management",
      image: imgIndustryRetail,
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Digital platforms for patient care, telemedicine, and wellness experiences that improve outcomes and engagement",
      image: imgIndustryHealthcare,
    },
    {
      title: "Education",
      description:
        "Engaging edtech platforms and learning systems designed to improve accessibility and learning experiences",
      image: imgIndustryEducation,
    },
    {
      title: "FinTech & Banking",
      description:
        "Secure financial platforms delivering intuitive banking, payments, and investment experiences",
      image: imgIndustryFintech,
    },
    {
      title: "Fashion & Lifestyle",
      description:
        "Brand sites, seasonal campaigns, and commerce flows that showcase collections, drops, and storytelling for labels and DTC fashion",
      image: imgIndustryFashion,
    },
  ];

  return (
    <section id="industries" className="w-full bg-black scroll-mt-0">
      <SectionContainer className={SECTION_BODY_PY_MOBILE}>
        {/* Mobile: horizontal carousel (desktop unchanged below) */}
        <div className={`flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} md:hidden`}>
          <h2 className={`text-white ${SECTION_TITLE_TYPO}`}>
            8+ industries. 50+ products.
            <br />
            We understand your user's problems
          </h2>
          <div
            className="-mx-[max(1.5rem,var(--content-inset-left))] snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-[max(1.5rem,var(--content-inset-left))] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-label="Industries"
          >
            <div className="flex w-max gap-5 pb-1">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="flex w-[min(85vw,300px)] shrink-0 snap-start flex-col gap-4 sm:w-[min(82vw,320px)]"
                >
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={industry.image}
                      alt=""
                      className="block h-[200px] w-full object-cover sm:h-[220px]"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="break-words text-[20px] font-medium text-white sm:text-[22px]">{industry.title}</h3>
                    <p className="mt-2 break-words text-[16px] leading-[1.45] text-white/70 sm:text-[17px]">{industry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative left-1/2 hidden w-screen -translate-x-1/2 md:block">
          <div ref={trackRef} className="relative h-[520vh] w-full">
            <div className="sticky top-0 z-[5] flex h-screen w-full flex-col overflow-hidden bg-black">
              <div className={`mb-12 shrink-0 sm:mb-14 md:mb-16 lg:mb-[60px] ${SECTION_EDGE_X}`}>
                <h2 className={`text-white ${SECTION_TITLE_TYPO}`}>
                  8+ industries. 50+ products.
                  <br />
                  We understand your user's problems
                </h2>
              </div>
              <div
                ref={viewportRef}
                className="flex min-h-0 flex-1 items-center overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20 xl:px-[90px]"
              >
                <div ref={rowRef} className="flex w-max gap-[80px] will-change-transform">
                  {industries.map((industry, idx) => (
                    <div
                      key={idx}
                      className="flex w-max shrink-0 gap-[24px] transition-transform duration-300 hover:scale-105"
                    >
                      <div className="h-[300px] w-[300px] shrink-0 overflow-hidden rounded-none">
                        <img
                          src={industry.image}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div
                        className={`flex h-[300px] w-[300px] shrink-0 flex-col ${
                          idx % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div className="min-w-0 max-w-full">
                          <h3 className="break-words text-[24px] font-medium text-white">{industry.title}</h3>
                          <p className="mt-2 break-words text-[18px] text-white/70">{industry.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

function ImpactSection() {
  return (
    <div id="impact" className="relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className={`content-stretch flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} items-start ${SECTION_BODY_PY_MOBILE} relative w-full`}>
        <p className={`w-full whitespace-pre-wrap text-white ${SECTION_TITLE_TYPO}`}>
          Impact at scale
        </p>
        <div className="grid w-full auto-rows-auto grid-cols-2 gap-[40px] sm:gap-6 xl:auto-rows-[1fr] xl:grid-cols-4 xl:gap-4 xl:justify-between">
          {[
            { label: "USERS OF OUR DESIGN", value: "3M+", description: "More than 3 million users interact with products we've designed every month" },
            { label: "CLIENT REVENUE", value: "$5M", description: "We partner with forward-thinking enterprises and startups and helped them to raise more than" },
            { label: "YEARS OF PRACTICE", value: "8", description: "8 years of crafting exceptional digital experiences across industries" },
            { label: "CLIENTS WORKED WITH", value: "50+", description: "From Fortune 500 companies to innovative startups across 8+ industries" }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative flex w-full min-w-0 max-w-full cursor-pointer flex-col items-stretch overflow-hidden px-4 py-5 sm:px-5 sm:py-6 xl:h-[428px] xl:min-w-0 xl:max-w-[350px] xl:w-[250px] xl:px-5 xl:py-6"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 border-l border-solid border-[#bc312e] transition-all duration-300 group-hover:border-l-2" />
              <p className="relative shrink-0 font-['Satoshi',sans-serif] text-[16px] font-normal leading-[normal] not-italic tracking-[-0.45px] text-white md:text-[18px]">
                {stat.label}
              </p>
              <div className="relative mt-4 flex w-full min-w-0 flex-col items-stretch xl:hidden">
                <p className="relative shrink-0 font-['Satoshi',sans-serif] text-[clamp(3.1rem,10.5vw,5.5rem)] font-medium leading-[normal] not-italic text-white">
                  {stat.value}
                </p>
                <p className="font-['Satoshi',sans-serif] text-[16px] font-normal leading-[normal] not-italic tracking-[-0.45px] text-white md:text-[18px]">
                  {stat.description}
                </p>
              </div>
              <div className="relative mt-4 hidden min-h-0 min-w-full flex-1 flex-col xl:flex">
                <div className="relative mt-auto flex min-w-full w-[min-content] flex-col">
                  <div className="flex flex-col justify-end font-['Satoshi',sans-serif] text-[92px] font-medium leading-[0] not-italic text-white transition-all duration-500 md:group-hover:-translate-y-[60px]">
                    <p className="leading-[normal] whitespace-pre-wrap">{stat.value}</p>
                  </div>
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                    <div className="min-h-0 overflow-hidden">
                      <p className="font-['Satoshi',sans-serif] text-[16px] font-normal leading-[normal] not-italic tracking-[-0.45px] text-white opacity-100 transition-opacity duration-500 md:text-[18px] md:opacity-0 md:group-hover:opacity-100">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

function WorkSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const row = rowRef.current;
    const viewport = viewportRef.current;
    if (!track || !row || !viewport) return;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const trackTop = window.scrollY + trackRect.top;
      const scrollable = Math.max(0, track.offsetHeight - window.innerHeight);
      const visibleW = viewport.clientWidth;
      const maxScroll = Math.max(0, row.scrollWidth - visibleW);
      const rawProgress =
        scrollable <= 0
          ? 0
          : Math.min(1, Math.max(0, (window.scrollY - trackTop) / scrollable));
      const HORIZONTAL_END = 0.66;
      const horizontalT = Math.min(1, rawProgress / HORIZONTAL_END);
      const eased = easeInOutQuad(horizontalT);
      const tx = -eased * maxScroll;
      row.style.transform = `translate3d(${tx}px, 0, 0)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(track);
    ro.observe(row);
    ro.observe(viewport);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div id="our-work" className="relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className={SECTION_BODY_PY_MOBILE}>
        {/* Mobile / tablet &lt; md: two horizontal rows × three images each (independent scroll) */}
        <div className={`flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} md:hidden`}>
          <p className={`text-white ${SECTION_TITLE_TYPO}`}>
            World-class work
          </p>
          <div className="flex flex-col gap-[20px]">
            {(
              [
                [imgImage126, imgImage127, imgUiAppConceptForCommunityOfDesigners],
                [imgImage126, imgExperimentalMusicAppUi, imgUiAppConceptForCommunityOfDesigners],
              ] as const
            ).map((row, rowIdx) => (
              <div
                key={rowIdx}
                className="-mx-[max(1.5rem,var(--content-inset-left))] snap-x snap-mandatory overflow-x-auto overflow-y-hidden px-[max(1.5rem,var(--content-inset-left))] scroll-pl-[max(1.5rem,var(--content-inset-left))] scroll-pr-[max(1.5rem,var(--content-inset-right))] sm:-mx-[max(2.5rem,var(--content-inset-left))] sm:px-[max(2.5rem,var(--content-inset-left))] sm:scroll-pl-[max(2.5rem,var(--content-inset-left))] sm:scroll-pr-[max(2.5rem,var(--content-inset-right))] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="region"
                aria-label={rowIdx === 0 ? "Selected work, row one" : "Selected work, row two"}
              >
                <div className="flex w-max items-stretch gap-3 pb-1">
                  {row.map((src, idx) => (
                    <div
                      key={`${rowIdx}-${idx}`}
                      className="relative h-[200px] w-[min(85vw,300px)] shrink-0 snap-start overflow-hidden rounded-sm sm:h-[220px] sm:w-[min(82vw,320px)]"
                    >
                      <img alt="" className="absolute inset-0 h-full w-full object-cover" src={src} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative left-1/2 hidden w-screen -translate-x-1/2 md:block">
          <div ref={trackRef} className="relative h-[520vh] w-full">
            <div className="sticky top-0 z-[5] flex h-screen w-full flex-col overflow-hidden bg-black">
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <div className="relative h-[60px] w-[min(425px,90vw)] shrink-0 rounded-[99px]">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[#bc312e] blur-[15px] h-[94px] left-[-51.5px] opacity-25 rounded-[99px] top-[-15px] w-[498px]"
                  />
                  <p className={`absolute left-[24px] top-0 text-center text-white ${SECTION_TITLE_TYPO}`}>{`World-class work `}</p>
                </div>
              </div>

              <div
                ref={viewportRef}
                className="relative z-[1] flex min-h-0 flex-1 items-center overflow-hidden px-6 sm:px-10 md:px-14 lg:px-20 xl:px-[90px]"
              >
                <div
                  ref={rowRef}
                  className="flex w-max items-center gap-[24px] will-change-transform"
                >
                  <div className="h-[180px] relative shrink-0 w-[300px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[111.11%] left-0 max-w-none top-0 w-full" src={imgImage126} />
                    </div>
                  </div>
                  <div className="h-[334px] relative shrink-0 w-[451px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[316.93%] left-[-26.89%] max-w-none top-[-100.14%] w-[132.1%]" src={imgImage127} />
                    </div>
                  </div>
                  <div className="h-[465px] relative shrink-0 w-[451px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[122.18%] left-[-0.69%] max-w-none top-[-11.37%] w-[100.69%]" src={imgUiAppConceptForCommunityOfDesigners} />
                    </div>
                  </div>
                  <div className="h-[334px] relative shrink-0 w-[556px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[111.11%] left-0 max-w-none top-0 w-full" src={imgImage126} />
                    </div>
                  </div>
                  <div className="h-[465px] relative shrink-0 w-[451px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[121.6%] left-[-0.08%] max-w-none top-[-10.03%] w-[100.15%]" src={imgExperimentalMusicAppUi} />
                    </div>
                  </div>
                  <div className="h-[309px] relative shrink-0 w-[300px] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[122.18%] left-[-0.69%] max-w-none top-[-11.37%] w-[100.69%]" src={imgUiAppConceptForCommunityOfDesigners} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

function JourneySection() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const [hoveredMilestoneIndex, setHoveredMilestoneIndex] = useState<number | null>(null);
  const milestoneRefs = useRef<Array<HTMLDivElement | null>>([]);

  const milestones = [
    { year: "2020", title: "Brewery Established", description: "Founded with a vision to redefine digital experiences through human-centered design", image: imgJourneyBreweryEstablished },
    { year: "2021", title: "Kareem Abdul-Jabbar Trophy", description: "UX awards recognition for annual Social Justice Champion award", image: imgJourneyKareemTrophy },
    { year: "2022", title: "Social Impact Campaign - Webby Winner", description: "Associated with the Fossil Group, Inc. Judas & The Black Messiah", image: imgJourneyWebbyAward },
    { year: "2026", title: "8 Years & Growing", description: "8 years serving 50+ clients across 15+ industries. Still pushing boundaries.", image: imgJourney8YearsGrowing }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) {
          return;
        }

        const activeElement = visible[0].target as HTMLDivElement;
        const nextIndex = Number(activeElement.dataset.milestoneIndex);

        if (!Number.isNaN(nextIndex)) {
          setActiveMilestoneIndex(nextIndex);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.55, 0.7],
        rootMargin: "-35% 0px -35% 0px",
      },
    );

    milestoneRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="our-journey" className="hidden relative shrink-0 w-full scroll-mt-0" aria-hidden="true">
      <SectionContainer className={`content-stretch flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} items-start ${SECTION_BODY_PY_MOBILE} relative w-full`}>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[430px]">
          <p className={`relative shrink-0 w-full whitespace-pre-wrap text-white ${SECTION_TITLE_TYPO}`}>How we got here</p>
        </div>
        <div className="relative w-full shrink-0 pt-[24px] pb-[24px] md:pt-[83px] md:pb-[40px]">
          <div className="relative mx-auto w-full max-w-[706px]">
            {/* Spine: center of this block so it tracks dot/image column */}
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 z-0 w-px -translate-x-1/2 bg-white/50" aria-hidden />
            <div className="relative z-10 flex w-full flex-col gap-[60px]">
            {milestones.map((milestone, idx) => {
              const isActive = hoveredMilestoneIndex === idx || activeMilestoneIndex === idx;
              return (
              <div
                key={idx}
                ref={(el) => {
                  milestoneRefs.current[idx] = el;
                }}
                data-milestone-index={idx}
                onMouseEnter={() => setHoveredMilestoneIndex(idx)}
                onMouseLeave={() => setHoveredMilestoneIndex(null)}
                className={`group grid w-full max-w-full grid-cols-1 items-center gap-[16px] transition-[min-height] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-x-3 sm:gap-y-0 ${
                  isActive ? "min-h-[120px] sm:min-h-[112px]" : "min-h-0"
                }`}
              >
                {/* Year: left track — grid keeps center column on spine */}
                <div className="flex w-full min-w-0 justify-center sm:justify-end">
                  <div className="bg-[rgba(118,118,128,0.12)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-300 group-hover:bg-[rgba(118,118,128,0.25)]">
                    <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px] group-hover:border-2 transition-all duration-300" />
                    <p className="font-['Satoshi',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.23px]">{milestone.year}</p>
                  </div>
                </div>
                {/* Marker: auto column stays centered — width change expands left+right from dot (spine) */}
                <div
                  className={`relative z-10 flex shrink-0 justify-center justify-self-center transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-center ${
                    isActive ? "w-[min(100%,200px)] sm:w-[200px]" : "w-4"
                  }`}
                >
                  <div
                    className={`relative flex w-full shrink-0 origin-center items-center justify-center overflow-hidden rounded-none bg-black/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-[width,height,transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "h-[112px] w-full max-w-[200px] scale-100" : "h-4 w-4 rounded-full scale-95"
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`absolute inset-0 rounded-full bg-[#BC312E] transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    />
                    <img
                      alt=""
                      src={milestone.image}
                      className={`absolute inset-0 h-full w-full rounded-none object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                    />
                  </div>
                </div>
                {/* Text: right track */}
                <div className="content-stretch flex min-w-0 flex-col gap-[8px] items-start justify-self-start leading-[normal] not-italic text-white sm:max-w-[212px] sm:whitespace-pre-wrap">
                  <p className="font-['Satoshi',sans-serif] font-bold relative shrink-0 text-[18px] tracking-[-0.45px]">{milestone.title}</p>
                  <p className="font-['Satoshi',sans-serif] font-normal relative shrink-0 text-[16px] tracking-[-0.23px] sm:w-[203px]">{milestone.description}</p>
                </div>
              </div>
            );})}
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div id="testimonials" className="relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className={`content-stretch flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} items-start ${SECTION_BODY_PY_MOBILE} relative w-full`}>
        <p className={`relative shrink-0 text-white ${SECTION_TITLE_TYPO}`}>What Our Partners Say</p>
        <TestimonialsMinimal />
      </SectionContainer>
    </div>
  );
}

function FAQItem({
  question,
  answer,
  answerId,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  answerId: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="mb-[-0.5px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-b border-solid border-t inset-0 pointer-events-none" />
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={answerId}
        className={`relative w-full cursor-pointer transition-colors duration-300 hover:bg-[rgba(255,255,255,0.05)] text-left ${
          isOpen ? "items-start" : "items-center"
        } content-stretch flex gap-[16px] px-4 py-5 sm:px-8 sm:py-6 md:px-[60px] md:py-[30px]`}
      >
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-['Satoshi',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap pr-[8px] sm:text-[20px] md:text-[24px]">
            {question}
          </p>
          <div
            className={`grid w-full transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <p
                id={answerId}
                className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic pt-[16px] text-[16px] text-[rgba(255,255,255,0.75)] tracking-[-0.45px] w-full whitespace-pre-wrap sm:text-[17px] md:text-[18px]"
              >
                {answer}
              </p>
            </div>
          </div>
        </div>
        <span
          className="relative shrink-0 size-[24px] flex items-center justify-center text-white select-none pointer-events-none"
          aria-hidden
        >
          {isOpen ? (
            <svg className="block size-[20px]" fill="none" viewBox="0 0 24 24" aria-hidden>
              <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24" aria-hidden>
              <path d={svgPaths.p2a6e0600} fill="currentColor" />
            </svg>
          )}
        </span>
      </button>
    </div>
  );
}

function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What are your core services?",
      answer:
        "We specialize in UX consulting, interaction design, usability testing, product engineering, app development, and branding & visual identity. Each engagement is tailored to your specific needs and goals",
    },
    {
      question: "What makes Brewery different from other agencies?",
      answer:
        "We combine deep domain expertise across 15+ industries with a relentless user-first methodology. We don't just make things look good — we engineer experiences that deliver measurable business impact.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "We offer project-based and retainer models, tailored to your scope and timeline. Each engagement begins with a scoping session to ensure alignment on deliverables, budget, and expectations",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely. We've helped 50+ organizations — from early-stage startups to enterprise — launch and scale their products. We understand the unique challenges and pace of startup environments",
    },
    {
      question: "What is your UX mapping process?",
      answer:
        "Our process involves discovery workshops, comprehensive user research, journey mapping, wireframing, high-fidelity prototyping, and iterative usability testing. Every decision is grounded in data and validated with real users",
    },
  ];

  return (
    <div id="faqs" className="relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className={`content-stretch flex flex-col ${SECTION_HEADING_TO_CONTENT_GAP} items-start ${SECTION_BODY_PY_MOBILE} relative w-full`}>
        <p className={`relative shrink-0 text-white ${SECTION_TITLE_TYPO}`}>
          FAQs
        </p>
        <div className="content-stretch flex flex-col items-start pb-[0.5px] relative shrink-0 w-full">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              answerId={`faq-answer-${idx}`}
              isOpen={openFAQ === idx}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

function ContactSection() {
  return (
    <div id="contact" className="bg-black relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className={`content-stretch flex flex-col gap-8 items-start ${SECTION_BODY_PY_MOBILE} pb-[max(2.75rem,calc(1.75rem+env(safe-area-inset-bottom,0px)))] relative w-full md:pb-16 lg:pb-20 xl:pb-24 lg:gap-[150px]`}>
        <div className="content-stretch flex w-full flex-col items-start gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="content-stretch flex min-h-px min-w-px max-md:flex-none flex-[1_0_0] flex-col gap-4 items-start relative max-md:pb-2">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className={`relative shrink-0 w-full whitespace-pre-wrap ${SECTION_TITLE_TYPO}`}>
                <p className="mb-0">
                  <span className="text-[#bc312e]">{`Let's talk. `}</span>
                  <span className="text-white">{`We'd love `}</span>
                </p>
                <p className="text-white">to work with you!</p>
              </div>
            </div>
            <InteractiveHoverButton
              variant="accent"
              text="Contact Us"
              onClick={() => window.open("mailto:vijay@brewery.agency", "_self")}
            />
          </div>
          <div className="flex w-full max-w-full shrink-0 flex-col gap-5 text-left leading-[normal] not-italic text-white tracking-[-0.45px] max-md:mt-1 max-md:gap-2 lg:ml-auto lg:w-max lg:gap-[24px] lg:text-right">
            <p className="w-full font-['Satoshi',sans-serif] font-medium text-[18px] whitespace-pre-wrap sm:text-[20px] md:text-[24px]">
              Locations
            </p>
            <div className="flex w-full flex-col gap-3 font-['Satoshi',sans-serif] text-[16px] font-normal max-md:gap-1 md:text-[18px] [&_p]:block [&_p]:w-full lg:gap-[12px] lg:text-right">
              <p>New York, USA</p>
              <p>Toronto, Canada</p>
              <p>Delhi, India</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex w-full flex-col gap-4 font-['Satoshi',sans-serif] font-normal items-start justify-between leading-[normal] not-italic text-white text-[16px] tracking-[-0.45px] max-md:gap-2 sm:flex-row sm:items-center sm:gap-0 pb-6 md:pb-8 lg:pb-10 md:text-[18px]">
          <p className="relative shrink-0">@2026 Brewery Agency</p>
          <a
            href={BREWERY_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative shrink-0 text-inherit no-underline transition-colors duration-300 hover:text-[#bc312e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            LinkedIn
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}

export default function App() {
  const activeSectionHref = useActiveSectionHref();

  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-black pt-[calc(env(safe-area-inset-top,0px)+3rem)] lg:pt-0">
      <DesktopCustomCursorGate />
      <SideNav activeHref={activeSectionHref} />
      <MobileTopNav activeHref={activeSectionHref} />
      <div className={`content-stretch relative z-[2] flex w-full flex-col items-start ${SECTION_STACK_GAP}`}>
        <div
          id="intro"
          className="relative flex min-h-[100dvh] w-full flex-col scroll-mt-0"
        >
          <HeroPlasmaLayer />
          <Header />
          <HeroSection />
        </div>
        <ClientsSection />
        <ServicesSection />
        <IndustriesSection />
        <ImpactSection />
        <WorkSection />
        <JourneySection />
        <TestimonialsSection />
        <FAQsSection />
        <ContactSection />
      </div>
    </div>
  );
}
