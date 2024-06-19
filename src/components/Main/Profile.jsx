import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Main.css";
import { useEffect } from "react";
import useStore from "../../store/store";

const Profile = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const { username } = useStore();
  const [profile, setProfile] = useStore();

  useEffect(() => {
    const useUserProfile = async (username) => {
      loading(true);
      error(false);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        const data = await response.json();
        setProfile(data);
      } catch {
        error(true), error(error.message);
        console.error("Error fetching profile:", error);
      } finally {
        loading(false);
      }
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useUserProfile(username);
  });

  if (loading == true) {
    return <div className="loading-message">Loading ......</div>;
  }
  if (error == true) {
    return <div className="error-message">An error occured ......</div>;
  }

  return (
    <div className="profile-container">
      <img
        src={profile.avatar_url}
        alt="A guys profile"
        className="profile-img"
      />
      <h1>{profile.name}</h1>
      <p>{profile.login}</p>
      <p>{profile.bio}</p>
      <button className={profile.url}>
        <FaExternalLinkAlt /> View on GitHub
      </button>
      <p>
        <IoLocationOutline /> {profile.location}
      </p>
      <p>
        <FaBuilding /> {profile.company}
      </p>
      <p>
        <FaBook /> {profile.public_repos}
      </p>
      <p>
        <IoIosPeople /> {profile.following} following
      </p>
      <p>
        <IoIosPeople /> {profile.followers} followers
      </p>
    </div>
  );
};
export default Profile;
