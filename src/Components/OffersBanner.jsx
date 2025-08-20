import React from 'react';

// Import banner images from src/Photos/
import banner1 from '../Photos/Banner1.png';
import banner2 from '../Photos/Banner2.png';
import banner3 from '../Photos/Banner3.png';
import banner4 from '../Photos/Banner4.png';

// Import category images from src/Categories/
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

const banners = [banner1, banner2, banner3, banner4];

const categories = [
  { img: biryani, name: 'Biryani' },
  { img: burger, name: 'Burger' },
  { img: cake, name: 'Cake' },
  { img: chinese, name: 'Chinese' },
  { img: icecream, name: 'Ice Cream' },
  { img: idli, name: 'Idli' },
  { img: kebabs, name: 'Kebabs' },
  { img: momo, name: 'Momo' },
  { img: noodles, name: 'Noodles' },
  { img: north_indian, name: 'North Indian' },
  { img: paratha, name: 'Paratha' },
  { img: pasta, name: 'Pasta' },
  { img: pav_bhaji, name: 'Pav Bhaji' },
  { img: pizza, name: 'Pizza' },
  { img: rolls, name: 'Rolls' },
  { img: shakes, name: 'Shakes' },
  { img: shawarma, name: 'Shawarma' },
  { img: south_indian, name: 'South Indian' },
  { img: starters, name: 'Starters' },
  { img: wings, name: 'Wings' }
];

const OffersBanner = () => {
  return (
    <div>
      <header>
        <h1>FoodCrave</h1>
        {/* Your other nav items here */}
      </header>

      <section>
        <h2>Best Offers for You</h2>
        {/* Banner Images */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {banners.map((banner, idx) => (
            <img
              key={idx}
              src={banner}
              alt={`Banner ${idx + 1}`}
              style={{ height: '150px', borderRadius: '8px', flexShrink: 0 }}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '30px' }}>
        <h2>What's on your mind Today?</h2>
        {/* Food categories with images above names */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
          {categories.map(({ img, name }) => (
            <div
              key={name}
              style={{ width: '100px', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => alert(`Clicked on ${name}`)}
            >
              <img
                src={img}
                alt={name}
                style={{ width: '80px', height: '80px', marginBottom: '8px', borderRadius: '10px' }}
              />
              <p style={{ margin: 0 }}>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* You can add other parts of the homepage below */}

    </div>
  );
};

export default OffersBanner;
