// Estado global

import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type SheetContent = "cart" | "search" | null;

export interface GlobalState {
  isSheetOpen: boolean;
  sheetContent: SheetContent;

  //TODO: NavbarMobile

  openSheet: (content: SheetContent) => void;
  closeSheet: () => void;
}

const storeApi: StateCreator<GlobalState> = (set) => ({
  isSheetOpen: false,
  sheetContent: null,

  openSheet: content => set({ isSheetOpen: true, sheetContent: content }),
  closeSheet: () => set({ isSheetOpen: false, sheetContent: null }),
});


export const useGlobalStore = create<GlobalState>()(
    devtools(storeApi)
);