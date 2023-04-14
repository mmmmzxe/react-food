
import { useState } from 'react';
import './home.css';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const CountUpPage = () => {
    const [counterStart, setCounterStart] = useState(false);
    return (



        <section className="namders">
            <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <span>
                                {counterStart && <CountUp start={500} end={650} duration={3} delay={0} />}
                                <span className="pluss">+</span></span>
                            <h6>orders</h6>
                        </div>
                        <div className="col-md-3">
                            <span>
                                {counterStart && <CountUp start={8800} end={9000} duration={3} delay={0} />}
                                <span className="pluss">+</span></span>
                            <h6>photos</h6>
                        </div>
                        <div className="col-md-3">
                            <span>
                                {counterStart && <CountUp start={950} end={1012} duration={3} delay={0} />}
                                <span className="pluss">+</span></span>
                            <h6>search</h6>
                        </div>
                        <div className="col-md-3">
                            <span>
                                {counterStart && <CountUp end={50} duration={3} delay={0} />}
                                <span className="pluss">+</span></span>
                            <h6>globes</h6>
                        </div>

                    </div>
                </div>        </ScrollTrigger>
        </section>



    )
};
export default CountUpPage;