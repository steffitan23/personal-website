import "./work.css";

function Work() {
  return (
    <div className="work-wrapper">
      <h1>Work Experience</h1>
      <div className="work-container">
        <div className="work-item">
          <div className="exp work-heading">
            <b>ClimateScience Developer Team </b>
            <br />
            <em>Jun. 2021 - Present</em> <br />
            Full Stack Developer
          </div>
          <div className="work-desc">
            <ul>
              <li>
                Used HTML, CSS, SCSS, Typescript, and Hugo to create responsive
                web pages for press kits and programs
              </li>
              <li>
                Utilised Angular, Typescript, Firebase to create a serverless
                CMS with authentication for the Climate Science blog
              </li>
              <li>Rebuilt website using React with Next.js</li>
              <li>Designed pages/components with Storybook, Figma</li>
            </ul>
          </div>
        </div>
        <div className="work-item">
          <div className="exp work-heading">
            <b>ClimateScience Art Team </b>
            <br />
            <em>Nov. 2019 - Jun. 2021</em>
            <br /> Head of Illustration
          </div>
          <div className="work-desc">
            <ul>
              <li>
                Created 50+ science illustrations/infographics, illustrated for
                childrens’ book series, created corporate style guide, created
                lesson plans used in partner schools
              </li>
              <li>
                Grew art team from 2 to 20, managing 3 teams to produce courses
                to train the general public and 10k UK government staff
              </li>
            </ul>
          </div>
        </div>
        <div className="work-item">
          <div className="exp work-heading">
            <b>British Ecological Society</b>
            <br />
            <em>June 2021 - July 2021 </em>
            <br />
            Graphic Designer
          </div>
          <div className="work-desc">
            <p>
              Commissioned to create 6 A6 art pieces and leaflets for the
              Edinburgh Science Festival, featured in an exhibition hosted by
              the British Ecological Society
            </p>
          </div>
        </div>
      </div>
      <h1 id="proj-heading">Projects</h1>
      <div className="work-container">
        <div className="work-item">
          <div className="proj work-heading">
            <b>
              Boston Hacks Hackathon
              <br />
              Warn (Best Mental Health Hack)
            </b>
            <br />
            October 2021
          </div>
          <div className="work-desc">
            <p>
              Built chrome extension with Javascript that filters out
              potentially triggering images, audio, and video, using AssemblyAI
              and Amazon Rekognition APIs
            </p>
          </div>
        </div>
        <div className="work-item">
          <div className="proj work-heading">
            <b>
              HackOn Hackathon <br />
              Project DandyLion
            </b>
            <br />
            June 2021
            <br />
          </div>
          <div className="work-desc">
            <p>
              Created mental wellness chat website with Flask, SQLite3, React,
              Node.js, Auth0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
