import React from 'react';

const FriendList = ({ friends, selectedFriend, onSelect }) => {
  const sortedList = friends.sort();
  return (
    <div className="friend-list">
      <h3>Friends</h3>
      {sortedList.map((friend,index) => (
        <div
          key={index}
          className={`friend ${friend === selectedFriend ? 'selected' : ''}`}
          onClick={() => onSelect(friend)}
        >
          {friend}
        </div>
      ))}
    </div>
  );
};

export default FriendList;
