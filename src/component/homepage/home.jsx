/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment } from "react";
import Header from "./header.jsx";
import './home.css';
import CountUpPage from './CountPge.jsx';
import Ingredients from './ingredients.jsx';
import Product from "./product.jsx";
import Pride from './pride.jsx';
import Footer from "./footer..jsx";

const Home = () => {

    return (

        <Fragment>
            <Header></Header>
            <CountUpPage></CountUpPage>
            <Pride></Pride>
            <Ingredients></Ingredients>
            <Product></Product>
            <Footer></Footer>
        </Fragment>

    )
}
export default Home;