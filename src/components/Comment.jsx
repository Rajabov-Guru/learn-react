import React from "react";



const Comment = ({comment}) =>{
    return (
        <div key={comment.id}>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
            <hr style={{margin:'15px 0'}}></hr>
        </div>
    );
}



export default Comment;