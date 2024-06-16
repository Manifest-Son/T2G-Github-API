import { create } from "zustand";

const Store = (set) => ({
  username: "",
  users: {},
  loading: false,
  error: false,

  newUser: (username) => set({ username }),

  useProfile: async (username) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok == true) {
        const data = await response.json();
        set({ users: data });
      } else {
        console.error("An error occured");
      }
    } catch {
      console.log("An error has occured. Try refreshing your browser");
    }
  },

  useRepo: async (username) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok == true) {
        const data = await response.json();
        set({ users: data });
      } else {
        console.error("An error occured");
      }
    } catch {
      console.log("An error has occured. Try refreshing your browser");
    }
  },

  useFollowers: async (username) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok == true) {
        const data = await response.json();
        set({ users: data });
      } else {
        console.error("An error occured");
      }
    } catch {
      console.log("An error has occured. Try refreshing your browser");
    }
  },

  useFollowing: async (username) => {
    set({ loading: true });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok == true) {
        const data = await response.json();
        set({ users: data });
      } else {
        console.error("An error occured");
      }
    } catch {
      console.log("An error has occured. Try refreshing your browser");
    }
  },
});

const useStore = create(Store);
export default useStore;
