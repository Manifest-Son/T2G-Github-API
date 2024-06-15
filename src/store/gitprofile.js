import { create } from "zustand";

const userProfile = (set) => ({
  username: "",
  userImg: "",
  profileName: "",
  userDescription: "",
  userLink: "",
  userLocation: "",
  userCompany: "",
  userRepositories: "",
  userFollowers: "",
  userFollowing: "",
  loading: false,

  useuserName: (username) => set({ username }),

  useProfile: async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    set({ loading: true });
    try {
      if (data.login) {
        set({
          userImg: data.avatar_url,
          profileName: data.name,
          username: data.login,
          userDescription: data.bio,
          userLink: data.html_url,
          userLocation: data.location,
          userCompany: data.company,
          userRepositories: data.public_repos,
          userFollowers: data.followers,
          userFollowing: data.following,
        });
      } else {
        set({ loading: false });
        console.log("There has been an error");
      }
    } catch {
      console.log("An error has occured. Try refreshing your browser");
      // }
    }
  },
});

const useUserProfile = create(userProfile);
export default useUserProfile;
