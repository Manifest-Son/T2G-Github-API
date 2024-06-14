import { FaCodeFork, FaStar } from "react-icons/fa6";

const Repositories = () => {
  return (
    <div className="repository-container">
      <h1>Repositories (number)</h1>
      <div className="repository-wrapper">
        <div className="repos">
          <h2>Name-of-Repository</h2>
          <p>Description</p>
          <div className="repos-bottom">
            <p>
              <FaCodeFork />
              forks (num){" "}
            </p>
            <p>
              <FaStar />
              stars (num)
            </p>
          </div>
        </div>
        <div className="repos">
          <h2>Name-of-Repository</h2>
          <p>Description</p>
          <div className="repos-bottom">
            <p>
              <FaCodeFork />
              forks (num){" "}
            </p>
            <p>
              <FaStar />
              stars (num)
            </p>
          </div>
        </div>
        <div className="repos">
          <h2>Name-of-Repository</h2>
          <p>Description</p>
          <div className="repos-bottom">
            <p>
              <FaCodeFork />
              forks (num){" "}
            </p>
            <p>
              <FaStar />
              stars (num)
            </p>
          </div>
        </div>
        <div className="repos">
          <h2>Name-of-Repository</h2>
          <p>Description</p>
          <div className="repos-bottom">
            <p>
              <FaCodeFork />
              forks (num){" "}
            </p>
            <p>
              <FaStar />
              stars (num)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
