import "./Main.css";
import useStore from "../../store/store";
import { FaCodeFork, FaStar } from "react-icons/fa6";

const Repositories = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const repoList = useStore((state) => state.repoList);

  if (loading) {
    return <p>Loading repositories....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="repository-container">
      <h1>Repositories (number)</h1>
      <div className="repository-wrapper">
        {repoList.map((repo) => (
          <div className="repo" id={repo.repo_id} key={repo.repo_id}>
            <div className="repos">
              <h2>{repo.repo_name}</h2>
              <p>{repo.repo_description}</p>
            </div>
            <div className="repos-bottom">
              <p>
                <FaCodeFork /> {repo.forks} forks
              </p>
              <p>
                <FaStar /> {repo.stars} stars
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
