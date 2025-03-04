// import React from "react";
// import CategoryCard from "./CategoryCard";
// import { CategoryInfoData } from "./CategoryInfoData";
// import classes from "./Category.module.css"; 

// const Category = () => {
//   return (
//     <section className={classes["category-section"]}>
//       {CategoryInfoData.map((info) => (
//         <CategoryCard key={info.id} data={info} />
//       ))}
//     </section>
//   );
// };

// export default Category;


import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryInfoData } from "./CategoryInfoData";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <section className={classes["category-section"]}>
      {CategoryInfoData.map(({ id, ...categoryData }) => (
        <CategoryCard key={id} data={categoryData} />
      ))}
    </section>
  );
};

export default Category;
