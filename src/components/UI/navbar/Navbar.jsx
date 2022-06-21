import React, {useContext} from "react";
import classes from './Navbar.module.css';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = (props) =>{
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logout =()=>{
        setIsAuth(false);
        localStorage.removeItem('auth');
    }
    return (
        <div className={classes.navbar}>
            {isAuth?
                <MyButton onClick={logout} >Выйти</MyButton>
                :''}
            <div className={classes.navbar__links}>
                <Link to="/about">О нас</Link>
                <Link to="/posts">Посты</Link>
                <Link to="/lenta">Лента</Link>
            </div>
        </div>
    );
}



export default Navbar;