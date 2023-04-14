/* eslint-disable jsx-a11y/alt-text */
import 'C:/Users/marim/Desktop/shop-food/src/component/homepage/product.css';
import React from "react";
import Data from 'C:/Users/marim/Desktop/shop-food/src/data.jsx';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "react-scroll-trigger";

const Product = () => {
    const [counterr, sCounterr] = useState(false);
    const blogitem = Data.map((item) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img}></img>
                    <h5>{item.title}</h5>
                    <p>{item.time}</p>
                    <h6>{item.price}</h6>
                    <Button>see more</Button>
                </div>

            </div>
        )
    })
    return (

        <section className="blogs">
            <ScrollTrigger onEnter={() => sCounterr(true)} onExit={() => sCounterr(false)}>
                {counterr &&
                    <motion.div className="container"
                        initial={{ y: "1rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 4,
                            type: "spring"
                        }
                        }>
                        <div className="row">
                            <div className="col-md-12 col-lg-12">
                                <h2>
                                    Explore Our Foods
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                            </div>
                            <div className="row" id='row'>
                                {blogitem}
                            </div>
                        </div>
                    </motion.div>}</ScrollTrigger>
        </section>
    )
}
export default Product;
