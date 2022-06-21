import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";
import MyModal from "../components/UI/MyModal/MyModal";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import {getPagesCount} from '../utils/pages';
import '../styles/App.css';
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', search:''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page)=>{
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
    
  });


  useEffect(()=>{
    fetchPosts(limit, page);
  },[]);

  const createPost = function(newPost){
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const deletePost = function(post){
    setPosts(posts.filter(p => p.id!==post.id));
  }
  
  const changePage = function(page){
    setPage(page);
    fetchPosts(limit, page);
  }

  return (
    <div className="App">
      <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin:'15px 0'}}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && <h1 style={{textAlign:'center'}}>Произошла ошибка ${postError}</h1>}
      
      {isPostsLoading
        ?
        <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
          <Loader/>
        </div>
        :
        <div>
          <PostList posts = {sortedAndSearchedPosts} title = "Список постов 1" del={deletePost}/>
          <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
      }
      
      
      
      
    </div>
  );

}
export default Posts;