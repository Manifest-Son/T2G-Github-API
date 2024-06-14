import johnImg from "../../assets/john.jpg";
import { MdInsertLink } from "react-icons/md";
import "./Main.css";

const Followers = () => {
  return (
    <div className="follower-container">
      <h1>Followers (num)</h1>
      <div className="follower-wrapper">
        <img src={johnImg} alt="" className="follower-img" />
        <h2>Name-of-follower</h2>
        <button className="github-user">
          <MdInsertLink />
          <a href="">`view user`</a>
        </button>
      </div>
    </div>
  );
};

export default Followers;
