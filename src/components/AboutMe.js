import React from "react";
import PageTitle from "./PageTitle";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../App.css";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="aboutMe about" id="about">
      <PageTitle width="20%" title="ABOUT ME" class="heading" />
      <div className="content">
        <div className="imgContainer">
          <img
            className="image"
            // src="https://i.pinimg.com/564x/dd/56/61/dd5661f8122358e2d74869317ebbb774.jpg"
            src="images/me.jpg"
            alt="me"
          ></img>
        </div>
        <div className="description">
          <p className="desc-about">
            My Name is Pooja Sharma. I am from Chandigarh. I did B.E. in
            Computer Science from Chitkara University, Punjab. I got an
            internship opportunity on-campus in Kony (Temenos).
            <br />
            <br />
            I'm a passionate software developer with a never give up attitude, a
            team player with good problem solving skills and a strong focus on
            user experience. <br />
            <br />I like to travel. I believe travelling gives a new perspective
            to everything. We get to know a lot about different cultures, their
            history and all the small unique adventures every place has to
            offer.
          </p>
          <br />
          <div className="buttons">
            <button className="btn">
              <div>
                <LinkedInIcon />
              </div>
            </button>
            <button className="btn">
              <div>
                <FacebookIcon />
              </div>
            </button>
            <button className="btn">
              <div>
                <GitHubIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
