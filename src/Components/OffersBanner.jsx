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
                <div id='banner-img' className='d-flex align-items-center' style={{ overflowY: "auto", gap: "20px" }}>
                    <img width={'450px'} src={banner2} alt="Offer" />
                    <img width={'450px'} src={banner1} alt="Offer" />
                    <img width={'450px'} src={banner3} alt="Offer" />
                    <img width={'450px'} src={banner4} alt="Offer" />
                </div>
            </div>

            <div className='w-75 mt-5'>
                <h4 className='fw-bolder'>What's on your mind Today in Mancherial?</h4>
                <div className='d-flex align-items-center' style={{ overflowY: "auto", gap: "19px" }}>
                    <img className='img-fluid' width={'140px'} src={biryani} alt="biryani" />
                    <img className='img-fluid' width={'140px'} src={burger} alt="burger" />
                    <img className='img-fluid' width={'140px'} src={pizza} alt="pizza" />
                    <img className='img-fluid' width={'140px'} src={chinese} alt="chinese" />
                    <img className='img-fluid' width={'140px'} src={cake} alt="cake" />
                    <img className='img-fluid' width={'140px'} src={icecream} alt="ice Cream" />
                    <img className='img-fluid' width={'140px'} src={idli} alt="idli" />
                    <img className='img-fluid' width={'140px'} src={kebabs} alt="kebabs" />
                    <img className='img-fluid' width={'140px'} src={shakes} alt="shakes" />
                    <img className='img-fluid' width={'140px'} src={momo} alt="momo" />
                    <img className='img-fluid' width={'140px'} src={rolls} alt="rolls" />
                    <img className='img-fluid' width={'140px'} src={pasta} alt="pasta" />
                    <img className='img-fluid' width={'140px'} src={shawarma} alt="shawarma" />
                    <img className='img-fluid' width={'140px'} src={starters} alt="starters" />
                    <img className='img-fluid' width={'140px'} src={wings} alt="wings" />
                    <img className='img-fluid' width={'140px'} src={paratha} alt="paratha" />
                    <img className='img-fluid' width={'140px'} src={pav_bhaji} alt="pav_bhaji" />
                    <img className='img-fluid' width={'140px'} src={noodles} alt="noodles" />
                    <img className='img-fluid' width={'140px'} src={south_indian} alt="south_indian" />
                    <img className='img-fluid' width={'140px'} src={north_indian} alt="north_indian" />
                </div>
                <hr />
            </div>
        </div>
    );
}

export default OffersBanner;
