import { create } from "zustand";

const Store = (set) => ({
  username: "github",
  names: "",
  gitImg: "",
  userUrl: "",
  location: "",
  company: "",
  followers: "",
  following: "",
  userBio: "",
  repos: "",

  loading: null,
  error: null,

  setUser: (username) => set({ username }),

  useUserProfile: async (username) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response) {
        const error = new error("Failed to fetch data");
        set({ loading: false, error: error.message });
        console.error(
          "There has been an error in fetching the data.",
          error.message,
        );
      }
      const data = await response.json();
      set({
        name: data.name,
        gitImg: data.avatar_url,
        userUrl: data.url,
        location: data.location,
        company: data.company,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        userBio: data.bio,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
      console.error("Error fetching profile:", error);
    }
  },
});

const useStore = create(Store);
export default useStore;
