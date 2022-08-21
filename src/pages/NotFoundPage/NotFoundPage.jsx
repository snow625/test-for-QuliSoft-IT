import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>404 Page not found</h2>
      <Link to={"/"}>GoHome?</Link>
    </div>
  );
};

export default NotFoundPage;
