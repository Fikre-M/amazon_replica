import React from 'react'
import Layout from '../../Components/Layout/Layout';
import CarouselImage from '../../Components/Carousel/Carousel';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';

const Landing = () => {
    return (
        <Layout>
            <CarouselImage />
            <Category />
            <Product />
        </Layout>
    );
}

export default Landing
