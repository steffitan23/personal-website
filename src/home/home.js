import "./home.css";
import Nav from "../nav/nav";
import About from "../about/about";
import Contact from "../contact/contact";

function Home() {
  return (
    <div className="main-container">
      <div className="profile-pic-wrapper">
        <img
          src="profile-pic.png"
          className="profile-pic"
          alt="pixel art profile pic"
        ></img>
      </div>
      <div className="heading1 typing">hi! i'm steffi.</div>
      <div className="heading2 intro">
        i’m a <b>web developer/graphic designer</b> who loves pretty things, the
        environment, and everything UI.
      </div>
      <Nav />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
