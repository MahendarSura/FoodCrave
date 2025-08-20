import React from 'react';
import banner1 from '../Photos/Banner1.png';
import banner2 from '../Photos/Banner2.png';
import banner3 from '../Photos/Banner3.png';
import banner4 from '../Photos/Banner4.png';

export default function TestImage() {
  return (
    <div>
      <h2>Testing Banner Images</h2>
      <img src={banner1} alt="Banner1" width="300" />
      <img src={banner2} alt="Banner2" width="300" />
      <img src={banner3} alt="Banner3" width="300" />
      <img src={banner4} alt="Banner4" width="300" />
    </div>
  );
}
