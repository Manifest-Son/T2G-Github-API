// import {useEffect} from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import useStore from "../../store/gitprofile";
import "./Main.css";

const Profile = () => {
  const profile = useStore((state) => state.useProfile);

  // if ( loading == true ){
  //   <div>Loading.....</div>
  // }

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
      <button className={profile.html_url}>
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
