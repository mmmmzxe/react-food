/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { motion } from "framer-motion";
import './ingredients.css';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Ingredients = () => {
    const [counter, sCounter] = useState(false);
    return (
        <section className="par">
            <ScrollTrigger onEnter={() => sCounter(true)} onExit={() => sCounter(false)}>
                {counter &&
                    <motion.div className="contener"
                        initial={{ y: "1rem", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 4,
                            type: "spring"
                        }}
                    >
                        <div className="row">
                            <div className="vol-lg-12 col-md-12">
                                <h2>When a man's stomach is full it makes no
                                    difference whether he is rich or poor.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>


                            </div>
                        </div>
                    </motion.div>}
            </ScrollTrigger>
        </section>


    )
}
export default Ingredients;