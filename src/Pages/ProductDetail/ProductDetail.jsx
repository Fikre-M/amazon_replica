// import React, { useEffect, useState } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import { Oval } from "react-loader-spinner";
// import classes from './ProductDetail.module.css'


// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${productURL}/${productId}`) // Correct API URL
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       });
//   }, [productId]);

//   if (loading) {
//     return (
//       <Layout>
//         <p style={{ textAlign: "center", padding: "20px" }}>
//           <Oval color="#36d7b7" height={80} width={80} />
//           Loading product...
//         </p>
//       </Layout>
//     );
//   }

//   if (!product) {
//     return (
//       <Layout>
//         <p style={{ textAlign: "center", padding: "20px", color: "red" }}>
//           Product not found.
//         </p>
//       </Layout>
//     );
//   }

//   return (
//     <Layout>
//       <div style={{ display: "flex", gap: "20px", padding: "30px" }}>
//         {/* Product Image */}
//         <div>
//           <img
//             src={product.image}
//             alt={product.title}
//             style={{ width: "300px", height: "auto", objectFit: "cover" }}
//           />
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1>{product.title}</h1>
//           <p style={{ fontSize: "18px", fontWeight: "bold" }}>
//             ${product.price}
//           </p>
//           <p>{product.description}</p>
//           <p style={{ fontWeight: "bold" }}>Category: {product.category}</p>
//           <p>
//             ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
//           </p>

//           <button
//             style={{
//               padding: "10px 20px",
//               background: "#ff9900",
//               color: "white",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default ProductDetail;



// * the baove and this one is the same the one in the next dont have css only use module = i prefer to use this one. 

import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productURL } from "../../API/endpoints";
import { Oval } from "react-loader-spinner";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productURL}/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <Layout>
        <div className={classes.loadingContainer}>
          <Oval color="#36d7b7" height={80} width={80} />
          <p>Loading product...</p>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <p className={classes.errorMessage}>Product not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={classes.productDetailContainer}>
        <div className={classes.productImageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.productImage}
          />
        </div>
        <div className={classes.productInfo}>
          <h1>{product.title}</h1>
          <p className={classes.productPrice}>${product.price}</p>
          <p className={classes.productDescription}>{product.description}</p>
          <p className={classes.productCategory}>
            Category: {product.category}
          </p>
          <p className={classes.productRating}>
            ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
          </p>
          <button className={classes.addToCartButton}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail;





































// import React, { useEffect, useState } from 'react'
// // import classes from './ProductDetail.module'
// import Layout from '../../Components/Layout/Layout'
// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { productURL } from '../../API/endpoints';
// import ProductCard from '../../Components/Product/ProductCard';


// function ProductDetail() {
//     const {productId} = useParams()
//     const [product, setProduct] = useState()
//     // console.log(productId);
//     useEffect(() => {
//       axios
//         .get(`${productURL}/products/${productId}`)
//         .then((res) => {
//           setProducts(res.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, [])

//   return (
//     <Layout>
//       <ProductCard
//       product={product}
//        />
//     </Layout>
//   );
// }

// export default ProductDetail

// ********

// import React, { useEffect, useState } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import { Oval } from "react-loader-spinner";

// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get(`${productURL}/${productId}`)
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching product:", err);
//         setLoading(false);
//       });
//   }, [productId]);

//   if (loading) {
//     return (
//       <Layout>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "50vh",
//           }}
//         >
//           <Oval
//             height={80}
//             width={80}
//             color="#4fa94d"
//             wrapperStyle={{}}
//             wrapperClass=""
//             visible={true}
//             ariaLabel="oval-loading"
//             secondaryColor="#4fa94d"
//             strokeWidth={2}
//             strokeWidthSecondary={2}
//           />
//         </div>
//       </Layout>
//     );
//   }

//   if (!product) {
//     return (
//       <Layout>
//         <p style={{ textAlign: "center", padding: "20px", color: "red" }}>
//           Product not found.
//         </p>
//       </Layout>
//     );
//   }

//   // Rest of your component code...
// }

// export default ProductDetail;
