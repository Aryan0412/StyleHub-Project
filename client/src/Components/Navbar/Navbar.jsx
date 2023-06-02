import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import Flag from '../../Assets/Flag.png';
import payment from '../../Assets/payment.png';
import "./Navbar.scss";
import { useState } from 'react';
import Cart from './../Cart/Cart';
import { useContext } from 'react';
import { Context } from '../../Context';
import { useEffect } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const{cartItems} = useContext(Context);
    useEffect(()=>{
        setCount(cartItems.length);
    }, [cartItems]);
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src={Flag} width="30px" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1" >Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2" >Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3" >Children</Link>
                    </div>
                </div>
                <div className="center">
                    <Link className="link" to="/" >STYLEHUB</Link>

                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/" >Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/" >About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/" >Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/" >Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonIcon />
                        <FavoriteBorderIcon />
                        <div className="cartIcon" onClick={(()=>{
                            setOpen(!open);
                        })} >
                            <ShoppingCartOutlinedIcon />
                            <span>{count}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart/> }
        </div>
    )
}

export default Navbar;