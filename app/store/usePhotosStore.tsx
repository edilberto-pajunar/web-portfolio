import { create } from "zustand";

interface PhotosStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const usePhotosStore = create<PhotosStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}));
