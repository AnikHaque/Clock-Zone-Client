import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Contact from '../contact/Contact';
import Exclusive from '../exclusive/Exclusive';
import Footer from '../footer/Footer';
import HomeWatches from '../homewatches/HomeWatches';
import ManageReview from '../managereview/ManageReview';
import Offer from '../offer/Offer';
import SpecialWatchStore from '../specialwatchstore/SpecialWatchStore';
import Blogs from '../blogs/Blogs';
import Watches from '../watches/Watches';
import WatchShop from '../watchshop/WatchShop';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <br></br>
            <br></br>
            
             <Exclusive></Exclusive>
             <br></br>
            <br></br>
             
            <About></About>
            <br></br>
            <br></br>
           
           <HomeWatches></HomeWatches>
           <br></br>
            <br></br>
          
           <Offer></Offer>
           <br></br>
            <br></br>
           
          <SpecialWatchStore></SpecialWatchStore>
          <br></br>
            <br></br>
          
          <WatchShop></WatchShop>
          <br></br>
            <br></br>
          
          <ManageReview></ManageReview>
          <br></br>
            <br></br>
          
          <Blogs></Blogs>
          <br></br>
            <br></br>
         
          <Contact></Contact>
          <br></br>
            <br></br>
         <Footer></Footer>
           
        </div>
    );
};

export default Home;