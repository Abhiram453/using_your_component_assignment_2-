import React from 'react';
import LikeButton from './likebutton';
import './postcard.css'; // Assuming you will create a CSS file for styling

const PostCard = ({ post }) => {
  return (
    <div className="postcard">
      <img src={post.profileImage} alt={post.username} className="postcard-profile-picture" />
      <h2 className="postcard-username">{post.username}</h2>
      <p className="postcard-content">{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

export default PostCard;