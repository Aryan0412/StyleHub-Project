import React from 'react';
import Categories from '../../Components/Categories/Categories';
import FeaturedProducts from './../../../src/Components/FeaturedProducts/FeaturedProducts';
import Slider from './../../Components/Slider/Slider';
import Contact from '../../Components/Contact/Contact';
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <Slider/>
      <FeaturedProducts type = 'Featured'/>
      <Categories/>
      <FeaturedProducts type = 'Trending'/>
      <Contact/>

    </div>
  )
}

export default Home;