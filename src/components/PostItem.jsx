import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'

const PostItem = (props) =>{

    const router = useNavigate();

    let {post, remove} = props;
    const removePost = (e)=> {
        e.preventDefault();
        remove(post);
    }
    const openPost = (e)=> {
        e.preventDefault();
        //open(post);
    }
    return (
        <div className="post">
            <div className="post__content">
            <strong>{post.id}. {post.title}</strong>
            <div>
                {post.body}
            </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=> router(`/posts/${post.id}`)}>Open</MyButton>
                <MyButton onClick={removePost}>Delete</MyButton>
            </div>
        </div>
    );
}

export default PostItem;