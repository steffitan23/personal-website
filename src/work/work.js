import "./work.css";

function Work() {
  return (
    <div className="work-wrapper">
      <h1>Work Experience</h1>
      <div className="work-container">
        <div className="work-item">
          <div className="work-heading">
            <b>ClimateScience Developer Team</b>
            <br /> June 2021 - Present <br /> Full Stack Developer
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
              <li>Rebuilt/migrated website using React with Next.js</li>
              <li>Designed pages/components with Storybook, Figma</li>
            </ul>
          </div>
        </div>
        <div className="work-item">
          <div className="work-heading">
            <b>ClimateScience Art Team</b> November 2019 - June 2021 Head of
            Illustration <br />
          </div>
          <div className="work-desc">
            <p>
              - Created 50+ science illustrations/infographics, illustrated for
              childrens’ book series, created corporate style guide, created
              lesson plans used in partner schools <br />- Grew art team from 2
              to 20, managing 3 teams to produce courses to train the general
              public and 10k UK government staff
            </p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-heading">
            <b>British Ecological Society</b> June 2021 - July 2021 Graphic
            Designer
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
      <div className="work-container">
        <div className="work-item">
          <b>Boston Hacks Hackathon, Warn (Best Mental Health Hack)</b> June
          2021 - Present
          <p>
            Built chrome extension that filters out potentially triggering
            images, audio, and video, using AssemblyAI and Amazon Rekognition
            APIs.
          </p>
        </div>
        <div className="work-item">
          <b>HackOn Hackathon, Project DandyLion</b> June 2021 - July 2021
          Graphic Designer
          <p>
            Created a mental wellness chat website with Flask, SQLite3, React,
            Node.js, Auth0. Used HTML, CSS, Javascript, Reactstrap, Figma for
            front-end.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
