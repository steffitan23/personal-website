import "./nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <hr />
      <ul className="navbar">
        <li>
          <Link to="/about" className="navitem" onClick={props.aboutClick}>
            about
          </Link>
        </li>
        <li>
          <Link to="/work" className="navitem" onClick={props.workClick}>
            work
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navitem" onClick={props.contactClick}>
            contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
