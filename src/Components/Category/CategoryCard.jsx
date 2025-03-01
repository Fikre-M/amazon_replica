// import React from "react";
// import { Link } from "react-router-dom";
// import classes from "./Category.module.css";

// function CategoryCard({ data }) {
//   return (
//     <div className={classes["category-card"]}>
//       <Link to={`/category/${data.category}`}>
//         {" "}
//         {/* Now opens in the same tab */}
//         <h2 className={classes["category-title"]}>{data.title}</h2>
//         <img
//           src={data.image}
//           alt={data.title}
//           className={classes["category-image"]}
//         />
//         <p className={classes["shop-now"]}>Shop Now</p>
//       </Link>
//     </div>
//   );
// }

// export default CategoryCard;




import React from "react";
import { Link } from "react-router-dom";
import classes from "./Category.module.css";

const CategoryCard = ({ data }) => {
  const { category, image } = data;

  return (
    <div className={classes["category-card"]}>
      <Link to={`/category/${category}`}>
        <h2 className={classes["category-title"]}>{category}</h2>
        <img src={image} alt={category} className={classes["category-image"]} />
      </Link>
      <Link to={`/category/${category}`} className={classes["shop-now"]}>
        Shop Now
      </Link>
    </div>
  );
};

export default CategoryCard;

















// **this one opent in new tab

// import React from "react";
// import classes from "./Category.module.css";

// function CategoryCard({ data }) {
//   return (
//     <div className={classes["category-card"]}>
//       <a
//         href={`/category/${data.category}`} // Ensure this matches the API category
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <h2 className={classes["category-title"]}>{data.title}</h2>
//         <img
//           src={data.image}
//           alt={data.title}
//           className={classes["category-image"]}
//         />
//         <p className={classes["shop-now"]}>Shop Now</p>
//       </a>
//     </div>
//   );
// }

// export default CategoryCard;
