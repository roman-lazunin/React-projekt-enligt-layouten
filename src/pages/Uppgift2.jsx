import React from "react";
import '../styles/pages/uppgift2.css';
import PostList from '../components/PostsList';
import TagList from '../components/TagList';

function Uppgift2() {
  return (
    <div className="main-content">
      <div className="uppgift2-content-container">
        <PostList />
        <TagList />
      </div>
    </div>
  );
}

export default Uppgift2;