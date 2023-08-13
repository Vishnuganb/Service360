// src/components/ChatWindow.js
import React from 'react';
import { Paper } from '@mui/material';

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <Paper elevation={3} className="message-container">
        {/* Display messages here */}
      </Paper>
      <div className="input-container">
        <input type="text" placeholder="Type your message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
