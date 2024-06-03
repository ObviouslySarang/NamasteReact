import React from "react";
import ReactDom from "react-dom/client";

/**
 * Header
 *   -logo
 *   -nav items
 * Body
 *    -Search
 *    -RestaurantContainer
 *       --restraunt card
 * Footer
 *      -copyright
 *      -links
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pizza_slice_icon.png/120px-Pizza_slice_icon.png" />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About us </li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Rescard = (props)=>(
  <div className="rescard">
    <img alt="restraunt-img" className="res-img" src="https://b.zmtcdn.com/data/pictures/3/19733663/6671b708c3454a79a31cc44f7454f44b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"></img>
    
    <center><h3>{props.name}</h3></center>
  </div>
);

const Body = ()=> (
  <div className="body">
    <div className="search">Search</div>
    <div className="resContainer">
        <Rescard name="ZAUK"/>
        <Rescard name="mera_pizza"/>
        <Rescard name="D wood"/>
        <Rescard name="Royal Kitchen"/>
      
    </div>
  </div>
);

const Applayout = () => (
  <div className="app">
    <Header/>
    <Body/>
  </div>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Applayout/>);
