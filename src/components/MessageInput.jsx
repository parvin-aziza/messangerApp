import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessgae] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessgae('');
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessgae(e.target.value)}
      />
      <button className="submit-button" type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
