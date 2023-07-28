import React from "react";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const ForumPost = ({
  profileIcon,
  forumImage,
  username,
  title,
  category,
  date,
  views,
  likes,
  answers,
}) => {
  return (
    <div className="border rounded shadow-sm d-flex flex-row align-items-center SingleForumCont">
      <div className="w-25 p-3 forumImage">
        <Image src={forumImage} alt="Main image" fluid />
      </div>
      <div className="">
        <div className="AdHeader">
          <div>
            <img
              src={profileIcon}
              alt="Profile"
              roundedCircle
              className="AdProfilePic"
            />
          </div>
          <div className="namediv">
            <p>{username}</p>
          </div>
        </div>

        <div>
          <h3>{title}</h3>
        </div>

        <div>
          <button className="AdCategeroy" disabled>
            {category}
          </button>
        </div>

        <br />

        <div>
          <Row className="forumFotter">
            <Col xs lg="2">
              {date}
            </Col>
            <Col className="EmptyColForum"></Col>
            <Col xs lg="2">
              {views} Views
            </Col>
            <Col xs lg="2">
              {likes} Likes
            </Col>
            <Col xs lg="2">
              {answers} Answers
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
