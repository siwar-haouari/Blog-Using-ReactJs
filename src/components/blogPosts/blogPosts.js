import React from "react";
import "./blogPosts.css"
function BlogPosts(props){

    return(
      <div className="container">
        <h2 className="titre mb-4">Blog posts</h2>
        <div class="row row-cols-1 row-cols-md-3">
      {props.posts.map(post => (
        <div className="card  mb-3">
            <div className="card-header">{post.title}<button className="btn btn-danger"  onClick={() => props.onDelete(post.id)}><i className="fa fa-trash"></i></button></div>
            <div className="card-body">
              <p className="card-text">{post.content}</p>
            </div>
          </div>
    ))}
    </div>
    </div>
    );
}

export default BlogPosts;
