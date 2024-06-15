import "./Header.css";
import { useState } from "react";
import useUserProfile from "../../store/gitprofile";

const Header = () => {
  const useuserName = useUserProfile((state) => state.useuserName);

  const [user, setUser] = useState("github");
  const handleUserInput = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  const handleUserSearch = (e) => {
    e.preventDefault();
    useuserName(user);
  };

  return (
    <div className="header-container">
      <h1 className="header-txt">github finder</h1>
      <h3>
        By:{" "}
        <a href="search" className="header-link">
          Lennox Githinji
        </a>
      </h3>
      <div className="search-wrap">
        <input
          type="text"
          name="search-input"
          className="search-input"
          placeholder="enter to search a user"
          onChange={handleUserInput}
        />
        <button className="submit-btn" onClick={handleUserSearch}>
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
