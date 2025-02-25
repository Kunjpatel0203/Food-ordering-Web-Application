  import { useState ,useEffect} from "react";
  import "./App.css";
  import ReactDOM from 'react-dom/client'
  import React from 'react'


  const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" 
          src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

const RestaurantCard=(props)=>{   // OR  const RestaurantCard=({resname,cuisine,rating)=>{}  and directing accesiing them in the tags with the same name  this is called destructing..

  //another way::  const RestaurantCard=(props)=>{}     const {resname,cuisine,rating}=props;
  console.log(props);
  return(
    <div className="res-card">
      <img
      className="res-logo"
      alt="res-logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1200px-Pizza-3007395.jpg"
      />
      <h3>{props.resname}</h3>     
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>20min</h4>
    </div>
  );
};

const Body=()=>{
  return(
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard resname="STellar-Kitchen" cuisine="Pizza,pasta,bread" rating="4.4"/>
        <RestaurantCard resname="Romain" cuisine="dosa,idli" rating="4.9"/>
        <RestaurantCard resname="Secret-Kitchen" cuisine="Brushetta" rating="4.2"/>
        <RestaurantCard resname="Brevities" cuisine="Cakes,pastries" rating="4.1"/>
        <RestaurantCard resname="Retro-bistro" cuisine="lazania" rating="5.0"/>
      </div>
    </div>

  );
};


  const AppLayout=()=>{
    return(
      <div className="app">
        <Header />
        <Body />
      </div>
    );
    };

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);

  export default App;
