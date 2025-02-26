import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import classes from "./Orders.module.css";
import { db } from "../../Utility/firebase";
import { DataContext } from "../../Components/DataProvider/Dataprovider";
import ProductCard from "../../Components/Product/ProductCard";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"; // Import Firestore methods

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) {
      setOrders([]);
      return;
    }

    // Firestore Query
    const ordersRef = collection(db, "users", user.uid, "orders");
    const ordersQuery = query(ordersRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(ordersQuery, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [user]); // Added user as a dependency

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {orders.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            orders.map((eachOrder) => (
              <div key={eachOrder.id} className={classes.order}>
                <hr />
                <p>
                  <strong>Order ID:</strong> {eachOrder.id}
                </p>
                <div className={classes.order_items}>
                  {eachOrder.data.basket?.map((orderItem) => (
                    <ProductCard
                      key={orderItem.id}
                      product={orderItem}
                      flex={true}
                    />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Orders;









// import React, {useContext, useState, useEffect} from 'react';
// import Layout from '../../Components/Layout/Layout';
// import './Orders.module.css';
// import { db } from '../../Utility/firebase';
// import { DataContext } from '../../Components/DataProvider/Dataprovider';
// import ProductCard from '../../Components/Product/ProductCard';

// function Orders () {

//   const [{ user }, dispatch] = useContext(DataContext);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     if (user) {
//       db.collection('users')
//         .doc(user.uid)
//         .collection('orders')
//         .orderBy('created', 'desc')
//         .onSnapshot((snapshot) => {
//       // console.log(snapshot);
//           setOrders(
//             snapshot.docs.map((doc) => ({
//               id: doc.id,
//               data: doc.data()
//             }))
//           );
//         });
//     } else {
//       setOrders([]);
//     }
//   }, []);

//   return (
//     <Layout>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h2>Your Orders</h2>
//           {/* ordered items */}
//           <div>
//             {orders?.map((eachOrder, i) => {

//               return (
//                 <div key={i}>
//                   <hr />
//                   <p>Order ID: {eachOrder?.id}</p>
//                   {
//                     eachOrder?.data?.basket?.map(order => (
//                       <ProductCard flex={true} product={order.id} key={order.id}/>
//                                         ))}
//                                     </div>
//                                   );
//                                 })}
//                               </div>
//                             </div>
//                           </section>
//                         </Layout>
//                       );
//                     }
//                 </div>
//                   );
//                 </div>
//               </div>
//       </section>
//     </Layout>
//   );
// }

// export default Orders;
