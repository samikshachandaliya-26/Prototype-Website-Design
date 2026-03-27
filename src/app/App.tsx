import { useState, useRef, useEffect } from "react";
import { TestimonialsMinimal } from "@/components/TestimonialsMinimal";
import { LiquidMetalButton } from "../components/LiquidMetalButton";
import svgPaths from "../imports/svg-9yfe37tpyu";
import Plasma from "./components/Plasma";
import imgImage120 from "../assets/eec2f74ce2ad486e20ef40a4a0e13e319ee42aa4.png";
import imgCocaColaLogoSvg from "../assets/b07c59db1f930f349d78f88f1539a45fadb516fd.png";
import imgNbaLogoNbaIconTransparentFreePng from "../assets/f27e9b699c0830cb489fd15868d944346bd3ccd1.png";
import img5968863 from "../assets/6685bb55a5822c06513e7f7efb8337bdd5f0377a.png";
import imgFossilGroupLogoWine from "../assets/65d8e3b63f29b375435372d3a6a5c4f46fddd264.png";
import img67499F452B7D45C48Cb5Ab3FSeo from "../assets/3e6cd97c3d930fccf4b855245af90226db637591.png";
import imgImage122 from "../assets/d13c27f38f7f19a70fb4c21059e43a825a49fd55.png";
import img482Df7C8B90645369C33B8445Ce39Aa31 from "../assets/f71b47fca4ab1e823c0465d7e0636c553d7d5ebc.png";
import img3Copy from "../assets/674a1f6ebd3aac2f6dcb0857081af7188a57949a.png";
import imgHennessyLogoPngImageHd from "../assets/4b99611c8f53821098dec44346dab8471c3a10a2.png";
import imgIvukLogo30011 from "../assets/40729da181c435cd15b4bf549df628dc57dd7fb9.png";
import imgColourLogoOnWhiteV11 from "../assets/ff35cc666d39aacef5eb058126345d78ae40e40f.png";
import img2E42C9A6Ba16477CBa47A104557E051B from "../assets/5648a147c55d19bcd5774622c1b331d60d8fdb6d.png";
import img1200X630Wa from "../assets/439bdf82d9f73e6d26e7e4125a47e37202db5859.png";
import imgKeynoteSystemsLogoPngSeeklogo78182 from "../assets/231508c727b58c002c12067488b210d757d8e659.png";
import imgImage125 from "../assets/e8d5b166233ace22b929e25dbad387b37e84e73f.png";
import imgUiAppConceptForCommunityOfDesigners from "../assets/586456e31488f8c169fa075ef9f5534fada3cc0d.png";
import imgExperimentalMusicAppUi from "../assets/5c008c433b69e1c43602b9bfa4507f66610ed9d4.png";
import imgImage126 from "../assets/8b55e6cc6038907cb96735a4bd022d2efe2032c7.png";
import imgImage127 from "../assets/902ebce3a0eaeee9fbd0fbccfc3da751a28cd379.png";
import imgJourneyBreweryEstablished from "../assets/journey-brewery-established.png";
import imgJourneyKareemTrophy from "../assets/journey-kareem-trophy.png";
import imgJourneyWebbyAward from "../assets/journey-webby-award.png";
import imgJourney8YearsGrowing from "../assets/journey-8-years-growing.png";

