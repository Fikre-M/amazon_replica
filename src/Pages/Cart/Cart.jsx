import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import styles from "./Cart.module.css";
import CurrencyFormat from "../../Components/CurrencyFormat/CurencyFormater";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { Type } from "../../Utility/action.type";
import {KeyboardArrowUp, KeyboardArrowDown} from "@mui/icons-material";



function Cart() {
  const [state, dispatch] = useContext(DataContext); 
  const { basket, user } = state; 

  const total = basket.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );

  const incrementQuantity = (id) => {
    if (dispatch) {
      dispatch({ type: Type.INCREMENT_QUANTITY, id });
    }
  };

  const decrementQuantity = (id) => {
    if (dispatch) {
      dispatch({ type: Type.DECREMENT_QUANTITY, id });
    }
  };

  return (
    <Layout>
      <section className={styles.cart_container}>
        <div className={styles.cart_header}>
          <h2>Hello{user ? `, ${user.email}` : ""}!</h2>
          <h3>Your shopping basket</h3>
        </div>
        <hr />

        <div className={styles.cart_layout}>
          <div className={styles.cart_items}>
            {basket.length === 0 ? (
              <p>Oops! No items in your cart</p>
            ) : (
              basket.map((item) => (
                <div key={item.id} className={styles.cart_item}>
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cart_item_image}
                  />
                  {/* Product Details */}
                  <div className={styles.cart_item_details}>
                    <h4 className={styles.cart_item_title}>{item.title}</h4>
                    <p className={styles.cart_item_description}>
                      {item.description}
                    </p>
                    <div className={styles.cart_item_rating}>
                      <Rating
                        value={item.rating.rate}
                        precision={0.1}
                        readOnly
                      />
                      <span>({item.rating.count})</span>
                    </div>
                    <p className={styles.cart_item_price}>
                      Price: <CurrencyFormat amount={item.price} />
                    </p>
                  </div>
                  <div className={styles.quantity_control}>
                    <button onClick={() => incrementQuantity(item.id)}>
                      <KeyboardArrowUp />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => decrementQuantity(item.id)}>
                      <KeyboardArrowDown />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.cart_summary}>
            <h3>
              Subtotal (
              {basket.reduce((total, item) => total + item.quantity, 0)} items):
              <CurrencyFormat amount={total} />
            </h3>
            <div className={styles.cart_gift}>
              <input type="checkbox" id="gift" />
              <label htmlFor="gift">This order contains a gift</label>
            </div>
            <Link to="/payments" className={styles.checkout_button}>
              Continue to checkout
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;