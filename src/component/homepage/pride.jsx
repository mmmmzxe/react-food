/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { motion } from "framer-motion";
import pride from 'C:/Users/marim/Desktop/shop-food/src/images/8.jpg';
import './home.css';
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
const Prid = () => {
    const [counterS, setCounter] = useState(false);
    return (
        <section className="pride">
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                {counterS && <motion.div className="contener" initial={{ y: "1rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 4,
                        type: "spring"
                    }
                    }>

                    <div className="row"
                    >

                        <div className="col-md-6" id="button">
                            <h2 >we  pride ourselves on making real food the best intgredients.</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button>learn more</button>
                        </div>
                        <div className="col-md-6">
                            <img src={pride}></img>
                        </div>

                    </div></motion.div>}</ScrollTrigger>
        </section>
    )
}
export default Prid;