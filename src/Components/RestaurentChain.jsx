create a code like this
no ila undali name srestarnts list names and location name 
import React from 'react'
import './RestaurentChain.css'

function RestaurentChain() {
  const restaurants = [
    {
      name: "Mnadhavi Grand",
      specialty: "Biryani",
      rating: 4.5,
      offer: "15% OFF UPTO ₹50",
      img: "https://via.placeholder.com/660x400?text=Mnadhavi+Grand",
      location: "Mancherial"
    },
    {
      name: "Cakezone",
      specialty: "Cakes",
      rating: 4.3,
      offer: "Buy 1 Get 1 Free",
      img: "https://via.placeholder.com/660x400?text=Cakezone",
      location: "Mancherial"
    },
    {
      name: "Piizza",
      specialty: "Dominos Pizza",
      rating: 4.2,
      offer: "20% OFF UPTO ₹100",
      img: "https://via.placeholder.com/660x400?text=Piizza+Dominos",
      location: "Mancherial"
    },
    {
      name: "Vantillu",
      specialty: "Vegetarian",
      rating: 4.0,
      offer: "Free Delivery",
      img: "https://via.placeholder.com/660x400?text=Vantillu+Veg",
      location: "Mancherial"
    },
    {
      name: "NorthINN",
      specialty: "All Food Items",
      rating: 4.4,
      offer: "10% OFF UPTO ₹60",
      img: "https://via.placeholder.com/660x400?text=NorthINN",
      location: "Mancherial"
    },
    {
      name: "Gajanad",
      specialty: "Sweets and Hot Dishes",
      rating: 4.1,
      offer: "Free Dessert",
      img: "https://via.placeholder.com/660x400?text=Gajanad+Sweets",
      location: "Mancherial"
    },
    {
      name: "Surabhi Grand",
      specialty: "Veg and Non-Veg",
      rating: 4.3,
      offer: "25% OFF UPTO ₹80",
      img: "https://via.placeholder.com/660x400?text=Surabhi+Grand",
      location: "Mancherial"
    },
    {
      name: "Spicy Restaurant",
      specialty: "All Food Items",
      rating: 4.2,
      offer: "Free Beverage",
      img: "https://via.placeholder.com/660x400?text=Spicy+Restaurant",
      location: "Mancherial"
    },
    {
      name: "Etc Etc Restaurants",
      specialty: "Variety of Cuisines",
      rating: 4.0,
      offer: "",
      img: "https://via.placeholder.com/660x400?text=Etc+Etc+Restaurants",
      location: "Mancherial"
    },
    // Added only one restaurant here as per your instruction
    {
      name: "Foodcrave Special",
      specialty: "Fusion Cuisine",
      rating: 4.6,
      offer: "Exclusive 20% OFF",
      img: "https://via.placeholder.com/660x400?text=Foodcrave+Special",
      location: "Mancherial"
    }
  ]

  return (
    <div className='d-flex justify-content-center align-items-center mt-5'>
      <div className='w-75'>
        <h4 className='fw-bolder'>Top restaurant chains in Mancherial - Foodcrave</h4>
        <div style={{ gap: "50px", overflowX: "auto", display: "flex", padding: "10px 0" }}>
          {restaurants.map(({ name, specialty, rating, offer, img, location }, index) => (
            <div key={index} className='Hotel-card' style={{ minWidth: "300px" }}>
              <div
                className='Hotel-Card-img'
                style={{
                  backgroundImage: `url(${img})`,
                  height: "180px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  borderRadius: "8px"
                }}
              >
                {offer && (
                  <div
                    className='Hotel-color'
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#20963a",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontWeight: "700",
                      fontSize: "14px"
                    }}
                  >
                    {offer}
                  </div>
                )}
              </div>
              <h5 className='mt-3'>{name}</h5>
              <i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> {rating.toFixed(1)}
              <p style={{ fontWeight: "300" }}>
                {specialty} <br />{location}
              </p>
            </div>
          ))}
        </div>
        <hr style={{ width: "100%", marginTop: "20px" }} />
      </div>
    </div>
  )
}

export default RestaurentChain
