import React from 'react';

// Banner images
import banner1 from '../Photos/Banner1.png';
import banner2 from '../Photos/Banner2.png';
import banner3 from '../Photos/Banner3.png';
import banner4 from '../Photos/Banner4.png';

// Category images
import biryani from '../Categories/biryani.png';
import burger from '../Categories/burger.png';
import cake from '../Categories/cake.png';
import chinese from '../Categories/chinese.png';
import icecream from '../Categories/icecream.png';
import idli from '../Categories/idli.png';
import kebabs from '../Categories/kebabs.png';
import momo from '../Categories/momo.png';
import noodles from '../Categories/noodles.png';
import north_indian from '../Categories/north_indian.png';
import paratha from '../Categories/paratha.png';
import pasta from '../Categories/pasta.png';
import pav_bhaji from '../Categories/pav_bhaji.png';
import pizza from '../Categories/pizza.png';
import rolls from '../Categories/rolls.png';
import shakes from '../Categories/shakes.png';
import shawarma from '../Categories/shawarma.png';
import south_indian from '../Categories/south_indian.png';
import starters from '../Categories/starters.png';
import wings from '../Categories/wings.png';

// Import your CSS file
import './OfferBanner.css';

function OffersBanner() {
  return (
    <div>

      {/* Best Offers Section */}
      <h2>Best Offers for You</h2>
      {/* Scrollable banner div with id for CSS scrollbar hiding */}
      <div id="banner-img" style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
        <img src={banner1} alt="Banner 1" className="offer-img" />
        <img src={banner2} alt="Banner 2" className="offer-img" />
        <img src={banner3} alt="Banner 3" className="offer-img" />
        <img src={banner4} alt="Banner 4" className="offer-img" />
      </div>

      {/* Categories Section */}
      <h2>What's on your mind Today?</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div><img src={biryani} alt="Biryani" className="category-img" /><p>Biryani</p></div>
        <div><img src={burger} alt="Burger" className="category-img" /><p>Burger</p></div>
        <div><img src={cake} alt="Cake" className="category-img" /><p>Cake</p></div>
        <div><img src={chinese} alt="Chinese" className="category-img" /><p>Chinese</p></div>
        <div><img src={icecream} alt="Ice Cream" className="category-img" /><p>Ice Cream</p></div>
        <div><img src={idli} alt="Idli" className="category-img" /><p>Idli</p></div>
        <div><img src={kebabs} alt="Kebabs" className="category-img" /><p>Kebabs</p></div>
        <div><img src={momo} alt="Momo" className="category-img" /><p>Momo</p></div>
        <div><img src={noodles} alt="Noodles" className="category-img" /><p>Noodles</p></div>
        <div><img src={north_indian} alt="North Indian" className="category-img" /><p>North Indian</p></div>
        <div><img src={paratha} alt="Paratha" className="category-img" /><p>Paratha</p></div>
        <div><img src={pasta} alt="Pasta" className="category-img" /><p>Pasta</p></div>
        <div><img src={pav_bhaji} alt="Pav Bhaji" className="category-img" /><p>Pav Bhaji</p></div>
        <div><img src={pizza} alt="Pizza" className="category-img" /><p>Pizza</p></div>
        <div><img src={rolls} alt="Rolls" className="category-img" /><p>Rolls</p></div>
        <div><img src={shakes} alt="Shakes" className="category-img" /><p>Shakes</p></div>
        <div><img src={shawarma} alt="Shawarma" className="category-img" /><p>Shawarma</p></div>
        <div><img src={south_indian} alt="South Indian" className="category-img" /><p>South Indian</p></div>
        <div><img src={starters} alt="Starters" className="category-img" /><p>Starters</p></div>
        <div><img src={wings} alt="Wings" className="category-img" /><p>Wings</p></div>
      </div>

    </div>
  );
}

export default OffersBanner;
