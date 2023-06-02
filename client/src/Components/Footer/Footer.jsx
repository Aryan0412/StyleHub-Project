import React from 'react'
import "./Footer.scss";
import payment from './../../Assets/payment.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shows</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, illo. Et provident nemo facere odit dolorem quae, similique officiis hic asperiores laudantium officia libero. Explicabo saepe fugit consequuntur voluptate? Officiis dolorem in repudiandae ratione eaque, voluptatem maxime laboriosam officia nihil soluta vitae temporibus et exercitationem tempore dolor possimus odit harum.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur tempora aliquid saepe commodi? Placeat natus ab nobis impedit sed aspernatur distinctio magnam dolorum sequi incidunt dolores, recusandae ea beatae eligendi blanditiis quia modi dignissimos omnis! Cum hic sint blanditiis. Eius delectus doloremque nemo maiores debitis quos laboriosam libero rem. Voluptatibus rem, consectetur neque ea quis illum laborum nobis, accusantium dolorum obcaecati assumenda ad doloribus, ex et placeat! Sunt, facere?</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo' >STYLEHUB</span>
          <span className='copyright' >© Copyright 2023. All Rights Reserved </span>
        </div>

        <div className="right">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer