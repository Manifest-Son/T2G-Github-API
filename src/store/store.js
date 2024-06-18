import { create } from "zustand";

const Store = (set) => ({
  user: "github",
  setUser: (username) => set({ user: username }),
});

const useStore = create(Store);
export default useStore;
