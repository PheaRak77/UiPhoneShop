import { Link } from "react-router-dom";
import { IconArrowLeft } from "../components/Icons";

export default function NotFound() {
  return (
    <div className="container page notfound">
      <h1 className="notfound-code">404</h1>
      <h2>This page wandered off</h2>
      <p>The link you followed doesn't exist — but our phone deals very much do.</p>
      <Link to="/" className="btn btn-primary">
        <IconArrowLeft size={16} /> Back to home
      </Link>
    </div>
  );
}
