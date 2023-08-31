import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Login",
  link4Text: "Search",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/login",
  link4Url: "/search",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;


// import React, { useState } from "react";
// import "./navbar.css";
// import {
//   FaFacebookSquare,
//   FaInstagramSquare,
//   FaYoutubeSquare,
// } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [showMediaIcons, setShowMediaIcons] = useState(false);
//   return (
//     <>
//       <nav className="main-nav">
//         {/* 1st logo part  */}
//         <div className="logo">
//           <h2>
//             <span>E</span>commerce
//           </h2>
//         </div>

//         {/* 2nd menu part  */}
//         <div
//           className={
//             showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
//           }>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/products">Products</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">about</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">contact</NavLink>
//             </li>
//           </ul>
//         </div>

//         {/* 3rd social media links */}
//         <div className="social-media">
//           <ul className="social-media-desktop">
//              <li>
//               <NavLink to="/login">login</NavLink>
//             </li>
//             <li>
//               <NavLink to="/cart">Cart</NavLink>
//             </li>
//              <li>
//               <NavLink to="/search">Search</NavLink>
//             </li>
//           </ul>

//           {/* hamburget menu start  */}
//           <div className="hamburger-menu">
//             <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
//               <GiHamburgerMenu />
//             </a>
//           </div>
//         </div>
//       </nav>

//       {/* hero section  */}
//       {/* <section className="hero-section">
//         <p>Welcome to </p>
//         <h1>Thapa Technical</h1>
//       </section> */}
//     </>
//   );
// };

// export default Navbar;