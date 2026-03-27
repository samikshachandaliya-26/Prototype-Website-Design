import { useEffect } from "react";
import Lenis from "lenis";

const defaultEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

type Props = { children: React.ReactNode };

/**
 * Inertial smooth scrolling (wheel + touch) and eased hash navigation.
 * Skipped when the user prefers reduced motion.
 */
export function LenisProvider({ children }: Props) {
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: {
        duration: 1.05,
        easing: defaultEasing,
      },
      lerp: 0.065,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      syncTouch: true,
      allowNestedScroll: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
