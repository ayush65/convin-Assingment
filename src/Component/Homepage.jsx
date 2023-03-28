import React from 'react'
import ImagePosts from './ImagePosts';
import Navbar from './Navbar/Navbar';
import Post from './Post';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Post />
      <ImagePosts />
    </div>
  );
}

export default Homepage
