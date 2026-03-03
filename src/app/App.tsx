import { useState, useRef, useEffect } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
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

function Header() {
  return (
    <div className="backdrop-blur-[30px] content-stretch flex items-center justify-between px-[90px] py-[24px] shrink-0 sticky top-0 w-full z-50">
      <div className="h-[50px] relative shrink-0 w-[147px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage120} />
      </div>
      <InteractiveHoverButton className="w-[170px]" />
    </div>
  );
}

function NavButton({ label }: { label: string }) {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.15)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.25)] hover:scale-105">
      <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.23px]">{label}</p>
    </div>
  );
}

function SideNav() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[21px] top-[25px] w-[95px] z-10">
      <NavButton label="Intro" />
      <NavButton label="Clients" />
      <NavButton label="Services" />
      <NavButton label="Industries" />
      <NavButton label="Our Work" />
      <NavButton label="Our Journey" />
      <NavButton label="Testimonials" />
      <NavButton label="FAQs" />
      <NavButton label="Contact" />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-start relative shrink-0 w-full">
      <div className="-translate-x-1/2 absolute h-[731px] left-1/2 top-0 w-[1280px]">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <Header />
      <div className="h-[460px] relative shrink-0 w-full">
        <div className="absolute content-stretch flex flex-col font-['Cormorant_Garamond',sans-serif] font-medium items-end leading-[normal] left-[210px] not-italic pb-[10px] text-[80px] text-white top-[230px] tracking-[-0.45px] w-[968px]">
          <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`We design products `}</p>
          <p className="relative shrink-0 text-center">people actually want to use</p>
        </div>
        <p className="absolute font-['Satoshi',sans-serif] font-normal leading-[normal] left-[793px] not-italic text-[14px] text-white top-[100px] tracking-[-0.23px] w-[300px] whitespace-pre-wrap">Since 2020 we've helped startups and enterprises design and build high-performance digital products that drive growth and user adoption</p>
        <SideNav />
      </div>
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center justify-center px-[90px] py-[60px] relative w-full">
          <div className="content-stretch flex flex-col h-[160px] items-start relative shrink-0 w-full">
            <div className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#17181d] text-[60px] tracking-[-0.45px] w-[554px] whitespace-pre-wrap">
              <p className="mb-0">{`They trusted us `}</p>
              <p>with their biggest bets</p>
            </div>
          </div>
          <p className="-translate-x-full absolute font-['Satoshi',sans-serif] font-normal leading-[normal] left-[1189px] not-italic text-[#17181d] text-[18px] text-right top-[170px] tracking-[-0.45px] w-[346px] whitespace-pre-wrap">From Fortune 500s to funded startups, we help teams ship products that users love</p>

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
                <img alt="" className="absolute h-[333.33%] left-[-13.4%] max-w-none top-[-116.67%] w-[123.71%]" src={imgFossilGroupLogoWine} />
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
                  <path d={svgPaths.p19b2bd00} fill="black" />
                  <path d={svgPaths.p3e5bbff2} fill="black" />
                  <path d={svgPaths.p282f8280} fill="black" />
                  <path d={svgPaths.p15c8db30} fill="black" />
                  <path d={svgPaths.p1e7c3c80} fill="black" />
                  <path d={svgPaths.p30b32200} fill="black" />
                  <path d={svgPaths.p1fbdbdc0} fill="black" />
                  <path d={svgPaths.pa7f9cc0} fill="black" />
                  <path d={svgPaths.pee90500} fill="black" />
                  <path d={svgPaths.p2fcec900} fill="black" />
                  <path d={svgPaths.p34b57500} fill="black" />
                  <path d={svgPaths.p3caaac00} fill="black" />
                  <path d={svgPaths.p271d7b80} fill="black" />
                  <path d={svgPaths.p37e38b00} fill="black" />
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
                <img alt="" className="absolute h-[216.41%] left-0 max-w-none top-[-62.26%] w-full" src={imgImage122} />
              </div>
            </div>
            <div className="col-3 h-[60px] justify-self-center relative row-2 self-center shrink-0 w-[92px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[153.85%] left-0 max-w-none top-[-15.38%] w-full" src={img482Df7C8B90645369C33B8445Ce39Aa31} />
              </div>
            </div>
            <div className="col-4 h-[42px] justify-self-center relative row-2 self-center shrink-0 w-[81px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3Copy} />
            </div>
            <div className="col-5 h-[60px] justify-self-center relative row-2 self-center shrink-0 w-[107px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHennessyLogoPngImageHd} />
            </div>

            <div className="col-1 h-[30px] justify-self-center relative row-3 self-center shrink-0 w-[175px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[285.71%] left-[-17.68%] max-w-none top-[-89.29%] w-[151.09%]" src={imgIvukLogo30011} />
              </div>
            </div>
            <div className="col-2 h-[60px] justify-self-center relative row-3 self-center shrink-0 w-[134px] transition-all duration-300 hover:scale-110 cursor-pointer">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgColourLogoOnWhiteV11} />
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
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <div className="content-stretch flex gap-[120px] items-start relative shrink-0 w-full">
      <p className="font-['Satoshi',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[28px] text-white w-[109px] whitespace-pre-wrap">{title}</p>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[300px]">
        <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.75)] tracking-[-0.45px] w-[min-content] whitespace-pre-wrap">{description}</p>
        <div className="h-0 relative shrink-0 w-[120px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 1">
              <line stroke="#BC312E" strokeLinecap="round" x1="0.5" x2="119.5" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Satoshi',sans-serif] font-normal gap-[12px] items-start leading-[0] not-italic opacity-75 relative shrink-0 text-[18px] text-white tracking-[-0.45px] whitespace-nowrap">
        {items.map((item, idx) => (
          <ul key={idx} className="block relative shrink-0">
            <li className="list-disc ms-[27px] whitespace-pre-wrap">
              <span className="leading-[normal]">{item}</span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[90px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic relative shrink-0 text-white tracking-[-0.45px] w-full whitespace-pre-wrap">
            <p className="font-['Cormorant_Garamond',sans-serif] font-medium min-w-full relative shrink-0 text-[60px] w-[min-content]">How we help you win</p>
            <p className="font-['Satoshi',sans-serif] font-normal relative shrink-0 text-[18px] w-[624px]">Our services include end-to-end product design and development spanning strategy, design, and engineering to build scalable digital products and experiences</p>
          </div>
          <ServiceItem
            title="Strategy"
            description="We identify friction across your user journey through research, audits, and real-user validation, delivering actionable insights and optimization roadmaps that improve usability, conversion, and retention."
            items={["UX Consulting", "Usability Testing", "User Research", "Experience Strategy", "Product Discovery"]}
          />
          <ServiceItem
            title="Design"
            description="We craft intuitive interfaces and cohesive brand systems, combining interaction design, visual identity, and prototyping to create premium, consistent digital experiences users instantly understand and trust."
            items={["Interaction Design", "UI/UX Design", "Design Systems", "Prototyping", "Branding"]}
          />
          <ServiceItem
            title="Build"
            description="We design, engineer, and scale high-performance digital products across web and mobile platforms, integrating intelligent AI-driven workflows and automation systems to enhance efficiency, decision-making, and long-term product growth."
            items={["Product Engineering", "App Development", "Web Platforms", "System Integrations", "AI Workflows"]}
          />
        </div>
      </div>
    </div>
  );
}

function IndustriesSection() {
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
    <section className="w-full bg-black py-[100px]">

      {/* Heading */}
      <div className="px-[90px] mb-[60px]">
        <h2 className="text-[60px] text-white font-['Cormorant_Garamond'] leading-tight">
          8+ industries. 50+ products.
          <br />
          We understand your user's problems
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-[80px] px-[90px] overflow-x-auto overflow-y-hidden scrollbar-thin">

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
    </section>
  );
}

function ImpactSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start px-[90px] relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap">Impact at scale</p>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          {[
            { label: "USERS OF OUR DESIGN", value: "3M+", description: "More than 3 million users interact with products we've designed every month" },
            { label: "CLIENT REVENUE", value: "$5M", description: "We partner with forward-thinking enterprises and startups and helped them to raise more than" },
            { label: "YEARS OF PRACTICE", value: "8", description: "8 years of crafting exceptional digital experiences across industries" },
            { label: "CLIENTS WORKED WITH", value: "50+", description: "From Fortune 500 companies to innovative startups across 8+ industries" }
          ].map((stat, idx) => (
            <div key={idx} className="content-stretch flex flex-col h-[428px] items-start justify-between max-w-[350px] min-w-[250px] px-[20px] py-[24px] relative shrink-0 w-[250px] group cursor-pointer overflow-hidden">
              <div aria-hidden="true" className="absolute border-[#bc312e] border-l border-solid inset-0 pointer-events-none group-hover:border-l-2 transition-all duration-300" />
              <p className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.45px]">{stat.label}</p>
              <div className="flex flex-col min-w-full relative shrink-0 w-[min-content]">
                <div className="flex flex-col font-['Satoshi',sans-serif] font-medium justify-end leading-[0] not-italic text-[100px] text-white transition-all duration-500 group-hover:-translate-y-[60px]">
                  <p className="leading-[normal] whitespace-pre-wrap">{stat.value}</p>
                </div>
                <div className="font-['Satoshi',sans-serif] font-normal leading-[normal] not-italic text-[18px] text-white tracking-[-0.45px] opacity-0 group-hover:opacity-100 transition-all duration-500 mt-[20px]">
                  <p className="whitespace-pre-wrap">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkSection() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full overflow-x-auto">
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[60px] left-[calc(50%-0.5px)] rounded-[99px] top-[calc(50%+0.5px)] w-[425px] pointer-events-none">
        <div className="absolute bg-[#bc312e] blur-[15px] h-[94px] left-[-51.5px] opacity-25 rounded-[99px] top-[-15px] w-[498px]" />
        <p className="absolute font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] left-[24px] not-italic text-[60px] text-white top-0 tracking-[-0.45px] text-center">{`World-class work `}</p>
      </div>
    </div>
  );
}

