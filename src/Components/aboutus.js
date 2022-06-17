import './aboutus.scss'
import wash from './wash.jpg'
import { motion } from "framer-motion";

function AboutUs() {
    return (
        <div className='aboutUs' id='About'>
            <div className='card'>
                <div className='left'>
                    <h1>Why choose CarCleaners?</h1>
                    <p><h2>
                        You no longer have to go to the car wash, or do the dirty work yourself. We come to you and do it all for you!
                        </h2>
                        <br></br>
                        <br></br>

                        <h3>

                        Expert care for your car
                        </h3>

                        Our professionals have years of experience in the industry, and know exactly what they're doing with your car. Rest assured that your vehicle is in good hands with us.

                        <h3>
                        Steam Cleaning - Clean like new again
                            
                        </h3>

                        Our professional steam cleaning will leave your vehicle looking like new. All of the dirt, grime, and bacteria are gone! Cleaner air and a cleaner environment are just a couple of benefits of our service.
                        <h3>

                        Smarter than a car wash? You bet!
                        </h3>

                        Car washes use harsh chemicals which can harm your paint job, or even worse - strip it off completely! With CarCleaners, you'll never have to worry about that again.</p>
                </div>
                <div className='right'>

                    <motion.img whileHover={{ scale: 1.1 }} className="imageRight" src={wash}></motion.img>
                </div>

            </div>
        </div>
    );
}

export default AboutUs