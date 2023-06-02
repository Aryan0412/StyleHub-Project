import React from 'react';
import './FeaturedProducts.scss';
import Card from './../Card/Card'
import useFetch from '../../Hooks/useFetch';


const FeaturedProducts = ({type}) => {

const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
  return (
    <div className='featuredProducts' >
        <div className="top">
            <h3>{type} products</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, consectetur numquam iure reiciendis ratione alias asperiores vero similique unde deleniti vitae impedit. Accusantium labore distinctio eius non perferendis quia ullam natus magni at esse, ratione laudantium similique corporis ab eligendi.</p>

        </div>
        <div className="bottom">
            {error ? "Something is wrong " : loading ? "loading" : data.map((item)=>{
                return <Card item = {item} key = {item.id}/>
            })}
            
        </div>
    </div>
  )
}

export default FeaturedProducts;