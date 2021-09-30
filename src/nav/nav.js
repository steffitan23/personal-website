import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <hr />
      <ul className="navbar">
        <li>
          <Link to="/about" className="navitem">
            about
          </Link>
        </li>
        <li>
          <Link to="/work" className="navitem">
            work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navitem">
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
