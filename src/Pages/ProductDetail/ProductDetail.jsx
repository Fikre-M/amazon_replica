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




































