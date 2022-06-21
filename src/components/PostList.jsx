import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = ({posts, title, del}) => {

    if(!posts.length){
        return (
            <h1 style={{textAlign:"center"}}>
                Посты не найдены
            </h1>
        );
    }
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{title}</h1>
            <TransitionGroup>
                {posts.map(post =>
                    <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostItem post = {post} remove={del}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default PostList;