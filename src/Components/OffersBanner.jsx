import React from 'react';
import './OfferBanner.css';

import banner1 from '../Photos/Banner1.png';
import banner2 from '../Photos/Banner2.png';
import banner3 from '../Photos/Banner3.png';
import banner4 from '../Photos/Banner4.png';

import biryani from '../Categories/biryani.png';
import burger from '../Categories/burger.png';
import pizza from '../Categories/pizza.png';
import chinese from '../Categories/chinese.png';
import cake from '../Categories/cake.png';
import icecream from '../Categories/icecream.png';
import idli from '../Categories/idli.png';
import kebabs from '../Categories/kebabs.png';
import shakes from '../Categories/shakes.png';
import momo from '../Categories/momo.png';
import rolls from '../Categories/rolls.png';
import pasta from '../Categories/pasta.png';
import shawarma from '../Categories/shawarma.png';
import starters from '../Categories/starters.png';
import wings from '../Categories/wings.png';
import paratha from '../Categories/paratha.png';
import pav_bhaji from '../Categories/pav_bhaji.png';
import noodles from '../Categories/noodles.png';
import south_indian from '../Categories/south_indian.png'; 
import north_indian from '../Categories/north_indian.png';

function OffersBanner() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
            <div className='w-75'>
                <h4 className='fw-bolder'>Best offers for you</h4>
                <div id='banner-img' className='d-flex align-items-center' style={{ overflowX: "scroll", gap: "20px" }}>
                    <img className="offer-img" src={banner2} alt="Offer" />
                    <img className="offer-img" src={banner1} alt="Offer" />
                    <img className="offer-img" src={banner3} alt="Offer" />
                    <img className="offer-img" src={banner4} alt="Offer" />
                </div>
            </div>

            <div className='w-75 mt-5'>
                <h4 className='fw-bolder'>What's on your mind Today in Mancherial?</h4>
                <div className='d-flex align-items-center' style={{ overflowX: "scroll", gap: "19px" }}>
                    <img className='category-img' src={biryani} alt="biryani" />
                    <img className='category-img' src={burger} alt="burger" />
                    <img className='category-img' src={pizza} alt="pizza" />
                    <img className='category-img' src={chinese} alt="chinese" />
                    <img className='category-img' src={cake} alt="cake" />
                    <img className='category-img' src={icecream} alt="ice Cream" />
                    <img className='category-img' src={idli} alt="idli" />
                    <img className='category-img' src={kebabs} alt="kebabs" />
                    <img className='category-img' src={shakes} alt="shakes" />
                    <img className='category-img' src={momo} alt="momo" />
                    <img className='category-img' src={rolls} alt="rolls" />
                    <img className='category-img' src={pasta} alt="pasta" />
                    <img className='category-img' src={shawarma} alt="shawarma" />
                    <img className='category-img' src={starters} alt="starters" />
                    <img className='category-img' src={wings} alt="wings" />
                    <img className='category-img' src={paratha} alt="paratha" />
                    <img className='category-img' src={pav_bhaji} alt="pav_bhaji" />
                    <img className='category-img' src={noodles} alt="noodles" />
                    <img className='category-img' src={south_indian} alt="south_indian" />
                    <img className='category-img' src={north_indian} alt="north_indian" />
                </div>
                <hr />
            </div>
        </div>
    );
}

export default OffersBanner;