function JourneySection() {
  const milestones = [
    { year: "2020", title: "Brewery Established", description: "Founded with a vision to redefine digital experiences through human-centered design" },
    { year: "2021", title: "Kareem Abdul-Jabbar Trophy", description: "UX awards recognition for annual Social Justice Champion award" },
    { year: "2022", title: "Social Impact Campaign - Webby Winner", description: "Associated with the Fossil Group, Inc. Judas & The Black Messiah" },
    { year: "2026", title: "8 Years & Growing", description: "8 years serving 50+ clients across 15+ industries. Still pushing boundaries." }
  ];

  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start px-[90px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-[430px]">
          <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px] w-full whitespace-pre-wrap">How we got here</p>
        </div>
        <div className="h-[692px] relative shrink-0 w-full">
          <div className="-translate-x-1/2 absolute flex h-[692px] items-center justify-center left-[calc(50%-65px)] top-0 w-0">
            <div className="-rotate-90 flex-none">
              <div className="h-0 relative w-[692px]">
                <div className="absolute inset-[-1px_0_0_0]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 692 1">
                    <line opacity="0.5" stroke="white" x2="692" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[60px] items-start left-1/2 top-[83px] w-[706px]">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="content-stretch flex gap-[24px] items-end justify-center relative shrink-0 w-full group">
                <div className="bg-[rgba(118,118,128,0.12)] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[1000px] shrink-0 w-[80px] cursor-pointer transition-all duration-300 group-hover:bg-[rgba(118,118,128,0.25)]">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1000px] group-hover:border-2 transition-all duration-300" />
                  <p className="font-['Satoshi',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.23px]">{milestone.year}</p>
                </div>
                <div className="relative shrink-0 size-[16px] group-hover:scale-150 transition-all duration-300">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" fill="#BC312E" r="8" />
                  </svg>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[212px] whitespace-pre-wrap">
                  <p className="font-['Satoshi',sans-serif] font-bold min-w-full relative shrink-0 text-[18px] tracking-[-0.45px] w-[min-content]">{milestone.title}</p>
                  <p className="font-['Satoshi',sans-serif] font-normal relative shrink-0 text-[14px] tracking-[-0.23px] w-[203px]">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[60px] items-start px-[90px] relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px]">What Our Partners Say</p>
        <StaggerTestimonials />
      </div>
    </div>
  );
}

