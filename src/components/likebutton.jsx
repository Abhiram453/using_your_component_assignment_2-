import React, { useState } from 'react';
import './likebutton.css'; // Assuming you will create a CSS file for styling

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
      {liked ? 'Unlike' : 'Like'}
    </button>
  );
};

export default LikeButton;