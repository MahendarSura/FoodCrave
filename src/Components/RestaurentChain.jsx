import React from 'react'
import './RestaurentChain.css'

function RestaurentChain() {
    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bolder'>Top restaurant chains in Mancherial - Foodcrave</h4>
                <div style={{ gap: "50px", overflowY: "scroll" }} className='d-flex align-items-center'>

                    {/* Madhavi Grand */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Madhavi+Grand)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>15% OFF UPTO ₹50</h4></div>
                        </div>
                        <h5 className='mt-3'>Madhavi Grand</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.5
                        <p style={{ fontWeight: "300" }}>Biryani<br />Mancherial</p>
                    </div>

                    {/* Cakezone */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Cakezone)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>Buy 1 Get 1 Free</h4></div>
                        </div>
                        <h5 className='mt-3'>Cakezone</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.3
                        <p style={{ fontWeight: "300" }}>Cakes<br />Mancherial</p>
                    </div>

                    {/* Piizza */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Piizza+Dominos)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>20% OFF UPTO ₹100</h4></div>
                        </div>
                        <h5 className='mt-3'>Piizza</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.2
                        <p style={{ fontWeight: "300" }}>Dominos Pizza<br />Mancherial</p>
                    </div>

                    {/* Vantillu */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Vantillu+Veg)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>Free Delivery</h4></div>
                        </div>
                        <h5 className='mt-3'>Vantillu</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.0
                        <p style={{ fontWeight: "300" }}>Vegetarian<br />Mancherial</p>
                    </div>

                    {/* NorthINN */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=NorthINN)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>10% OFF UPTO ₹60</h4></div>
                        </div>
                        <h5 className='mt-3'>NorthINN</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.4
                        <p style={{ fontWeight: "300" }}>All Food Items<br />Mancherial</p>
                    </div>

                    {/* Gajanad */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Gajanad+Sweets)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>Free Dessert</h4></div>
                        </div>
                        <h5 className='mt-3'>Gajanad</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.1
                        <p style={{ fontWeight: "300" }}>Sweets and Hot Dishes<br />Mancherial</p>
                    </div>

                    {/* Surabhi Grand */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Surabhi+Grand)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>25% OFF UPTO ₹80</h4></div>
                        </div>
                        <h5 className='mt-3'>Surabhi Grand</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.3
                        <p style={{ fontWeight: "300" }}>Veg and Non-Veg<br />Mancherial</p>
                    </div>

                    {/* Spicy Restaurant */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Spicy+Restaurant)`
                        }} className='Hotel-Card-img'>
                            <div className='Hotel-color'><h4 className='fw-bolder'>Free Beverage</h4></div>
                        </div>
                        <h5 className='mt-3'>Spicy Restaurant</h5>
                        <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i>4.2
                        <p style={{ fontWeight: "300" }}>All Food Items<br />Mancherial</p>
                    </div>

                    {/* KFC */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=KFC)`
                        }} className='Hotel-Card-img'>
                        </div>
                        <h5 className='mt-3'>KFC</h5>
                        <p style={{ fontWeight: "300" }}>Burger<br />Mancherial</p>
                    </div>

                    {/* Bommarillu Ruchulu */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Bommarillu+Ruchulu)`
                        }} className='Hotel-Card-img'>
                        </div>
                        <h5 className='mt-3'>Bommarillu Ruchulu</h5>
                        <p style={{ fontWeight: "300" }}>Tiffins<br />Mancherial</p>
                    </div>

                    {/* Grill Theary Restaurant */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Grill+Theary+Restaurant)`
                        }} className='Hotel-Card-img'>
                        </div>
                        <h5 className='mt-3'>Grill Theary Restaurant</h5>
                        <p style={{ fontWeight: "300" }}>Rolls<br />Mancherial</p>
                    </div>

                    {/* Touch Fast Food */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Touch+Fast+Food)`
                        }} className='Hotel-Card-img'>
                        </div>
                        <h5 className='mt-3'>Touch Fast Food</h5>
                        <p style={{ fontWeight: "300" }}>Noodles<br />Mancherial</p>
                    </div>

                    {/* Kitchen Kings */}
                    <div className='Hotel-card'>
                        <div style={{
                            backgroundImage: `url(https://via.placeholder.com/660x400?text=Kitchen+Kings)`
                        }} className='Hotel-Card-img'>
                        </div>
                        <h5 className='mt-3'>Kitchen Kings</h5>
                        <p style={{ fontWeight: "300" }}>Fried Rice<br />Mancherial</p>
                    </div>
                </div>
                <hr style={{ width: "100%", marginTop: "-50px" }} />
            </div>
        </div>
    )
}

export default RestaurentChain