function FAQItem({ question, isOpen, onClick }: { question: string; isOpen: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="mb-[-0.5px] relative shrink-0 w-full cursor-pointer transition-all duration-300 hover:bg-[rgba(255,255,255,0.05)]">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.25)] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[60px] py-[30px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
          <p className="font-['Satoshi',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-left text-white tracking-[-0.45px] w-full whitespace-pre-wrap">{question}</p>
        </div>
        <div className={`relative shrink-0 size-[24px] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g>
              <path d={svgPaths.p2a6e0600} fill="white" />
            </g>
          </svg>
        </div>
      </div>
    </button>
  );
}

function FAQsSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    "What are your core services?",
    "What makes Brewery different from other agencies?",
    "How is pricing structured?",
    "Do you work with startups?",
    "What is your UX mapping process?"
  ];

  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[40px] items-start px-[90px] relative w-full">
        <p className="font-['Cormorant_Garamond',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[60px] text-white tracking-[-0.45px]">FAQs</p>
        <div className="content-stretch cursor-pointer flex flex-col items-start pb-[0.5px] relative shrink-0 w-full">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq}
              isOpen={openFAQ === idx}
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[150px] items-start pb-[24px] pt-[60px] px-[90px] relative w-full">
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
            <InteractiveHoverButton className="w-[200px]" />
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
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[120px] items-start relative size-full overflow-x-hidden">
      <HeroSection />
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
  );
}
