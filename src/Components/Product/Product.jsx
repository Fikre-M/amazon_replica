import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import { Oval } from "react-loader-spinner";

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={classes.loader_container}>
          <Oval color="#36d7b7" height={80} width={80} />
        </div>
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
          ))}
        </section>
      )}
    </>
  );
}

export default Product;






















// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import ProductCard from './ProductCard'
// import classes from "./product.module.css";
// import { FadeLoader } from "react-loader-spinner";


// function Product() {
//     const [products, setProducts] = useState([])
//     const [isLoading, setIsLoading] = useState(false);
    
//     useEffect(() => {
//       axios
//         .get("https://fakestoreapi.com/products")
//         .then((res) => setProducts(res.data))
//         setIsLoading(false)
//         .catch((err) => console.error("Error fetching products:", err));
//         isLoading(false)
//     }, []);

//   return (
//     <>
//     {
//       isLoading ? (<Loader />) : ( <section className={classes.products_container}>
//     {
//         products?.map((singleProduct) => {
//           return <ProductCard product={singleProduct} key={singleProduct.id} />;
//         })
//       }
//       </section>)
//     }
//     </>
//   );
// }

// export default Product






