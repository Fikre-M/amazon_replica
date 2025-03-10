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



















// using fetch method 


// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import classes from "./product.module.css";
// import { Oval } from "react-loader-spinner";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     setError(null);

//     fetch('https://fakestoreapi.com/products')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.text();
//       })
//       .then(text => {
//         try {
//           const data = JSON.parse(text);
//           setProducts(data);
//         } catch (e) {
//           console.error("Received non-JSON response:", text.substring(0, 100));
//           throw new Error("The server response was not valid JSON");
//         }
//       })
//       .catch(error => {
//         console.error("Error:", error);
//         setError(error.message);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <>
//       {isLoading ? (
//         <div className={classes.loader_container}>
//           <Oval color="#36d7b7" height={80} width={80} />
//         </div>
//       ) : (
//         <section className={classes.products_container}>
//           {products?.map((singleProduct) => (
//             <ProductCard product={singleProduct} key={singleProduct.id} />
//           ))}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;
