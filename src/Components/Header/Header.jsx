import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import classes from "./Header.module.css";
import { DataContext } from "../DataProvider/Dataprovider";
import LowerHeader from "../LowerHeader/LowerHeader";
import { auth } from "../../Utility/firebase";


const Header = () => {

  const [state] = useContext(DataContext);
  const { basket, user } = state;

  return (
    <>
      <header className={classes.header}>
        {/* Top Section */}
        <section className={classes.header_top}>
          {/* Logo */}
          <div className={classes.header_logo}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
          </div>

          {/* Delivery Location */}
          <div className={classes.header_deliver}>
            <FaMapMarkerAlt className={classes.header_icon} />
            <div>
              <p className={classes.header_deliver_text}>Deliver to</p>
              <span className={classes.header_location}>
                Update Location
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.header_search}>
            <select className={classes.header_search_category}>
              <option value="all">All</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              className={classes.header_search_input}
            />
            <button className={classes.header_search_button}>
              <IoSearchSharp />
            </button>
          </div>

          {/* Language Selector */}
          <div className={classes.header_language}>
            <img src="/images/usa.png" alt="Language" />
            <select className={classes.header_language_select}>
              <option value="en">EN</option>
            </select>
          </div>

          {/* Account & Orders */}
          <Link to={!user && "/auth"} className={classes.header_account}>
            <div>
              {user ? (
                <>
                  <p>Hello {user?.email?.split("@")[0]}</p>
                  <span onClick={() => auth.signOut()}>Sign Out</span>
                </>
              ) : (
                <>
                  <p>Hello, sign in</p>
                  <span>Account & Lists</span>
                </>
              )}
            </div>
          </Link>

          <Link to="/orders" className={classes.header_account}>
            <p>Returns</p>
            <span>& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className={classes.header_cart}>
            <FaShoppingCart className={classes.header_icon} />
            <span className={classes.cart_count}>{basket.length}</span>
          </Link>
        </section>
      </header>
      <LowerHeader />
    </>
  );
};

export default Header;


















