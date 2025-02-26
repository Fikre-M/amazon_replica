import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Payment.module.css";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import ProductCard from "../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormatter from "../../Components/CurrencyFormat/CurencyFormater";
import { axiosInstance } from "../../API/axios";
import { db } from "../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import Cliploader from "react-spinners/ClipLoader";
import { doc, setDoc, collection } from "firebase/firestore"; 

const Payment = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const navigate = useNavigate(); // Fixed useNavigate

  const totalItem =
    basket?.reduce((amount, item) => {
      return amount + (item.amount || 1); // Default to 1 if amount is missing
    }, 0) || 0;

  const total =
    basket?.reduce((amount, item) => {
      return amount + item.price * (item.amount || 1); // Ensure amount is always valid
    }, 0) || 0;
     console.log("Basket Contents:", basket); 


  const [carderror, setCarderror] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    setCarderror(event.error?.message || "");
  };


  const handlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    try {
      setProcessing(true);

      // Step 1: Create Payment Intent
      const response = await axiosInstance.post(
        `/payments/create?total=${total * 100}`
      );
      const clientSecret = response.data?.clientSecret;

      // Step 2: Confirm Payment with Stripe
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      console.log("Payment successful! Storing order in Firestore...");

      // Step 3: Save Order in Firestore
      const orderRef = doc(
        collection(db, "users", user?.uid, "orders"),
        paymentIntent.id
      );
      await setDoc(orderRef, {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });

      console.log("Order saved in Firestore!");

      // Step 4: Clear Basket After Payment
      dispatch({ type: "EMPTY_BASKET" });

      // Step 5: Navigate to Orders Page
      navigate("/orders", {
        state: { msg: "You have successfully placed your order" },
      });

      setProcessing(false);
    } catch (error) {
      console.error("Payment Error:", error);
      setProcessing(false);
    }
  };

  return (
    <Layout>
      {/* Header */}
      <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

      {/* Payment Section */}
      <section className={classes.payment}>
        {/* Delivery Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Manhattan, NY</div>
          </div>
        </div>
        <hr />

        {/* Review Items */}
        <div className={classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* Payment Form */}
        <div className={classes.flex}>
          <h3>Payment Methods</h3>
          <div className={classes.payment_card_container}>
            <div className={classes.payment_details}>
              <form onSubmit={handlePayment}>
                {/* Card Error Message */}
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}

                {/* Card Element */}
                <CardElement onChange={handleChange} />

                {/* Total Price */}
                <div className={classes.payment_price}>
                  <span style={{ display: "flex", gap: "8px" }}>
                    <p>Total Order | </p>
                    <CurrencyFormatter amount={total} />
                  </span>

                  <button type="submit" disabled={processing}>
                    {processing ? (
                      <div className={classes.loading}>
                        <Cliploader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payment;




// import React, { useContext, useState, useMemo } from "react";
// import Layout from "../../Components/Layout/Layout";
// import classes from "./Payment.module.css";
// import { DataContext } from "../../Components/DataProvider/Dataprovider";
// import ProductCard from "../../Components/Product/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormatter from "../../Components/CurrencyFormat/CurencyFormater";
// import { axiosInstance } from "../../API/axios";
// import { db } from "../../Utility/firebase";
// import { useNavigate } from "react-router-dom";
// import Cliploader from "react-spinners/ClipLoader";
// import { doc, setDoc, collection } from "firebase/firestore";

// const Payment = () => {
//   const [{ user, basket }, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();
//   const stripe = useStripe();
//   const elements = useElements();

//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   // Use useMemo to optimize basket calculations
//   const totalItem = useMemo(
//     () => basket?.reduce((amount, item) => amount + (item.amount || 1), 0) || 0,
//     [basket]
//   );

//   const total = useMemo(
//     () =>
//       basket?.reduce(
//         (amount, item) => amount + item.price * (item.amount || 1),
//         0
//       ) || 0,
//     [basket]
//   );

//   console.log("Basket Contents:", basket);

//   // Handle Card Input Changes
//   const handleChange = (event) => {
//     setCardError(event.error?.message || "");
//   };

//   // Handle Payment Submission
//   const handlePayment = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;

//     try {
//       setProcessing(true);

//       // Step 1: Create Payment Intent
//       const { data } = await axiosInstance.post(
//         `/payments/create?total=${total * 100}`
//       );
//       const clientSecret = data?.clientSecret;

//       if (!clientSecret) {
//         throw new Error("Failed to fetch client secret.");
//       }

//       // Step 2: Confirm Payment with Stripe
//       const { paymentIntent, error } = await stripe.confirmCardPayment(
//         clientSecret,
//         {
//           payment_method: { card: elements.getElement(CardElement) },
//         }
//       );

//       if (error) {
//         throw new Error(error.message);
//       }

//       console.log("Payment successful! Storing order in Firestore...");

//       // Step 3: Save Order in Firestore
//       const orderRef = doc(
//         collection(db, "users", user?.uid, "orders"),
//         paymentIntent.id
//       );
//       await setDoc(orderRef, {
//         basket,
//         amount: paymentIntent.amount,
//         created: paymentIntent.created,
//       });

//       console.log("Order saved in Firestore!");

//       // Step 4: Clear Basket and Navigate
//       dispatch({ type: "CLEAR_BASKET" });
//       navigate("/orders", {
//         state: { msg: "You have successfully placed your order" },
//       });
//     } catch (error) {
//       console.error("Payment Error:", error);
//       setCardError(error.message);
//     } finally {
//       setProcessing(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className={classes.payment_header}>Checkout ({totalItem}) items</div>

//       <section className={classes.payment}>
//         {/* Delivery Address */}
//         <div className={classes.flex}>
//           <h3>Delivery Address</h3>
//           <div>
//             <div>{user?.email}</div>
//             <div>123 React Lane</div>
//             <div>Manhattan, NY</div>
//           </div>
//         </div>
//         <hr />

//         {/* Review Items */}
//         <div className={classes.flex}>
//           <h3>Review Items and Delivery</h3>
//           <div>
//             {basket?.map((item) => (
//               <ProductCard key={item.id} product={item} flex />
//             ))}
//           </div>
//         </div>
//         <hr />

//         {/* Payment Form */}
//         <div className={classes.flex}>
//           <h3>Payment Methods</h3>
//           <div className={classes.payment_card_container}>
//             <div className={classes.payment_details}>
//               <form onSubmit={handlePayment}>
//                 {/* Card Error Message */}
//                 {cardError && (
//                   <small style={{ color: "red" }}>{cardError}</small>
//                 )}

//                 <CardElement onChange={handleChange} />

//                 {/* Total Price */}
//                 <div className={classes.payment_price}>
//                   <span style={{ display: "flex", gap: "8px" }}>
//                     <p>Total Order | </p>
//                     <CurrencyFormatter amount={total} />
//                   </span>

//                   <button type="submit" disabled={processing}>
//                     {processing ? (
//                       <div className={classes.loading}>
//                         <Cliploader color="gray" size={12} />
//                         <p>Please Wait ...</p>
//                       </div>
//                     ) : (
//                       "Pay Now"
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Payment;
