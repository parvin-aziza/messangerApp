import React from 'react';

const ChatMessages = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
