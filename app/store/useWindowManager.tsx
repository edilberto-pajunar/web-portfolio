import { create } from "zustand";

export enum WindowType {
  TERMINAL = "terminal",
  BROWSER = "browser",
  PHOTOS = "photos",
}

interface WindowManagerStore {
  windowOrder: WindowType[];
  bringToFront: (window: WindowType) => void;
  getZIndex: (window: WindowType) => number;
}

export const useWindowManager = create<WindowManagerStore>((set, get) => ({
  windowOrder: [],
  bringToFront: (window: WindowType) => {
    set((state) => {
      const filtered = state.windowOrder.filter((w) => w !== window);
      return { windowOrder: [...filtered, window] };
    });
  },

  getZIndex: (window: WindowType) => {
    const { windowOrder } = get();
    const index = windowOrder.indexOf(window);
    return index === -1 ? 40 : 40 + index;
  },
}));
