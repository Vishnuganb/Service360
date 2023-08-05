import React, {useState} from "react";
import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import forumImage1 from "../../../../assets/images/forum/AC.jpg";
import forumImage2 from "../../../../assets/images/forum/Forum2.jpg";
import forumImage3 from "../../../../assets/images/forum/Forum3.png";

import Comment from "./Comment";

const ForumQuestion = ({
  profileIcon,
  forumImage,
  username,
  title,
  description,
  category,
  date,
  views,
  likes,
  liked,

}) => {
   const [CommentModalShow, setCommentModalShow] = useState(false);
    const commentData = [
      {
        id: 1,
        author: "John Doe",
        content: "This is the first comment.",
        timestamp: "2023-08-05 12:34:56",
      },
      {
        id: 2,
        author: "Jane Smith",
        content: "I agree with John.",
        timestamp: "2023-08-05 13:45:32",
      },
      {
        id: 3,
        author: "Michael Johnson",
        content: "Nice post!",
        timestamp: "2023-08-05 14:20:10",
      },
    ];
    
  return (
    <div className="shadow-sm p-3">
      <div className="ForumHeader d-flex  justify-content-between">
        <div className="d-flex align-items-center">
          <div>
            <img
              src={profileIcon}
              alt="Profile of Advertiser"
              roundedCircle
              className="AdProfilePic"
            />
          </div>
          <div className="namediv">
            <p>{username}</p>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p>Posted on 29 Jul 2023</p>
        </div>
      </div>

      <div>
        <h2>{title}</h2>
        <hr></hr>
      </div>

      <div>
        <p>{description}</p>
      </div>

      <div>
        <div className="d-flex align-items-center justify-content-center gap-2">
          <div>
            <Image
              src={forumImage1}
              alt="Related"
              thumbnail
              fluid
              className="ForumQImg"
            />
          </div>
          <div>
            <Image
              src={forumImage2}
              alt="Related"
              thumbnail
              fluid
              className="ForumQImg"
            />
          </div>
          <div>
            <Image
              src={forumImage3}
              alt="Related"
              thumbnail
              fluid
              className="ForumQImg"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <hr />
        <div className="d-flex justify-content-around align-items-start">
          <div style={{ cursor: "pointer" }}>
            {liked ? (
              <i
                class="fa-solid fa-heart fa-lg"
                style={{ color: "#292D32" }}
              ></i>
            ) : (
              <i
                class="fa-regular fa-heart fa-lg"
                style={{ color: "#292D32" }}
              ></i>
            )}
            <p className="text-muted">{likes}</p>
          </div>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => setCommentModalShow(true)}
          >
            <i
              className="fa-solid fa-comments fa-lg"
              style={{ color: "#292D32" }}
            ></i>
            <p className="text-muted">10</p>
          </div>

          <div>
            <i class="fa-solid fa-eye fa-lg" style={{ color: "#292D32" }}></i>
            <p className="text-muted">10</p>
          </div>
        </div>
        <Comment
          commentData={commentData}
          show={CommentModalShow}
          onHide={() => setCommentModalShow(false)}
        />
      </div>
    </div>
  );
};

export default ForumQuestion;
