import React, { useState } from "react";
import './blogForm.css'

//creer un nouveau poste
function BlogForm(props){
//enteredTtitle:variable de stokage
//setEnteredTtitlen:fonction pour changer le titre
const[enteredTtitle,setEnteredTtitle] = useState('')
const[enteredContent,setEnteredTContent] = useState('')
const submitHandler = event => {
    event.preventDefault();
    props.addPost({
        title : enteredTtitle,
        content: enteredContent,
        id: Math.random().toString(),
    })
    setEnteredTtitle("");
    setEnteredTContent("");
}

  return (
    <div className="container">
        <form onSubmit={submitHandler}>
        <div className="card">
                <div className="card-header text-center">
                    Create Blog
                </div>
                <div className="card-body">
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label title" >Title</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" 
                        id="title" 
                        value={enteredTtitle}
                        onChange={event => {
                        setEnteredTtitle(event.target.value);
                    }}
                    required
                    />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label content">Content</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                        value={enteredContent}
                        onChange={event => {
                        setEnteredTContent(event.target.value);
                        }}required>
                </textarea>
                </div>
                </div>
                <button  className="col-sm-10 btn btn-info " type="submit">Publier</button>
            </div>
            </div>
        </form> 
        </div>
  );
}

export default BlogForm;
