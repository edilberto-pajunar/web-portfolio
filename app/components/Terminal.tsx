"use client";

import { useTerminalStore } from "../store/useTerminalStore";
import { useEffect, useRef, useState } from "react";

export default function TerminalCard() {
  const { isOpen, setIsOpen, history, setHistory } = useTerminalStore();
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-black/20">
      <div className="w-full max-w-3xl h-[500px] flex flex-col bg-gray-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-700">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800/90 rounded-t-lg border-b border-gray-700">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
            />
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
          </div>
          <span className="text-gray-400 text-sm font-medium">Terminal</span>
          <div className="w-12" />
        </div>

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
