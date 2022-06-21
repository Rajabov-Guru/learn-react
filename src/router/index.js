import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import PostsLenta from "../pages/PostsLenta";

export const privateRoutes = [
    {path:'/about', component: About, exact: true},
    {path:'/posts', component: Posts, exact: true},
    {path:'/lenta', component: PostsLenta, exact: true},
    {path:'/posts/:id', component: PostIdPage, exact: true},
    
]

export const publicRoutes = [
    {path:'/login', component: Login, exact: false},
    
]