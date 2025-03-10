import React, { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productURL } from "../../API/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import { Oval } from "react-loader-spinner";

const Results = () => {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!categoryName) return; 

    setIsLoading(true);
    axios
      .get(`${productURL}/category/${encodeURIComponent(categoryName)}`)
      .then((res) => {
        console.log("Fetched category products:", res.data);
        setResults(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching category:", err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section style={{ padding: "30px" }}>
        <h1>
          Category: {categoryName ? categoryName.toUpperCase() : "Not Found"}
        </h1>
        <hr />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <Oval
              height={80}
              width={80}
              color="#90bb8f"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#90bb8f"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <div
            className="products_container"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              padding: "20px",
            }}
          >
            {results.length > 0 ? (
              results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found in this category.</p>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Results;




















// // * trying to show the spinner 3 colors GYR

// import React, { useState, useEffect } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import ProductCard from "../../Components/Product/ProductCard";
// import { Oval } from "react-loader-spinner";

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const [colorIndex, setColorIndex] = useState(0); // Color index state

//   // Colors array for the spinner
//   const colors = ["#28a745", "#ffc107", "#dc3545"]; // Green, Yellow, Red

//   // Fetch product data when category changes
//   useEffect(() => {
//     if (!categoryName) return;

//     setIsLoading(true);
//     axios
//       .get(`${productURL}/category/${encodeURIComponent(categoryName)}`)
//       .then((res) => {
//         setResults(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching category:", err);
//         setIsLoading(false);
//       });
//   }, [categoryName]);

//   // Change color of the spinner every 1 second
//   useEffect(() => {
//     let interval;
//     if (isLoading) {
//       interval = setInterval(() => {
//         setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); // Cycle through colors
//       }, 1000); // Change color every 1 second
//     } else {
//       setColorIndex(0); // Reset color to green when loading finishes
//     }

//     // Cleanup interval on unmount or when loading finishes
//     return () => clearInterval(interval);
//   }, [isLoading]);

//   return (
//     <Layout>
//       <section style={{ padding: "30px" }}>
//         <h1>
//           Category: {categoryName ? categoryName.toUpperCase() : "Not Found"}
//         </h1>
//         <hr />
//         {isLoading ? (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "50vh",
//             }}
//           >
//             <Oval
//               height={80}
//               width={80}
//               color={colors[colorIndex]} // Dynamic color change
//               secondaryColor={colors[colorIndex]} // Same for secondary color
//               strokeWidth={2}
//               strokeWidthSecondary={2}
//               ariaLabel="oval-loading"
//             />
//           </div>
//         ) : (
//           <div
//             className="products_container"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "20px",
//               padding: "20px",
//             }}
//           >
//             {results.length > 0 ? (
//               results.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))
//             ) : (
//               <p>No products found in this category.</p>
//             )}
//           </div>
//         )}
//       </section>
//     </Layout>
//   );
// };

// export default Results;


















































































