import React, { useState, useContext } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Context } from '../../Context';

const product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const {data, loading, error} = useFetch(`/products/${id}?populate=*`);
  const {handleAddToCart} = useContext(Context);
  // console.log(data);



  return ( loading ? "Loading Content" :
    <div className='product' >
      <div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} onClick={(e)=>{setSelectedImg("img")}} alt="" />
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} onClick={(e)=>{setSelectedImg("img2")}} alt="" />
        </div>
        <div className="mainImg">
          <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>{data?.attributes?.title}</h2>
        <span className='price' >₹{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev - 1)} >-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)} >+</button>
        </div>
        <button className="add" onClick={()=>{
          handleAddToCart(data, quantity);
          setQuantity(1);
        }} >
          <AddShoppingCartIcon/>
          ADD TO CART
        </button>
        <div className="link">
          <div className="item">
              <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor : Polo</span>
          <span>Product Type : T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top </span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default product