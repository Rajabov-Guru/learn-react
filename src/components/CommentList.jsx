import React from "react";
import Loader from "../components/UI/loader/Loader";
import Comment from "../components/Comment";


const CommentList = ({comments, title}) =>{
    return (
        <div>
            <h1>{title}</h1>
            <hr style={{margin:'15px 0'}}></hr>
            {comments.map(c=>
                <Comment comment={c}/>)
            }
        </div>
    );
}



export default CommentList;