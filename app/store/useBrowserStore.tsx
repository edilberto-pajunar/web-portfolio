import { create } from "zustand";

interface BrowserStoreState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedProfile: string | null;
  setSelectedProfile: (profile: string | null) => void;
}

export const useBrowserStore = create<BrowserStoreState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  selectedProfile: null,
  setSelectedProfile: (profile: string | null) =>
    set({ selectedProfile: profile }),
}));
