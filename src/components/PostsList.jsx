import React from 'react';
import Post from './Post';

const PostList = () => (
  <div className="posts-list">
    <h2>Inlägg</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {[1, 2, 3].map(id => (
        <li key={id} className="post-item">
          <Post />
        </li>
      ))}
    </ul>
  </div>
);

export default PostList;
