"use client";

import { useTerminalStore } from "../store/useTerminalStore";
import { useWindowManager, WindowType } from "../store/useWindowManager";
import { useEffect, useRef, useState } from "react";
import TabOption from "./TabOption";

export default function TerminalCard() {
  const { isOpen, setIsOpen, history, setHistory } = useTerminalStore();
  const { bringToFront, getZIndex } = useWindowManager();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      bringToFront(WindowType.TERMINAL);
    }
  }, [isOpen, bringToFront]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = input.trim();
    if (message) {
      setHistory(`$ edilbertopajunar: ${message}`);
      setInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/20"
      style={{ zIndex: getZIndex(WindowType.TERMINAL) }}
      onClick={() => bringToFront(WindowType.TERMINAL)}
    >
      <div
        className="w-full max-w-3xl h-[500px] flex flex-col bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <TabOption onClose={() => setIsOpen(false)} title="Terminal" />

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm text-green-400"
        >
          {history.map((line, i) => (
            <div key={i} className="mb-1">
              {line}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-mono">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 font-mono outline-none"
              placeholder="Enter command..."
              autoFocus
            />
          </div>
        </form>
      </div>
    </div>
  );
}
