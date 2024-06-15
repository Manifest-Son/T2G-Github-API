import johnImg from "../../assets/john.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";
// import useUserProfile from "../../store/gitprofile";
import "./Main.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={johnImg} alt="A guys profile" className="profile-img" />
      <h1>Name</h1>
      <p>Username</p>
      <p>Description</p>
      <button className="profile-link">
        <FaExternalLinkAlt /> View on GitHub
      </button>
      <p>
        <IoLocationOutline /> Location
      </p>
      <p>
        <FaBuilding /> Company
      </p>
      <p>
        <FaBook /> Repositories
      </p>
      <p>
        <IoIosPeople /> num following
      </p>
      <p>
        <IoIosPeople /> num followers
      </p>
    </div>
  );
};

export default Profile;
