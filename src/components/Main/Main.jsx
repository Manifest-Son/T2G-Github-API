import Profile from "./Profile";
import Repositories from "./Repositories";
import Following from "./Following";
import Followers from "./Followers";
import "./Main.css";
// import { useEffect } from "react";
// import useStore from "../../store/store";

const Main = () => {
  // const {username} = useStore()
  // const useUseProfile = useStore((state) => state.useUserProfile);
  // const useUserRepo = useStore((state) => state.useUserRepo);
  // const useUserFollowers = useStore((state) => state.useUserFollowers);
  // const useUserFollowing = useStore((state) => state.useUserFollowing);

  // useEffect(() => {
  //   if (username) {
  //     useUseProfile(username);
  //     useUserRepo(username);
  //     useUserFollowers(username);
  //     useUserFollowing(username);
  //   }
  // }, [username, useUseProfile, useUserRepo, useUserFollowers, useUserFollowing]);
  return (
    <div className="main-container">
      <div className="left-content">
        <Profile />
      </div>
      <div className="right-content">
        <Repositories />
        <Followers />
        <Following />
      </div>
    </div>
  );
};

export default Main;
