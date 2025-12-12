import { create } from "zustand";

interface TerminalStoreState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  history: string[];
  setHistory: (message: string) => void;
}

const commands = [
  "- clear - Clear the terminal",
  "- help - Need a lifeline? See all the tricks I can do!",
  "- profile - Peek behind the curtain and meet the genius (that's me 😎)",
  "- projects - Witness my masterpieces in action 🚀",
  "- skills - Check out the superpowers I bring to the table 💪",
  "- contact - Want to say hi or collaborate? Let’s chat! ✉️",
];

export const useTerminalStore = create<TerminalStoreState>((set, get) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {
    if (isOpen === false) {
      set({
        history: [
          "Welcome to my Portfolio!",
          "Type 'help' for available commands",
        ],
      });
    }

    set({ isOpen });
  },
  history: ["Welcome to my Portfolio!", "Type 'help' for available commands"],
  setHistory: (message: string) => {
    const { history } = get();
    if (message.toLowerCase().includes("help")) {
      set({ history: [...history, "Available commands:", ...commands] });
    } else if (message.toLowerCase().includes("clear")) {
      set({
        history: [
          "Welcome to my Portfolio!",
          "Type 'help' for available commands",
        ],
      });
    } else {
      set({ history: [...history, message] });
    }
  },
}));
