// Estado global

import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type SheetContent = "cart" | "search" | null;

export interface GlobalState {
  isSheetOpen: boolean;
  sheetContent: SheetContent;
  activeNavMobile: boolean;

  //TODO: NavbarMobile

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
  setActiveNavMobile: (active: boolean) => void;
}

const storeApi: StateCreator<GlobalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,
  activeNavMobile: false,

  openSheet: content => set({ isSheetOpen: true, sheetContent: content }),
  closeSheet: () => set({ isSheetOpen: false, sheetContent: null }),
  setActiveNavMobile: active => set({ activeNavMobile: active }),
});


export const useGlobalStore = create<GlobalState>()(
    devtools(storeApi)
);