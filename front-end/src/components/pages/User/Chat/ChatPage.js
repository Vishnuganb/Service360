import React,{useState,useEffect} from "react";
import { Row, Col, Card, InputGroup, Modal, Container } from "react-bootstrap";
import Scrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { over } from "stompjs";
import SockJS from "sockjs-client";



import Aisu from "./../../../../assets/images/advertiser/aishu.jpg";
import Adam from "./../../../../assets/images/advertiser/Adam.jpg";
import Sara from "./../../../../assets/images/advertiser/sara.jpg";
import ProAd from "./../../../../assets/images/advertiser/proAd.jpg";
import cus1 from "./../../../../assets/images/home/Customer_1.png";
import cus2 from "./../../../../assets/images/home/Customer_2.png";
import cus3 from "./../../../../assets/images/home/Customer_3.png";
import BgImage from "../../../../assets/images/header/Background.png";
import "../../../../style/User/Chat/Chat.css";

var stompClient = null;
const ChatApp = () => {
  const [privateChats, setPrivateChats] = useState(new Map());
  const [publicChats, setPublicChats] = useState([]);
  const [tab, setTab] = useState("CHATROOM");
  const [userData, setUserData] = useState({
    username: "",
    receivername: "",
    connected: false,
    message: "",
  });

  const response = sessionStorage.getItem("authenticatedUser");
  const userDetail = JSON.parse(response);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/auth/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    stompClient.subscribe("/chatroom/public", onMessageReceived);
    stompClient.subscribe(
      "/user/" + userData.username + "/private",
      onPrivateMessage
    );
    userJoin();
  };

  const userJoin = () => {
    var chatMessage = {
      senderName: userData.username,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    var payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        publicChats.push(payloadData);
        setPublicChats([...publicChats]);
        break;
    }
  };

  const onPrivateMessage = (payload) => {
    console.log(payload);
    var payloadData = JSON.parse(payload.body);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const handleMessage = (event) => {
    const { value } = event.target;
    setUserData({ ...userData, message: value });
  };
  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      console.log(chatMessage);
      stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const sendPrivateValue = () => {
    if (stompClient) {
      var chatMessage = {
        senderName: userData.username,
        receiverName: tab,
        message: userData.message,
        status: "MESSAGE",
      };

      if (userData.username !== tab) {
        privateChats.get(tab).push(chatMessage);
        setPrivateChats(new Map(privateChats));
      }
      stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));
      setUserData({ ...userData, message: "" });
    }
  };

  const registerUser = () => {
    connect();
  };

  const handleUsername = () => {
    setUserData({ ...userData, username: userDetail.email });
  };

  useEffect(() => {
    console.log(userDetail);
    console.log(userDetail.email);
    if (userDetail.username !== null) {
      setUserData({ ...userData, username: userDetail.email });
    }
    if (userData.username !== "") {
      registerUser();
    }
  }, []);

  return (
    <div className="container">
      {userData.connected ? (
        <div className="chat-box">
          <div className="member-list">
            <ul>
 
              {[...privateChats.keys()].map((name, index) => (
                <li
                  onClick={() => {
                    setTab(name);
                  }}
                  className={`member ${tab === name && "active"}`}
                  key={index}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {tab !== "CHATROOM" && (
            <div className="chat-content">
              <ul className="chat-messages">
                {[...privateChats.get(tab)].map((chat, index) => (
                  <li
                    className={`message ${
                      chat.senderName === userData.username && "self"
                    }`}
                    key={index}
                  >
                    {chat.senderName !== userData.username && (
                      <div className="avatar">{chat.senderName}</div>
                    )}
                    <div className="message-data">{chat.message}</div>
                    {chat.senderName === userData.username && (
                      <div className="avatar self">{chat.senderName}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="send-message">
                <input
                  type="text"
                  className="input-message"
                  placeholder="enter the message"
                  value={userData.message}
                  onChange={handleMessage}
                />
                <button
                  type="button"
                  className="send-button"
                  onClick={sendPrivateValue}
                >
                  send
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="register">
          <input
            id="user-name"
            placeholder="Enter your name"
            name="userName"
            value={userData.username}
            onChange={handleUsername}
            margin="normal"
          />
          <button type="button" onClick={registerUser}>
            connect
          </button>
        </div>
      )}
    </div>
  );
}


export default ChatApp;













  // return (
  //   <Container>
  //     <div fluid>
  //       <h1>Chat</h1>
  //       <Row>
  //         <Col md="12">
  //           <Card id="chat3">
  //             <Card.Body style={{ backgroundImage: `url(${BgImage})` }}>
  //               <Row>
  //                 <Col md="6" lg="5" xl="4" className="mb-4 mb-md-0">
  //                   <div className="p-3">
  //                     <InputGroup className="rounded mb-3 border">
  //                       <input
  //                         className="form-control rounded"
  //                         placeholder="Search"
  //                         type="search"
  //                       />
  //                       <InputGroup.Text className="border-0" id="search-addon">
  //                         <i className="fa-solid fa-magnifying-glass"></i>
  //                       </InputGroup.Text>
  //                     </InputGroup>

  //                     <Scrollbar
  //                       suppressScrollX
  //                       style={{ position: "relative", height: "40em" }}
  //                     >
  //                       <ul>
  //                         <li
  //                           onClick={() => {
  //                             setTab("CHATROOM");
  //                           }}
  //                           className={`member ${
  //                             tab === "CHATROOM" && "active"
  //                           }`}
  //                         >
  //                           Chatroom
  //                         </li>
  //                         {[...privateChats.keys()].map((name, index) => (
  //                           <li
  //                             onClick={() => {
  //                               setTab(name);
  //                             }}
  //                             className={`member ${tab === name && "active"}`}
  //                             key={index}
  //                           >
  //                             {name}
  //                           </li>
  //                         ))}
  //                       </ul>
  //                       {/* <li className="p-2 border-bottom chathover">
  //                         <a
  //                           href="#!"
  //                           className="d-flex justify-content-between"
  //                         >
  //                           <div className="d-flex flex-row">
  //                             <div>
  //                               <img
  //                                 src={Aisu}
  //                                 alt="avatar"
  //                                 className="chatProImg d-flex align-self-center me-3"
  //                               />
  //                             </div>
  //                             <div className="pt-1">
  //                               <p
  //                                 className="fw-bold mb-0"
  //                                 style={{ color: "#000000" }}
  //                               >
  //                                 Aiswarya Ranjan
  //                               </p>
  //                               <p className="small text-muted">
  //                                 Hello, Are you there?
  //                               </p>
  //                             </div>
  //                           </div>
  //                           <div className="pt-1">
  //                             <p className="small text-muted mb-1">Just now</p>
  //                             <span
  //                               className="badge  rounded-pill float-end"
  //                               style={{ backgroundColor: "#292D32" }}
  //                             >
  //                               3
  //                             </span>
  //                           </div>
  //                         </a>
  //                       </li> */}
  //                     </Scrollbar>
  //                   </div>
  //                 </Col>
  //                 <Col md="6" lg="7" xl="8">
  //                   <Scrollbar
  //                     suppressScrollX
  //                     style={{ position: "relative", height: "40em" }}
  //                     className="pt-3 pe-3"
  //                   >
  //                     {/* these two div are messages */}
  //                     {tab !== "CHATROOM" && (
  //                       <div className="chat-content">
  //                         <ul className="chat-messages">
  //                           {[...privateChats.get(tab)].map((chat, index) => (
  //                             <li
  //                               className={`message ${
  //                                 chat.senderName === userData.username &&
  //                                 "self"
  //                               }`}
  //                               key={index}
  //                             >
  //                               {chat.senderName !== userData.username && (
  //                                 <div className="avatar">
  //                                   {chat.senderName}
  //                                 </div>
  //                               )}
  //                               <div className="message-data">
  //                                 {chat.message}
  //                               </div>
  //                               {chat.senderName === userData.username && (
  //                                 <div className="avatar self">
  //                                   {chat.senderName}
  //                                 </div>
  //                               )}
  //                             </li>
  //                           ))}
  //                         </ul>

  //                         <div className="send-message">
  //                           <input
  //                             type="text"
  //                             className="input-message"
  //                             placeholder="enter the message"
  //                             value={userData.message}
  //                             onChange={handleMessage}
  //                           />
  //                           <button
  //                             type="button"
  //                             className="send-button"
  //                             onClick={sendPrivateValue}
  //                           >
  //                             send
  //                           </button>
  //                         </div>
  //                       </div>
  //                     )}

  //                     {/* <div className="d-flex flex-row justify-content-start">
  //                       <img
  //                         src={Aisu}
  //                         alt="avatar"
  //                         className="chatProImg d-flex align-self-center me-3"
  //                       />
  //                       <div>
  //                         <p
  //                           className="small p-2 ms-3 mb-1 rounded-3"
  //                           style={{ backgroundColor: "#f5f6f7" }}
  //                         >
  //                           Hi there! I'm having some issues with my electrical
  //                           outlets. They're not working properly.
  //                         </p>
  //                         <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
  //                           12:00 PM | Aug 13
  //                         </p>
  //                       </div>
  //                     </div>

  //                     <div className="d-flex flex-row justify-content-end">
  //                       <div>
  //                         <p
  //                           className="small p-2 me-3 mb-1 text-white rounded-3"
  //                           style={{ backgroundColor: "#1f285a" }}
  //                         >
  //                           I'd be happy to help. Can you provide me with more
  //                           details about the problem? Have you noticed any
  //                           specific patterns?
  //                         </p>
  //                         <p className="small me-3 mb-3 rounded-3 text-muted">
  //                           12:00 PM | Aug 13
  //                         </p>
  //                       </div>
  //                       <img
  //                         src={cus3}
  //                         alt="avatar"
  //                         className="chatProImg d-flex align-self-center me-3"
  //                       />
  //                     </div> */}
  //                   </Scrollbar>
  //                   <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
  //                     <img
  //                       src={cus3}
  //                       alt="avatar"
  //                       className="chatProImg d-flex align-self-center me-3"
  //                     />
  //                     <div
  //                       className="d-flex border align-items-center rounded-3 px-3"
  //                       style={{ width: "100%" }}
  //                     >
  //                       <input
  //                         type="text"
  //                         className="form-control form-control-lg"
  //                         id="exampleFormControlInput2"
  //                         placeholder="Type message"
  //                         value={userData.message}
  //                         onChange={handleMessage}
  //                       />
  //                       <a className="ms-1 text-muted" href="#!">
  //                         <i
  //                           className="fa-solid fa-paperclip"
  //                           style={{
  //                             color: "#292D32",
  //                           }}
  //                         ></i>
  //                       </a>
  //                       <a className="ms-3 text-muted" href="#!">
  //                         <i
  //                           className="fa-solid fa-face-smile"
  //                           style={{
  //                             color: "#292D32",
  //                           }}
  //                         ></i>
  //                       </a>
  //                       <a className="ms-3" href="#!">
  //                         <i
  //                           className="fa-solid fa-paper-plane"
  //                           style={{
  //                             color: "#292D32",
  //                           }}
  //                           onClick={sendPrivateValue}
  //                         ></i>
  //                       </a>
  //                     </div>
  //                   </div>
  //                 </Col>
  //               </Row>
  //             </Card.Body>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </div>
  //   </Container>
  // );

