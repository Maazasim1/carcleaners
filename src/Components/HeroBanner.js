import Civic from './civic.jpg';
import Corolla from './corolla.jpg';
import Interior from './interior.jpg';
import './HeroBanner.scss'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function HeroBanner() {
    const [imageNumber, setImageHover] = useState(Civic);

    const changeImage = (e) => {
        {
            const name = e.target.className;
            switch (name) {
                case 'clean':
                    setImageHover(Civic);


                case 'inter':
                    setImageHover(Interior);

                case 'service':
                    setImageHover(Corolla)


                    break;

                default:
                    break;
            }
        }
    }


    return (
        <div className='mainContainer'>
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
                <h4>What We Do</h4>
                <a className='clean'>Cleaning</a>
                <br />
                <a onMouseEnter={() => setImageHover(Interior)} onMouseLeave={() => setImageHover(Civic)} className='inter'>Interior Cleaning</a>
                <br />
                <a onMouseEnter={() => setImageHover(Corolla)} onMouseLeave={() => setImageHover(Civic)} className='service'>Service</a>

            </div>

        </div>
    );
}

export default HeroBanner;