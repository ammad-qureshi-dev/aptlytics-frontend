"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { User } from "./Types";

interface UserStore {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  rehydrated: boolean;
  setRehydrated: (v: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: undefined,
      rehydrated: false,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
      setRehydrated: (v) => set({ rehydrated: v }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ user: state.user }),
      onRehydrateStorage: () => (state) => {
        // mark store as rehydrated once done
        if (state) state.setRehydrated(true);
      },
    }
  )
);
