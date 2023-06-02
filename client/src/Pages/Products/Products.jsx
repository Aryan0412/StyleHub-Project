import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Products.scss';
import List from './../../Components/List/List'
import useFetch from '../../Hooks/useFetch';


const products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);


  const handleChange = (e)=>{
    const val = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, val] : selectedSubCats.filter((item)=> item != val));
  }

  return (
    <div className='products' >
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data.map((item) => {
            return (
              <div className="inputItem" key={item.id} >
                <input type="checkbox" name="" id={item.id} value={item.id} onChange={handleChange} />
                <label htmlFor={item.id}>{item.attributes?.title}</label>
              </div>
            );
          })}

        </div>
        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => { setMaxPrice(e.target.value) }} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" name="price" id="asc" value="asc" onChange={(e) => { setSort("asc") }} />
            <label htmlFor="asc">Price (Lowest First)</label>

          </div>
          <div className="inputItem">
            <input type="radio" name="price" id="desc" value="desc" onChange={(e) => { setSort("desc") }} />
            <label htmlFor="asc">Price (Highest First)</label>

          </div>
        </div>

      </div>
      <div className="right">
        <img className='catImg' src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default products