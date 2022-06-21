import React, { useContext } from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import { AuthContext } from "../context";
import { privateRoutes, publicRoutes } from "../router";
import Loader from "./UI/loader/Loader";
// import Navbar from "./UI/navbar/Navbar";


const AppRouter = (props) =>{
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>;
    }
    
    return isAuth?(
        <Routes>
            {privateRoutes.map(route =>
                <Route key={Date.now()} exact={route.exact} path={route.path} element={<route.component/>}/>
            )}
            <Route path="/*" element={<Navigate to='/posts'/>} />
        </Routes>
    ):(
        <Routes>
            {publicRoutes.map(route =>
                <Route key={Date.now()} exact={route.exact} path={route.path} element={<route.component/>}/>
            )}
            <Route path="/*" element={<Navigate to='/login'/>} />
        </Routes>
    );
}



export default AppRouter;