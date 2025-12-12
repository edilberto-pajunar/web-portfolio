"use client";

import Image from "next/image";
import { useTerminalStore } from "../store/useTerminalStore";
import { useBrowserStore } from "../store/useBrowserStore";

export default function NavBar() {
  const { setIsOpen } = useTerminalStore();
  const { setIsOpen: setBrowserOpen } = useBrowserStore();

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
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
        <Image
          src="/icons/photos.svg"
          alt="Photos"
          width={48}
          height={48}
          className="hover:scale-110 transition-transform duration-200"
        />
      </div>
    </div>
  );
}
