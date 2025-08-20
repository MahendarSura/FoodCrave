import React from 'react';

const banners = [
  '/Photos/Banner1.png',
  '/Photos/Banner2.png',
  '/Photos/Banner3.png',
  '/Photos/Banner4.png',
  '/Photos/Banner5.png',

const categories = [
  { img: '/Categories/biryani.png', name: 'Biryani' },
  { img: '/Categories/burger.png', name: 'Burger' },
  { img: '/Categories/cake.png', name: 'Cake' },
  { img: '/Categories/chinese.png', name: 'Chinese' },
  { img: '/Categories/icecream.png', name: 'Ice Cream' },
  { img: '/Categories/idli.png', name: 'Idli' },
  { img: '/Categories/kebabs.png', name: 'Kebabs' },
  { img: '/Categories/momo.png', name: 'Momo' },
  { img: '/Categories/noodles.png', name: 'Noodles' },
  { img: '/Categories/north_indian.png', name: 'North Indian' },
  { img: '/Categories/paratha.png', name: 'Paratha' },
  { img: '/Categories/pasta.png', name: 'Pasta' },
  { img: '/Categories/pav_bhaji.png', name: 'Pav Bhaji' },
  { img: '/Categories/pizza.png', name: 'Pizza' },
  { img: '/Categories/rolls.png', name: 'Rolls' },
  { img: '/Categories/shakes.png', name: 'Shakes' },
  { img: '/Categories/shawarma.png', name: 'Shawarma' },
  { img: '/Categories/south_indian.png', name: 'South Indian' },
  { img: '/Categories/starters.png', name: 'Starters' },
  { img: '/Categories/wings.png', name: 'Wings' },
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
    </div>
  );
};

export default OffersBanner;
