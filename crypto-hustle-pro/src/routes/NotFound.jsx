import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>There's nothing here!</p>
      <Link style={{ color: "white" }} to="/">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
