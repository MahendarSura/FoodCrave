import React from 'react';
import './RestaurentChain.css';

function RestaurentChain() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='w-75'>
        <h4 className='fw-bolder'>Top restaurant chains in Mancherial - FoodCrave</h4>
        <div style={{ gap: "50px", overflowY: "scroll" }} className='d-flex align-items-center'>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Madhavi_Grand_image_sample.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>15% OFF UPTO ₹50</h4></div>
            </div>
            <h5 className='mt-3'>Madhavi Grand</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.5
            <p style={{ fontWeight: "300" }}>Biryani<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Cakezone_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Buy 1 Get 1 Free</h4></div>
            </div>
            <h5 className='mt-3'>Cakezone</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.3
            <p style={{ fontWeight: "300" }}>Cakes<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/KFC_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>20% OFF UPTO ₹100</h4></div>
            </div>
            <h5 className='mt-3'>KFC</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.2
            <p style={{ fontWeight: "300" }}>KFC Chicken<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Vantillu_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Free Delivery</h4></div>
            </div>
            <h5 className='mt-3'>Vantillu</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.0
            <p style={{ fontWeight: "300" }}>Vegetarian<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/NorthINN_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>10% OFF UPTO ₹60</h4></div>
            </div>
            <h5 className='mt-3'>NorthINN</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4
            <p style={{ fontWeight: "300" }}>All Food Items<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Gajanand_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Free Dessert</h4></div>
            </div>
            <h5 className='mt-3'>Gajanand</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.1
            <p style={{ fontWeight: "300" }}>Sweets and Hot Dishes<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Surabhi_Grand_image_sample.jpg)
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>25% OFF UPTO ₹80</h4></div>
            </div>
            <h5 className='mt-3'>Surabhi Grand</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.3
            <p style={{ fontWeight: "300" }}>Veg and Non-Veg<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/_image_sample.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Free Beverage</h4></div>
            </div>
            <h5 className='mt-3'>Spicy Restaurant</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.2
            <p style={{ fontWeight: "300" }}>All Food Items<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Reddy_Mess_image_sample.jpg)`
            }} className='Hotel-Card-img'>
            </div>
            <h5 className='mt-3'>Reddy Mess</h5>
            <p style={{ fontWeight: "300" }}>Veg & Nonveg Rice<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Bommarillu_Ruchulu_image_sample.jpg)`
            }} className='Hotel-Card-img'>
            </div>
            <h5 className='mt-3'>Bommarillu Ruchulu</h5>
            <p style={{ fontWeight: "300" }}>Tiffins<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Grill_Theory_image_sample.jpg)`
            }} className='Hotel-Card-img'>
            </div>
            <h5 className='mt-3'>Grill Theary Restaurant</h5>
            <p style={{ fontWeight: "300" }}>Rolls<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/Touch_FastFood_image_sample.jpg)`
            }} className='Hotel-Card-img'>
            </div>
            <h5 className='mt-3'>Touch Fast Food</h5>
            <p style={{ fontWeight: "300" }}>Noodles<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/)`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/sai_Kitchen_Kings_image_sample.jpg)`
            }} className='Hotel-Card-img'>
            </div>
            <h5 className='mt-3'>Kitchen Kings</h5>
            <p style={{ fontWeight: "300" }}>Fried Rice<br />Mancherial</p>
          </div>


          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/sai_madhavi_image_sample.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Special Meals</h4></div>
            </div>
            <h5 className='mt-3'>Sai Madhavi</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.3
            <p style={{ fontWeight: "300" }}>Veg and Non-Veg Meals<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/`foodcrave/image/upload/fl_lossy,f_auto,q_auto,w_660/surabhi_grand_biryani.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>25% OFF on Starters</h4></div>
            </div>
            <h5 className='mt-3'>Surabhi Grand</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4
            <p style={{ fontWeight: "300" }}>Biryani and All Starters<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/`foodcraveimage/upload/fl_lossy,f_auto,q_auto,w_660/nawab_mandi_house.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>Best Mandi Biryani</h4></div>
            </div>
            <h5 className='mt-3'>Nawab Mandi House</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.2
            <p style={{ fontWeight: "300" }}>Mandi Biryani<br />Mancherial</p>
          </div>

          <div className='Hotel-card'>
            <div style={{
              backgroundImage: `url(https://foodcrave.com/`foodcraveimage/upload/fl_lossy,f_auto,q_auto,w_660/dominos_pizza.jpg)`
            }} className='Hotel-Card-img'>
              <div className='Hotel-color'><h4 className='fw-bolder'>20% OFF UPTO ₹100</h4></div>
            </div>
            <h5 className='mt-3'>Domino's</h5>
            <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.3
            <p style={{ fontWeight: "300" }}>Pizza<br />Mancherial</p>
          </div>

        </div>
        <hr style={{ width: "100%", marginTop: "-50px" }} />
      </div>
    </div>
  )
}

export default RestaurentChain;