function Header() {
  return (
    <div className="relative z-[2] w-full shrink-0 backdrop-blur-[30px] bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-between pl-[max(90px,var(--content-inset-left))] pr-[90px] py-[24px]">
      <div className="h-[50px] relative shrink-0 w-[147px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage120} />
      </div>
      <LiquidMetalButton label="Contact Us" onClick={() => window.open("mailto:vijay@brewery.agency", "_self")} />
    </div>
  );
}

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Intro", href: "#intro" },
  { label: "Clients", href: "#clients" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Our Work", href: "#our-work" },
  { label: "Our Journey", href: "#our-journey" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

function NavButton({ label, href, onLightBackground }: { label: string; href: string; onLightBackground?: boolean }) {
  return (
    <a
      href={href}
      className={
        onLightBackground
          ? "backdrop-blur-[2px] bg-[rgba(23,24,29,0.92)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[#17181d] hover:scale-105 no-underline shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
          : "backdrop-blur-[2px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.25)] hover:scale-105 no-underline"
      }
    >
      <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.23px]">{label}</p>
    </a>
  );
}

function SideNav() {
  const navRef = useRef<HTMLElement>(null);
  const [onLightBackground, setOnLightBackground] = useState(false);

  useEffect(() => {
    const update = () => {
      const navEl = navRef.current;
      const contactEl = document.getElementById("contact");
      if (!navEl || !contactEl) return;
      const nav = navEl.getBoundingClientRect();
      const contact = contactEl.getBoundingClientRect();
      const overlaps = nav.bottom > contact.top && nav.top < contact.bottom;
      setOnLightBackground(overlaps);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    const contactEl = document.getElementById("contact");
    if (contactEl) ro.observe(contactEl);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed left-[var(--sidenav-gutter)] top-1/2 -translate-y-1/2 content-stretch flex flex-col gap-[8px] items-start w-[var(--sidenav-width)] z-50 pointer-events-auto"
      aria-label="Section navigation"
    >
      {NAV_ITEMS.map((item) => (
        <NavButton key={item.href} label={item.label} href={item.href} onLightBackground={onLightBackground} />
      ))}
    </nav>
  );
}

function HeroPlasmaLayer() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-0 z-[1] w-[min(1440px,100vw)] -translate-x-1/2"
      style={{
        height: "min(1750px, 125vh)",
        WebkitMaskImage:
          "linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.35) 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, #000 0%, #000 58%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.35) 88%, transparent 100%)",
      }}
    >
      <Plasma
        color="#bc312e"
        speed={0.6}
        direction="forward"
        scale={0.98}
        opacity={0.82}
        mouseInteractive={false}
      />
    </div>
  );
}

function HeroSection() {
  return (
    <div id="intro" className="relative z-[2] content-stretch flex flex-col gap-[60px] items-start shrink-0 w-full scroll-mt-0">
      <div className="h-[460px] relative shrink-0 w-full">
        <div className="absolute content-stretch flex flex-col font-['Cormorant_Garamond',sans-serif] font-medium items-end leading-[normal] left-[210px] not-italic pb-[10px] text-[80px] text-white top-[230px] tracking-[-0.45px] w-[968px]">
          <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`We design products `}</p>
          <p className="relative shrink-0 text-center">people actually want to use</p>
        </div>
        <p className="absolute font-['Satoshi',sans-serif] font-normal leading-[normal] left-[793px] not-italic text-[14px] text-white top-[100px] tracking-[-0.23px] w-[300px] whitespace-pre-wrap">Since 2020 we've helped startups and enterprises design and build high-performance digital products that drive growth and user adoption</p>
      </div>
    </div>
  );
}

function SectionContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`w-full max-w-[1440px] mx-auto pl-[max(1.5rem,var(--content-inset-left))] sm:pl-[max(2.5rem,var(--content-inset-left))] md:pl-[max(3.5rem,var(--content-inset-left))] lg:pl-[max(5rem,var(--content-inset-left))] xl:pl-[max(90px,var(--content-inset-left))] pr-6 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-[90px] ${className}`}
    >
      {children}
    </div>
  );
}

