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
import staters from '../Categories/staters.png';
import wings from '../Categories/wings.png';
import paratha from '../Categories/paratha.png';
import pav_Bhaji from '../Categories/pav_bhaji.png';
import noodles from '../Categories/noodles.png';
import south_indian from '../Categories/south_indain.png'; 
import north_indian from '../Categories/north_indian.png';

function OffersBanner() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
            <div className='w-75'>
                <h4 className='fw-bolder'>Best offers for you</h4>
                <div id='banner-img' className='d-flex align-items-center' style={{ overflowY: "scroll", gap: "20px" }}>
                    <img width={'450px'} src={banner2} alt="Offer" />
                    <img width={'450px'} src={banner1} alt="Offer" />
                    <img width={'450px'} src={banner3} alt="Offer" />
                    <img width={'450px'} src={banner4} alt="Offer" />
                </div>
            </div>

            <div className='w-75 mt-5'>
                <h4 className='fw-bolder'>What's on your mind Today in Mancherial?</h4>
                <div className='d-flex align-items-center' style={{ overflowY: "scroll", gap: "19px" }}>
                    <img className='img-fluid' width={'140px'} src={biryani} alt="Biryani" />
                    <img className='img-fluid' width={'140px'} src={burger} alt="Burger" />
                    <img className='img-fluid' width={'140px'} src={pizza} alt="Pizza" />
                    <img className='img-fluid' width={'140px'} src={chinese} alt="Chinese" />
                    <img className='img-fluid' width={'140px'} src={cake} alt="Cake" />
                    <img className='img-fluid' width={'140px'} src={icecream} alt="Ice Cream" />
                    <img className='img-fluid' width={'140px'} src={idli} alt="Idli" />
                    <img className='img-fluid' width={'140px'} src={kebabs} alt="Kebabs" />
                    <img className='img-fluid' width={'140px'} src={shakes} alt="Shakes" />
                    <img className='img-fluid' width={'140px'} src={momo} alt="Dosa" />
                    <img className='img-fluid' width={'140px'} src={rolls} alt="Rolls" />
                    <img className='img-fluid' width={'140px'} src={pasta} alt="Pasta" />
                    <img className='img-fluid' width={'140px'} src={shawarma} alt="Shawarma" />
                    <img className='img-fluid' width={'140px'} src={staters} alt="Staters" />
                    <img className='img-fluid' width={'140px'} src={wings} alt="Wings" />
                    <img className='img-fluid' width={'140px'} src={paratha} alt="Paratha" />
                    <img className='img-fluid' width={'140px'} src={pav_bhaji} alt="Pav Bhaji" />
                    <img className='img-fluid' width={'140px'} src={noodles} alt="Noodles" />
                    <img className='img-fluid' width={'140px'} src={south_indian} alt="South_Indian" />
                    <img className='img-fluid' width={'140px'} src={north_indian} alt="North_Indian" />
                </div>
                <hr />
            </div>
        </div>
    );
}

export default OffersBanner;
