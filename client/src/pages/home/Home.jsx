import React from 'react'
import "./Home.css";
import Featured from '../../componetns/featured/Featured';
import Navbar from './../../componetns/navbar/Navbar';
import Header from './../../componetns/header/Header';
import PropertyList from './../../componetns/propertyList/PropertyList';
import FeaturedProperties from './../../componetns/featuredProperties/FeaturedProperties';
import MailList from './../../componetns/mailList/MailList';
import Footer from '../../componetns/footer/Footer';

const Home = ()=> {
  return (
    <div>
      {<Navbar/>}
      {<Header/>}
      <div className="homeContainer">
           <Featured/> 
           <h3 className="homeTitle">browse by property type</h3>
           <PropertyList/>
           <h3 className="homeTitle">Home goes love</h3>
           <FeaturedProperties/>
           <MailList/>
           <Footer/>
          </div>
    </div>
  )
}

export default Home;
