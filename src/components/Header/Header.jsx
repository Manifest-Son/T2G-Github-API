import "./Header.css";
import { useState } from "react";
import useStore from "../../store/gitprofile";

const Header = () => {
  const newUser = useStore((state) => state.useStore);

  const [user, setUser] = useState("github");
  const handleUserInput = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };
  const handleUserSearch = (e) => {
    e.preventDefault();
    newUser(user);
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
