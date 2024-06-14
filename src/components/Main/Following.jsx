import johnImg from "../../assets/john.jpg";
import { MdInsertLink } from "react-icons/md";
import "./Main.css";

const Following = () => {
  return (
    <div className="following-container">
      <h1>Following (num)</h1>
      <div className="following-wrapper">
        <img src={johnImg} alt="" className="following-img" />
        <h2>Name-of-follower</h2>
        <button className="github-user">
          <a href="">
            {" "}
            <MdInsertLink /> view link{" "}
          </a>
        </button>
      </div>
    </div>
  );
};

export default Following;
