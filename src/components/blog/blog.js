import React, { useState } from "react";
import BlogForm from "../blogForm/blogForm";
import BlogPosts from "../blogPosts/blogPosts";
const curPosts = [
  {
    id: "1",
    title: "Post 1",
    content: "Content for Post 1 !",
  },
  {
    id: "2",   
    title: "Post 2",
    content: "Content for Post2 !",
  },
  {
    id: "3",    
    title: "Post 3",
    content: "Content for Post 3 !",
  }
];

function Blog(){

    const [posts, setPosts] = useState(curPosts);

    const addPostHandler = post =>{
        console.log(post);
        setPosts(prevPosts =>[...prevPosts,post])
    }
    const onDeleteHandler = id => {
      setPosts(prevPosts => prevPosts.filter(p => p.id !== id));
    };
  
  return (
  <div>
        <BlogForm addPost={addPostHandler} />
        <BlogPosts posts={posts}   onDelete={onDeleteHandler}/>

  </div>
  );
}

export default Blog;
