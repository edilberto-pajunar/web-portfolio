"use client";

import Image from "next/image";
import { useTerminalStore } from "../store/useTerminalStore";
import { useBrowserStore } from "../store/useBrowserStore";
import { usePhotosStore } from "../store/usePhotosStore";
import { useWindowManager } from "../store/useWindowManager";

export default function NavBar() {
  const { setIsOpen } = useTerminalStore();
  const { setIsOpen: setBrowserOpen } = useBrowserStore();
  const { setIsOpen: setPhotosOpen } = usePhotosStore();
  const { windowOrder } = useWindowManager();

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300"
      style={{ zIndex: windowOrder.length === 0 ? 50 : 30 }}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-white/20 dark:bg-black/20 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-white/10 shadow-2xl">
        <button onClick={() => setIsOpen(true)} className="focus:outline-none">
          <Image
            src="/icons/coding.svg"
            alt="Terminal"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform duration-200"
          />
        </button>
        <button
          onClick={() => setBrowserOpen(true)}
          className="focus:outline-none"
        >
          <Image
            src="/icons/brave.svg"
            alt="Brave"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform duration-200"
          />
        </button>
        <button
          onClick={() => setPhotosOpen(true)}
          className="focus:outline-none"
        >
          <Image
            src="/icons/photos.svg"
            alt="Photos"
            width={48}
            height={48}
            className="hover:scale-110 transition-transform duration-200"
          />
        </button>
      </div>
    </div>
  );
}
