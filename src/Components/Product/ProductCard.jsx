import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormatter from "../CurrencyFormat/CurencyFormater";
import styles from "./product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/Dataprovider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;
  const [, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { id, image, title, rating, price },
    });
  };

  return (
    <div className={styles.card_container}>
      <Link to={`/product/${id}`}>
        <img
          loading="lazy"
          src={image}
          alt={title}
          className={styles.product_image}
        />
      </Link>
      <div className={styles.product_info}>
        <h3 className={styles.product_title}>{title}</h3>
        <div className={styles.rating}>
          <Rating value={rating.rate} precision={0.1} readOnly />
          <small>{rating.count}</small>
        </div>
        <div className={styles.product_price}>
          <CurrencyFormatter amount={price} />
        </div>
        <button className={styles.button} onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;













































// import React, { useContext } from "react";
// import { Rating } from "@mui/material";
// import CurrencyFormatter from "../CurrencyFormat/CurencyFormater";
// import styles from "./product.module.css"; 
// import { Link } from "react-router-dom";
// import { DataContext } from "../DataProvider/Dataprovider";
// import { Type } from "../../Utility/action.type";

// function ProductCard({ product }) {
//     const { image, title, id, rating, price } = product;
//     // 12 useContext
//     const [state, dispatch] = useContext(DataContext);


//     // 12 useContext
    
//     const addToCart = () => {
//       dispatch({
//         type: Type.Add_TO_BASKET, 
//         // Use Type.Add_TO_BASKET instead of Add_TO_BASKET
//         item: { image, title, id, rating, price },
//       });
//     };

//     // 12 use context end


//     return (
//         <div className={styles.card_container}>
//         <Link to={`/product/${id}`}>
//             {/* <img src={image} alt={title} className={styles.product_image} /> */}
//             {/* this is for a better performance */}
//             <img loading="lazy" src={image} alt={title} className={styles.product_image} />

//         </Link>
//         <div className={styles.product_info}>
//             <h3 className={styles.product_title}>{title}</h3>
//             <div className={styles.rating}>
//             {/* Rating */}
//             <Rating value={rating.rate} precision={0.1} />
//             {/* Count */}
//             <small>{rating.count}</small>
//             </div>
//             <div className={styles.product_price}>
//             {/* Price */}
//             <CurrencyFormatter amount={price} />
//             </div>
//             <button className={styles.button} onClick={addToCart}>
//                 {/* 12 again buton add onclick creat addToCart function*/}
//                 Add to Cart
//                 </button>
//         </div>
//         </div>
//     );
// }

// export default ProductCard;






