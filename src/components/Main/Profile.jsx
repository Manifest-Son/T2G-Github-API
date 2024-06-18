import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Main.css";
import useStore from "../../store/store";

const Profile = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const {
    username,
    names,
    gitImg,
    userUrl,
    location,
    company,
    followers,
    following,
    userBio,
    repos,
  } = useStore();

  if (loading) {
    return <p>Loading repositories....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="profile-container">
      <img src={gitImg} alt="A guys profile" className="profile-img" />
      <h1>{names}</h1>
      <p>{username}</p>
      <p>{userBio}</p>
      <button className={userUrl}>
        <FaExternalLinkAlt /> View on GitHub
      </button>
      <p>
        <IoLocationOutline /> {location}
      </p>
      <p>
        <FaBuilding /> {company}
      </p>
      <p>
        <FaBook /> {repos}
      </p>
      <p>
        <IoIosPeople /> {following} following
      </p>
      <p>
        <IoIosPeople /> {followers} followers
      </p>
    </div>
  );
};
export default Profile;
