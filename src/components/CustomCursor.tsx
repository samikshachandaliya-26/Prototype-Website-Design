import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a,button,[role='button'],[data-cursor='interactive'],.cursor-pointer,summary,label[for],input[type='checkbox'],input[type='radio'],select";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [tapTick, setTapTick] = useState(0);
  const interactiveRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canUseCursor = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canUseCursor) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onPointerMove = (e: PointerEvent) => {
      const cursor = document.getElementById("custom-cursor-root");
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const nextInteractive = !!target?.closest(INTERACTIVE_SELECTOR);
      if (interactiveRef.current !== nextInteractive) {
        interactiveRef.current = nextInteractive;
        setInteractive(nextInteractive);
      }
    };

    const onPointerOut = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest(INTERACTIVE_SELECTOR)) return;
      const related = e.relatedTarget as Element | null;
      const stillInsideInteractive = !!related?.closest(INTERACTIVE_SELECTOR);
      if (!stillInsideInteractive && interactiveRef.current) {
        interactiveRef.current = false;
        setInteractive(false);
      }
    };

    const onPointerDown = () => {
      if (interactiveRef.current) {
        setTapTick((v) => v + 1);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      id="custom-cursor-root"
      className={`custom-cursor${interactive ? " is-interactive" : ""}`}
      aria-hidden="true"
    >
      <span className="custom-cursor-dot" />
      <span className="custom-cursor-ring" />
      <span key={tapTick} className="custom-cursor-tap" />
    </div>
  );
}

