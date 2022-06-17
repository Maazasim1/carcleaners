import Civic from './civic.jpg';
import Corolla from './corolla.jpg';
import Interior from './interior.jpg';
import './HeroBanner.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import ScrollAnimation from './scrollAnimation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCar } from "@fortawesome/free-solid-svg-icons";

library.add(faCar);


function HeroBanner() {
    const [imageNumber, setImageHover] = useState(Civic);

    
    return (
        <div className='mainContainer' id='Home'>
            <AnimatePresence>
                <motion.img
                    key={imageNumber}
                    src={imageNumber}
                    className="tinted-image1"
                    initial={{y:1000, scaleX:1,
                        scaleY:1,}}
                    animate={{
                        zIndex: 0,
                        y: 0,
                        opacity: 1,
                        
                        
                    }}
                    exit={{
                        zIndex: 0,
                        y:  -1000,
                        opacity: 0,
                        scaleX:0.7,
                        scaleY:0.7,
                    }}
                    transition={{
                        y: { type: "spring", stiffness: 150, damping: 40 },
                        opacity: { duration: 0.5 }
                    }}
                />
            </AnimatePresence>



            <div className='selector'>
                <div className='iconDiv'>
                    <FontAwesomeIcon icon='car' className='carred'/>
                <h4>WHAT WE DO</h4>
                </div>
                <a className='clean' href='#Services'>CLEANING</a>
                <br />
                <a href='#Services' onMouseEnter={() => setImageHover(Interior)} onMouseLeave={() => setImageHover(Civic)} className='inter'>DETAILING</a>
                <br />
                <a href='#Services' onMouseEnter={() => setImageHover(Corolla)} onMouseLeave={() => setImageHover(Civic)} className='service'>STEAM  CLEANING</a>

                    <ScrollAnimation />
            </div>

        </div>
    );
}

export default HeroBanner;