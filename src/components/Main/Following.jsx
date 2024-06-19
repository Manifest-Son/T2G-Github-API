import { MdInsertLink } from "react-icons/md";
import "./Main.css";
import useStore from "../../store/store";

const Following = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const followingList = useStore((state) => state.followingList);

  if (loading) {
    return <p>Loading repositories....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="following-container">
      {followingList.map((following) => (
        <div className="follower" key={following.following_id}>
          <div className="following-wrapper">
            <img
              src={following.following_avatar}
              alt="image of the follower"
              className="following-img"
            />
          </div>
          <div className="follower-name">{following.following_name}</div>
          <button className="github-user">
            <a href={following.following_url}>
              <MdInsertLink /> View {following.following_name}
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Following;
