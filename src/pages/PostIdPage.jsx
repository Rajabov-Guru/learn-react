import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import {useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import CommentList from "../components/CommentList";


const PostIdPage = (props) =>{
    const params =useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getOne(id);
        setPost(response.data);
        
    });

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getComments(id);
        setComments(response.data);
        
    });

    useEffect(()=>{
        fetchPostById(params.id);
        fetchComments(params.id);
    },[]);

    console.log(comments);

    return (
        <div>
            <h1>Вы попали на страницу поста c ID = {params.id}</h1>
            {isLoading
            ?
            <Loader/>
            :
            <div>
                <div>{post.id} {post.title}</div>
            </div>
            }
            
            {isComLoading
            ?
            <Loader/>
            :
            <CommentList comments={comments} title="Комментарии"/>
            }
            
            
        </div>
    );
}



export default PostIdPage;