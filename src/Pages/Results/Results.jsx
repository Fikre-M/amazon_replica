// import React, { useState, useEffect } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import ProductCard from "../../Components/Product/ProductCard";

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!categoryName) return; // Prevent errors if categoryName is missing

//     axios
//       .get(`${productURL}/category/${encodeURIComponent(categoryName)}`)
//       .then((res) => {
//         console.log("Fetched category products:", res.data);
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching category:", err);
//       });
//   }, [categoryName]);

//   return (
//     <Layout>
//       <section style={{ padding: "30px" }}>
//         <h1>
//           Category: {categoryName ? categoryName.toUpperCase() : "Not Found"}
//         </h1>
//         <hr />
//         <div
//           className="products_container"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             padding: "20px",
//           }}
//         >
//           {results.length > 0 ? (
//             results.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p>No products found in this category.</p>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Results;


// * spinner 

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
    if (!categoryName) return; // Prevent errors if categoryName is missing

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
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
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




















































































// import React, { useState, useEffect } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import ProductCard from "../../Components/Product/ProductCard";
// import { Link } from "react-router-dom";


// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();
//   console.log("Category Name from URL:", categoryName); // Debugging

//   useEffect(() => {
//     axios
//       .get(`${productURL}/category/${categoryName}`)
//       .then((res) => {
//         console.log("Fetched products:", res.data); // Debugging
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching category:", err);
//       });
//   }, [categoryName]);

//   // useEffect(() => {
//   //   axios
//   //     .get(`${productURL}/category/${categoryName}`)
//   //     .then((res) => {
//   //       setResults(res.data);
//   //     })
//   //     .catch((err) => {
//   //       console.log("Error fetching category:", err);
//   //     });
//   // }, [categoryName]);

//   return (
//     <Layout>
//       <section>
//         <h1 style={{ padding: "30px" }}>Results</h1>
//         <p style={{ padding: "30px" }}>Category / {categoryName}</p>
//         <hr />
//         <div className="products_container">
//           {results.length > 0 ? (
//             results.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p style={{ padding: "30px" }}>
//               No products found in this category.
//             </p>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Results;




// import React, { useState, useEffect } from "react";
// import Layout from "../../Components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productURL } from "../../API/endpoints";
// import ProductCard from "../../Components/Product/ProductCard";

// const Results = () => {
//   const [results, setResults] = useState([]);
//   const { categoryName } = useParams();

//   console.log("Category Name from URL:", categoryName); // Debugging

//   useEffect(() => {
//     axios
//       .get(`${productURL}/category/${categoryName}`)
//       .then((res) => {
//         console.log("Fetched products:", res.data); // Debugging
//         setResults(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching category:", err);
//       });
//   }, [categoryName]);

//   return (
//     <Layout>
//       <section style={{ padding: "30px" }}>
//         <h1>Category: {categoryName.toUpperCase()}</h1>
//         <hr />
//         <div
//           className="products_container"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//             gap: "20px",
//             padding: "20px",
//           }}
//         >
//           {results.length > 0 ? (
//             results.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <p>No products found in this category.</p>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Results;





