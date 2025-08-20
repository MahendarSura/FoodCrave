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

function OffersBanner() {
  return (
    <div>

      {/* Best Offers Section */}
      <h2>Best Offers for You</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <img src={banner1} alt="Banner 1" width={200} />
        <img src={banner2} alt="Banner 2" width={200} />
        <img src={banner3} alt="Banner 3" width={200} />
        <img src={banner4} alt="Banner 4" width={200} />
      </div>

      {/* Categories Section */}
      <h2>What's on your mind Today?</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div><img src={biryani} alt="Biryani" width={100} /><p>Biryani</p></div>
        <div><img src={burger} alt="Burger" width={100} /><p>Burger</p></div>
        <div><img src={cake} alt="Cake" width={100} /><p>Cake</p></div>
        <div><img src={chinese} alt="Chinese" width={100} /><p>Chinese</p></div>
        <div><img src={icecream} alt="Ice Cream" width={100} /><p>Ice Cream</p></div>
        <div><img src={idli} alt="Idli" width={100} /><p>Idli</p></div>
        <div><img src={kebabs} alt="Kebabs" width={100} /><p>Kebabs</p></div>
        <div><img src={momo} alt="Momo" width={100} /><p>Momo</p></div>
        <div><img src={noodles} alt="Noodles" width={100} /><p>Noodles</p></div>
        <div><img src={north_indian} alt="North Indian" width={100} /><p>North Indian</p></div>
        <div><img src={paratha} alt="Paratha" width={100} /><p>Paratha</p></div>
        <div><img src={pasta} alt="Pasta" width={100} /><p>Pasta</p></div>
        <div><img src={pav_bhaji} alt="Pav Bhaji" width={100} /><p>Pav Bhaji</p></div>
        <div><img src={pizza} alt="Pizza" width={100} /><p>Pizza</p></div>
        <div><img src={rolls} alt="Rolls" width={100} /><p>Rolls</p></div>
        <div><img src={shakes} alt="Shakes" width={100} /><p>Shakes</p></div>
        <div><img src={shawarma} alt="Shawarma" width={100} /><p>Shawarma</p></div>
        <div><img src={south_indian} alt="South Indian" width={100} /><p>South Indian</p></div>
        <div><img src={starters} alt="Starters" width={100} /><p>Starters</p></div>
        <div><img src={wings} alt="Wings" width={100} /><p>Wings</p></div>
      </div>

    </div>
  );
}

export default OffersBanner;
