import { create } from "zustand";

interface BrowserStoreState {
  isOpen: boolean;
  activeTab: string | null;
  setActiveTab: (tab: string | null) => void;
  setIsOpen: (isOpen: boolean) => void;
  selectedProfile: string | null;
  setSelectedProfile: (profile: string | null) => void;
  tabs: string[];
  addTab: (tab: string) => void;
  closeTab: (tab: string) => void;
}

export const useBrowserStore = create<BrowserStoreState>((set, get) => ({
  isOpen: false,
  activeTab: null,
  setActiveTab: (tab: string | null) => set({ activeTab: tab }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
  selectedProfile: null,
  setSelectedProfile: (profile: string | null) => {
    set({ selectedProfile: profile });
  },

  tabs: [],
  addTab: (tab: string) => {
    const { tabs } = get();
    if (tabs.includes(tab)) {
      set({ activeTab: tab, selectedProfile: tab });
      return;
    }
    set((state) => ({
      tabs: [...state.tabs, tab],
      activeTab: tab,
      selectedProfile: tab,
    }));
  },
  closeTab: (tab: string) => {
    const { tabs, activeTab } = get();
    const newTabs = tabs.filter((t) => t !== tab);

    let newActiveTab = activeTab;
    let newSelectedProfile = null;

    if (activeTab === tab) {
      if (newTabs.length > 0) {
        const currentIndex = tabs.indexOf(tab);
        newActiveTab =
          newTabs[Math.max(0, Math.min(currentIndex, newTabs.length - 1))];
        newSelectedProfile = newActiveTab;
      } else {
        newActiveTab = null;
        newSelectedProfile = null;
      }
    }

    set({
      tabs: newTabs,
      activeTab: newActiveTab,
      selectedProfile: newSelectedProfile,
    });
  },
}));