function ClientsSection() {
  return (
    <div
      id="clients"
      className="relative z-[2] shrink-0 w-full scroll-mt-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.15)_22%,rgba(0,0,0,0.55)_48%,#000000_72%)]"
    >
      <div className="flex flex-col items-center justify-center size-full">
        <SectionContainer className="content-stretch flex flex-col gap-[60px] items-center justify-center py-[60px] relative w-full">
          <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-full">
            <div className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-white text-[60px] tracking-[-0.45px] w-[554px] whitespace-pre-wrap">
              <p className="mb-0">{`They trusted us `}</p>
              <p>with their biggest bets</p>
            </div>
          </div>
          <p className="-translate-x-full absolute font-['Satoshi',sans-serif] font-normal leading-[normal] left-[1189px] not-italic text-[rgba(255,255,255,0.82)] text-[18px] text-right top-[170px] tracking-[-0.45px] w-[346px] whitespace-pre-wrap">From Fortune 500s to funded startups, we help teams ship products that users love</p>

          <div className="gap-x-[75px] gap-y-[60px] grid grid-cols-[repeat(5,fit-content(100%))] grid-rows-[repeat(3,fit-content(100%))] relative shrink-0 w-full">
            <div className="col-1 h-[42px] justify-self-center relative row-1 self-center shrink-0 w-[136px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCocaColaLogoSvg} />
            </div>
            <div className="col-2 h-[42px] justify-self-center relative row-1 self-center shrink-0 w-[118px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[275.86%] left-0 max-w-none top-[-89.66%] w-full" src={imgNbaLogoNbaIconTransparentFreePng} />
              </div>
            </div>
            <div className="col-3 h-[43px] justify-self-center relative row-1 self-center shrink-0 w-[122px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[285.71%] left-0 max-w-none top-[-92.86%] w-full" src={img5968863} />
              </div>
            </div>
            <div className="col-4 h-[30px] justify-self-center relative row-1 self-center shrink-0 w-[125px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[333.33%] left-[-13.4%] max-w-none top-[-116.67%] w-[123.71%] brightness-0 invert opacity-90" src={imgFossilGroupLogoWine} />
              </div>
            </div>
            <div className="col-5 h-[60px] justify-self-center relative row-1 self-center shrink-0 w-[235px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[235.29%] left-[-7.66%] max-w-none top-[-64.71%] w-[114.57%]" src={img67499F452B7D45C48Cb5Ab3FSeo} />
              </div>
            </div>

            <div className="col-1 h-[42px] justify-self-center relative row-2 self-center shrink-0 w-[118px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 42">
                <g clipPath="url(#clip0_1_799)">
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
                  <clipPath id="clip0_1_799">
                    <rect fill="white" height="42" width="118" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="col-2 h-[34px] justify-self-center relative row-2 self-center shrink-0 w-[142px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[216.41%] left-0 max-w-none top-[-62.26%] w-full brightness-0 invert opacity-90" src={imgImage122} />
              </div>
            </div>
            <div className="col-3 h-[60px] justify-self-center relative row-2 self-center shrink-0 w-[92px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[153.85%] left-0 max-w-none top-[-15.38%] w-full brightness-0 invert contrast-200" src={img482Df7C8B90645369C33B8445Ce39Aa31} />
              </div>
            </div>
            <div className="col-4 h-[42px] justify-self-center relative row-2 self-center shrink-0 w-[81px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3Copy} />
            </div>
            <div className="col-5 h-[60px] justify-self-center relative row-2 self-center shrink-0 w-[107px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full brightness-0 invert opacity-90" src={imgHennessyLogoPngImageHd} />
            </div>

            <div className="col-1 h-[30px] justify-self-center relative row-3 self-center shrink-0 w-[175px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[285.71%] left-[-17.68%] max-w-none top-[-89.29%] w-[151.09%]" src={imgIvukLogo30011} />
              </div>
            </div>
            <div className="col-2 h-[60px] justify-self-center relative row-3 self-center shrink-0 w-[134px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full brightness-0 invert opacity-90" src={imgColourLogoOnWhiteV11} />
            </div>
            <div className="col-3 h-[42px] justify-self-center relative row-3 self-center shrink-0 w-[100px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[119.73%] left-0 max-w-none top-[-6.13%] w-full" src={img2E42C9A6Ba16477CBa47A104557E051B} />
              </div>
            </div>
            <div className="col-4 h-[60px] justify-self-center relative row-3 self-center shrink-0 w-[61px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[142.86%] left-[-82.79%] max-w-none top-[-21.43%] w-[267.33%]" src={img1200X630Wa} />
              </div>
            </div>
            <div className="col-5 h-[30px] justify-self-center relative row-3 self-center shrink-0 w-[154px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[533.33%] left-[-4%] max-w-none top-[-213.33%] w-[106.67%]" src={imgKeynoteSystemsLogoPngSeeklogo78182} />
              </div>
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
    <div id="services" className="relative shrink-0 w-full scroll-mt-0">
      <div className="flex flex-col items-center size-full">
        <SectionContainer className="content-stretch flex flex-col gap-[60px] items-stretch relative w-full">
          <div className="content-stretch flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between not-italic relative shrink-0 text-white tracking-[-0.45px] w-full">
            <p className="font-['Cormorant_Garamond',sans-serif] font-medium shrink-0 text-[60px] leading-[normal] max-w-[min(100%,520px)]">
              How we help you win
            </p>
            <p className="font-['Satoshi',sans-serif] font-normal text-[18px] leading-[normal] md:max-w-[420px] md:text-right shrink-0">
              Our services include end-to-end product design and development spanning strategy, design, and engineering.
            </p>
          </div>

          <div className="w-full overflow-x-auto overflow-y-hidden -mx-[max(1.5rem,var(--content-inset-left))] px-[max(1.5rem,var(--content-inset-left))] sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex min-w-[720px] sm:min-w-0 w-full">
            {SERVICES_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className="group relative flex flex-[1_1_0%] min-w-0 flex-col justify-between min-h-[320px] md:min-h-[360px] px-[16px] sm:px-[20px] py-[24px] cursor-pointer border-l border-solid border-[#bc312e] transition-[flex-grow,flex-basis,background-color] duration-500 ease-out hover:flex-[1.35_1_0%] hover:z-10 hover:bg-[rgba(255,255,255,0.04)]"
              >
                <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic text-[18px] text-white tracking-[-0.45px] uppercase">
                  {col.category}
                </p>
                <div className="flex flex-col items-stretch justify-end mt-auto">
                  <p className="font-['Satoshi',sans-serif] font-medium text-[20px] sm:text-[22px] md:text-[24px] text-white leading-[normal] tracking-[-0.45px]">
                    {col.name}
                  </p>
                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                    <div className="min-h-0 overflow-hidden">
                      <p className="font-['Satoshi',sans-serif] font-normal text-[14px] sm:text-[15px] leading-[1.45] text-[rgba(255,255,255,0.72)] tracking-[-0.23px] pt-[16px]">
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
      const maxScroll = Math.max(0, row.scrollWidth - visibleW);
      const rawProgress =
        scrollable <= 0
          ? 0
          : Math.min(1, Math.max(0, (window.scrollY - trackTop) / scrollable));
      // Horizontal motion uses the first ~2/3 of vertical travel (more pixels = easier to read each card).
      // Remaining vertical scroll holds the last frame before the next section.
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

  const industries = [
    {
      title: "NGO & Social Welfare",
      description:
        "Mission-driven platforms that enable donations, volunteer coordination, and community impact at scale",
      image: imgUiAppConceptForCommunityOfDesigners,
    },
    {
      title: "IT & AI Workflows",
      description:
        "Scalable IT systems and AI-powered workflows that simplify complex operations and enhance productivity",
      image: imgImage125,
    },
    {
      title: "Healthcare & Wellness",
      description:
        "Digital platforms for patient care, telemedicine, and wellness experiences that improve outcomes and engagement",
      image: imgUiAppConceptForCommunityOfDesigners,
    },
    {
      title: "Education",
      description:
        "Engaging edtech platforms and learning systems designed to improve accessibility and learning experiences",
      image: imgExperimentalMusicAppUi,
    },
    {
      title: "E-commerce & Retail",
      description:
        "Next-gen shopping experiences that blend seamless checkout, personalization, and inventory management",
      image: imgImage126,
    },
    {
      title: "FinTech & Banking",
      description:
        "Secure financial platforms delivering intuitive banking, payments, and investment experiences",
      image: imgImage127,
    },
    {
      title: "Entertainment & Media",
      description:
        "Immersive content platforms for streaming, social engagement, and creative collaboration",
      image: imgExperimentalMusicAppUi,
    },
  ];

  return (
    <section id="industries" className="w-full bg-black py-[100px] scroll-mt-0">
      <SectionContainer>
        {/* Scroll track: vertical scroll pins heading + row, drives horizontal translate */}
        <div ref={trackRef} className="relative h-[520vh] w-full">
          <div className="sticky top-0 z-[5] flex h-screen w-full flex-col overflow-hidden bg-black">
            <div className="mb-[60px] shrink-0">
              <h2 className="text-[60px] text-white font-['Cormorant_Garamond'] leading-tight">
                8+ industries. 50+ products.
                <br />
                We understand your user's problems
              </h2>
            </div>
            <div
              ref={viewportRef}
              className="min-h-[300px] flex-1 overflow-hidden -ml-[max(1.5rem,var(--content-inset-left))] sm:-ml-[max(2.5rem,var(--content-inset-left))] md:-ml-[max(3.5rem,var(--content-inset-left))] lg:-ml-[max(5rem,var(--content-inset-left))] xl:-ml-[max(90px,var(--content-inset-left))] -mr-6 sm:-mr-10 md:-mr-14 lg:-mr-20 xl:-mr-[90px] pl-[max(1.5rem,var(--content-inset-left))] sm:pl-[max(2.5rem,var(--content-inset-left))] md:pl-[max(3.5rem,var(--content-inset-left))] lg:pl-[max(5rem,var(--content-inset-left))] xl:pl-[max(90px,var(--content-inset-left))] pr-6 sm:pr-10 md:pr-14 lg:pr-20 xl:pr-[90px]"
            >
              <div
                ref={rowRef}
                className="flex w-max gap-[80px] will-change-transform"
              >
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="flex gap-[24px] shrink-0 w-[600px] hover:scale-105 transition-transform duration-300"
                  >
                    {/* Image */}
                    <div className="w-[291px] h-[300px] relative overflow-hidden rounded-lg">
                      <img
                        src={industry.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="w-[300px]">
                      <h3 className="text-white text-[24px] font-medium">
                        {industry.title}
                      </h3>
                      <p className="text-white/70 text-[18px] mt-2">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                ))}
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
    <div className="relative shrink-0 w-full">
      <SectionContainer className="content-stretch flex flex-col gap-[60px] items-start relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap">Impact at scale</p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {[
            { label: "USERS OF OUR DESIGN", value: "3M+", description: "More than 3 million users interact with products we've designed every month" },
            { label: "CLIENT REVENUE", value: "$5M", description: "We partner with forward-thinking enterprises and startups and helped them to raise more than" },
            { label: "YEARS OF PRACTICE", value: "8", description: "8 years of crafting exceptional digital experiences across industries" },
            { label: "CLIENTS WORKED WITH", value: "50+", description: "From Fortune 500 companies to innovative startups across 8+ industries" }
          ].map((stat, idx) => (
            <div key={idx} className="content-stretch flex flex-col h-[428px] items-start max-w-[350px] min-w-[250px] px-[20px] py-[24px] relative shrink-0 w-[250px] group cursor-pointer overflow-hidden">
              <div aria-hidden="true" className="absolute border-[#bc312e] border-l border-solid inset-0 pointer-events-none group-hover:border-l-2 transition-all duration-300" />
              <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px]">{stat.label}</p>
              <div className="flex flex-col min-w-full relative shrink-0 w-[min-content] mt-auto">
                <div className="flex flex-col font-['Satoshi',sans-serif] font-medium justify-end leading-[0] not-italic text-[100px] text-white transition-all duration-500 group-hover:-translate-y-[60px]">
                  <p className="leading-[normal] whitespace-pre-wrap">{stat.value}</p>
                </div>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <div className="min-h-0 overflow-hidden">
                    <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic text-[18px] text-white tracking-[-0.45px] mt-[20px] whitespace-pre-wrap opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {stat.description}
                    </p>
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
      <SectionContainer>
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div ref={trackRef} className="relative h-[520vh] w-full">
            <div className="sticky top-0 z-[5] flex h-screen w-full flex-col overflow-hidden bg-black">
              <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
                <div className="relative h-[60px] w-[425px] shrink-0 rounded-[99px]">
                  <div
                    aria-hidden="true"
                    className="absolute bg-[#bc312e] blur-[15px] h-[94px] left-[-51.5px] opacity-25 rounded-[99px] top-[-15px] w-[498px]"
                  />
                  <p className="absolute font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[60px] text-white top-0 tracking-[-0.45px] text-center">{`World-class work `}</p>
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
    <div id="our-journey" className="relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className="content-stretch flex flex-col gap-[60px] items-start relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[430px]">
          <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap">How we got here</p>
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
                    <p className="font-['Satoshi',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.23px]">{milestone.year}</p>
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
                  <p className="font-['Satoshi',sans-serif] font-normal relative shrink-0 text-[14px] tracking-[-0.23px] sm:w-[203px]">{milestone.description}</p>
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
      <SectionContainer className="content-stretch flex flex-col gap-[60px] items-start relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px]">What Our Partners Say</p>
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
        } content-stretch flex gap-[16px] px-[60px] py-[30px]`}
      >
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-['Satoshi',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap pr-[8px]">
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
                className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic pt-[16px] text-[18px] text-[rgba(255,255,255,0.75)] tracking-[-0.45px] w-full whitespace-pre-wrap"
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
      <SectionContainer className="content-stretch flex flex-col gap-[40px] items-start relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px]">
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
    <div id="contact" className="bg-white relative shrink-0 w-full scroll-mt-0">
      <SectionContainer className="content-stretch flex flex-col gap-[150px] items-start pb-[24px] pt-[60px] relative w-full">
        <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[60px] tracking-[-0.45px] w-full whitespace-pre-wrap">
                <p className="mb-0">
                  <span className="leading-[60px] text-[#bc312e]">{`Let's talk. `}</span>
                  <span className="leading-[60px] text-[#17181d]">{`We'd love `}</span>
                </p>
                <p className="leading-[60px] text-[#17181d]">to work with you!</p>
              </div>
            </div>
            <LiquidMetalButton label="Contact Us" onClick={() => window.open("mailto:vijay@brewery.agency", "_self")} />
          </div>
          <div className="content-stretch flex flex-col gap-[24px] items-start leading-[normal] not-italic relative shrink-0 text-black tracking-[-0.45px]">
            <p className="font-['Satoshi',sans-serif] font-medium min-w-full relative shrink-0 text-[24px] w-[min-content] whitespace-pre-wrap">Locations</p>
            <div className="content-stretch flex flex-col font-['Satoshi',sans-serif] font-normal gap-[12px] items-start relative shrink-0 text-[18px]">
              <p className="relative shrink-0">New York, USA</p>
              <p className="relative shrink-0">Toronto, Canada</p>
              <p className="relative shrink-0">Delhi, India</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex font-['Satoshi',sans-serif] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[#17181d] text-[18px] tracking-[-0.45px] w-full">
          <p className="relative shrink-0">@2025 Brewery Agency</p>
          <div className="content-stretch flex gap-[24px] items-start relative shrink-0 cursor-pointer">
            <p className="relative shrink-0 hover:text-[#bc312e] transition-colors duration-300">LinkedIn</p>
            <p className="relative shrink-0 hover:text-[#bc312e] transition-colors duration-300">Email</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative size-full overflow-x-clip bg-black">
      <SideNav />
      <HeroPlasmaLayer />
      <div className="content-stretch relative z-[2] flex flex-col items-start gap-[120px]">
        <div className="flex w-full flex-col gap-0">
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
