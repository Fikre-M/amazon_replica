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
















