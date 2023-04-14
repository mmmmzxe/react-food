import React from "react";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import './header.css';
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
const Header = () => {
    const [counte, setCount] = useState(false);
    return (
        <header>
             <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
             {counte &&<motion.div className="container" initial={{ y: "1rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 4,
                    type: "spring"
                }
                }>
                <div className="row">

                    <div className=".col-md-6">
                        <h2>Good Food choices are good investments.</h2>
                        <p
                        >torem ipsum dolor sit amet, consectetur adioiscing elit
                            Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <div className="button">

                            <Button>  order now</Button>
                            <Button>see more</Button></div>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </motion.div>}</ScrollTrigger>
        </header>
    )
}
export default Header;