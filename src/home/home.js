import "./home.css";
import Nav from "../nav/nav";
import About from "../about/about";
import Contact from "../contact/contact";
import Work from "../work/work";
import { CSSTransition } from "react-transition-group";
import Content from "../content";
import { useState } from "react";

function Home() {
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showContact, setShowContact] = useState(false);

  function aboutClick() {
    setShowContact(false);
    setShowWork(false);
    setShowAbout(!showAbout);
  }

  function contactClick() {
    setShowAbout(false);
    setShowWork(false);
    setShowContact(!showContact);
  }

  function workClick() {
    setShowAbout(false);
    setShowContact(false);
    setShowWork(!showWork);
  }

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
      <div className="heading2 intro slide-up">
        i’m a <b>web developer</b> who loves pretty things, linguistics, and
        everything UI.
      </div>
      <Nav
        aboutClick={aboutClick}
        workClick={workClick}
        contactClick={contactClick}
      />
      <CSSTransition
        in={showAbout}
        timeout={500}
        classNames="tab"
        unmountOnExit
      >
        <About />
      </CSSTransition>

      <CSSTransition in={showWork} timeout={500} classNames="tab" unmountOnExit>
        <Work />
      </CSSTransition>

      <CSSTransition
        in={showContact}
        timeout={500}
        classNames="tab"
        unmountOnExit
      >
        <Contact />
      </CSSTransition>
    </div>
  );
}

export default Home;
