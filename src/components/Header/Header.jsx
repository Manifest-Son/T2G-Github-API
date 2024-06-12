import "./Header.css";

const Header = () => {
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
          placeholder="enter a username"
          className="search-input"
        />
        <button className="submit-btn">search</button>
      </div>
    </div>
  );
};

export default Header;
