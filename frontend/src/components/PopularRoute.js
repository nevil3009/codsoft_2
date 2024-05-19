import React from "react";
import '../styles/HomeScreen.css'
export default function PopularRoute() {

  const imgProperty = {width: '250px', height:'200px', 'object-fit': 'contain'};


  return (
    <div className="best-route-container">
      <h2 style={{color: "black", fontFamily: "poppins"}}>Popular Flight Routes</h2>
      <div className="popular-flight-routes-container">
        <div className="popular-flight-routes">
          <div className="popular-flight-route-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOZP8OFE_58y14OdxlgI468H4QDaWDZd6GOZ9W6k1UQ&s"
              alt="image" className="imgg"
              style={imgProperty}
            />
          </div>
          <div className="popular-flight-route-detail">
            <h3>Pune Flights</h3>
            <h4>
              <span>from</span> Goa,Delhi,Bangalore
            </h4>
          </div>
        </div>
        <div className="popular-flight-routes">
          <div className="popular-flight-route-image">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/29/full/1596046429-1041.jpg?im=FeatureCrop,size=(803,452)"
              alt="image" className="imgg"
              style={imgProperty}
            />
          </div>
          <div className="popular-flight-route-detail">
            <h3>Delhi Flights</h3>
            <h4>
              <span>from</span> Banglore,Mumbai,Chennai
            </h4>
          </div>
        </div>
        <div className="popular-flight-routes">
          <div className="popular-flight-route-image">
            <img
              src="https://curlytales.com/wp-content/uploads/2024/04/vistara-3.jpg"
              alt="image" className="imgg"
              style={imgProperty}
            />
          </div>
          <div className="popular-flight-route-detail">
            <h3>Mumbai Flights</h3>
            <h4>
              <span>from</span> Goa,Delhi,Bangalore
            </h4>
          </div>
        </div>    
        <div className="popular-flight-routes">
          <div className="popular-flight-route-image">
            <img
              src="https://cdn.zeebiz.com/sites/default/files/2019/11/05/104767-scoot-zeebiz.jpg"
              alt="image" className="imgg"
              style={imgProperty}
            />
          </div>
          <div className="popular-flight-route-detail">
            <h3>Chennai Flights</h3>
            <h4>
              <span>from</span> Bangalore,Mumbai,Nagpur
            </h4>
          </div>
        </div>
        <div className="popular-flight-routes">
          <div className="popular-flight-route-image">
            <img
              src="https://www.financialexpress.com/wp-content/uploads/2019/02/air-asia.jpg?w=350"
              alt="image" className="imgg"
              style={imgProperty}
            />
          </div>
          <div className="popular-flight-route-detail">
            <h3>Indore Flights</h3>
            <h4>
              <span>from</span> Banglore,Nagpur
            </h4>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
