import React, { useState } from 'react';
import './HomePage.css';
import { Link,useNavigate } from 'react-router-dom';

const HomePage=()=>{

    //url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS43NTggNi43MTV2LS43M0M1Ljc1OCAzLjIzMyA3Ljc5IDEgMTAuMjk2IDFoLjIzNWMyLjUwNiAwIDQuNTM4IDIuMjMyIDQuNTM4IDQuOTg2di43MyIgc3Ryb2tlPSIjMDAyRDU3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYuMDg5IDE4LjM1TDE4Ljk2IDcuNzE2SDEuMzA2TDQuMTc4IDE4LjM1aDExLjkxeiIgc3Ryb2tlPSIjMDAyRDU3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz48L3N2Zz4=')
     return(
        <>
        <div className='outer-nav'>
        <nav className='navbar'>
            <a>Home</a>
            <a>Smart</a>
            <a >Offers</a>
            <Link to={'/cart'}>Store</Link>
            <Link className="home-btn" to={'/login'}>Login</Link>
            <div className='search-bar'></div>
        </nav>
        </div>
        <div className='image'><img src="watchgreen.jpg" alt="" width={"100%"} height={"300px"}/></div>
        <div className='image'><img src="watchOffer.png" alt="" width={"100%"} height={"300px"}/></div>
        <div className='image'><img src="cartWatch1.jpg" alt="" width={"30%"} height={"300px"}/></div>
        <div className='image'><img src="watch1.jpeg" alt="" width={"30%"} height={"300px"}/></div>

<div className='innerbox' width={"20px"} height={"20px"}>int</div>

<div className={'last'}>© 2013 - 2024 Kinsta Inc. All rights reserved. Kinsta® and WordPress® are registered trademarks. Legal information.</div>
<div className='row'>
    <div className='phone'>
    <div className='phone-ab'>
        <div className='phoneinner'></div>
    </div>
    </div>

        <div className='laptop'>
            <div className='laptop-ab'></div>
        </div>
</div>

        </>
     );
}

export default HomePage;