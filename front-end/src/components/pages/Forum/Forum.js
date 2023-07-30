// import React from "react";
import { Container } from "react-bootstrap";
import ForumSearch from "./ForumSearch";
import ForumPost from "./ForumPost";
import PageNumber from "./PageNumber";

import ForumImage from "../../../assets/images/forum/AC.jpg";
import profileIcon from "../../../assets/images/advertiser/Adam.jpg";

import "../../../style/advertiser/AdIndex.css";

function Forum() {
  return (
    <Container>
      <div>
        <h1>Forum</h1>
        <div className="d-flex justify-content-center">
          <button className="PostAd">Ask Question</button>
        </div>
        <br />
        <div>
          <ForumSearch />
        </div>
      </div>

      <div className="ForumDiv">
        <ForumPost
          profileIcon={profileIcon}
          forumImage={ForumImage}
          username="Adam"
          title="How to install a window AC unit in my room with mounting brackets? Need a step-by-step guide, safety precautions, and cooling tips. Thanks!"
          category="Electrical"
          date="3 days ago"
          views={252}
          likes={100}
          answers={18}
        />

        <ForumPost
          profileIcon={profileIcon}
          forumImage={ForumImage}
          username="Adam"
          title="How to install a window AC unit in my room with mounting brackets? Need a step-by-step guide, safety precautions, and cooling tips. Thanks!"
          category="Electrical"
          date="3 days ago"
          views={252}
          likes={100}
          answers={18}
        />

        <ForumPost
          profileIcon={profileIcon}
          forumImage={ForumImage}
          username="Adam"
          title="How to install a window AC unit in my room with mounting brackets? Need a step-by-step guide, safety precautions, and cooling tips. Thanks!"
          category="Electrical"
          date="3 days ago"
          views={252}
          likes={100}
          answers={18}
        />
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <PageNumber />
      </div>
    </Container>
  );
}

export default Forum;
