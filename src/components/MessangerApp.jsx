import React, { useState } from "react";
import MessageInput from "./MessageInput";
import FriendList from "./FriendList";
import ChatMessages from "./ChatMessages";

const friends = ["Annie", "Bhaskar", "Zaina", "Parvin", "Peter"];

const MessangerApp = () => {
  const [selectedFriend, setSelectedFriend] = useState(friends[0]);
  const [conversations, setConversations] = useState({});

  const handleSend = (message) => {
    if (!message.trim()) return;

    setConversations((prev) => {
      const friendMessages = prev[selectedFriend] || [];
      return {
        ...prev,
        [selectedFriend]: [...friendMessages, { id: Date.now(), message }],
      };
    });
  };

  const handleClick = () => {
    const updatedConversations = { ...conversations };
    delete updatedConversations[selectedFriend];
    setConversations(updatedConversations);
  };

  const messages = conversations[selectedFriend] || [];

  return (
    <div className="conatiner">
      <h1>Messenger App</h1>
      <div className="main-container">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelect={setSelectedFriend}
        />
        <div className="chat-section">
          <div className="chat-header-section">
            <h2>Chat with {selectedFriend}</h2>
            <button className="delete-chat" onClick={handleClick}>
              Delete chat history
            </button>
          </div>

          <div className="chat-window">
            <ChatMessages messages={messages} />
          </div>
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default MessangerApp;
