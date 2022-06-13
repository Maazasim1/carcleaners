import Civic from './civic.jpg';
import Corolla from './corolla.jpg';
import Interior from './interior.jpg';
import './HeroBanner.scss'
import {useState} from 'react'

function HeroBanner() {
    const [imageNumber,setImageHover]=useState(Civic);

    const changeImage = (e) => {
    {
        const name=e.target.className;
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
                <img className="tinted-image1" src={imageNumber} alt="CarCleaners" />

        
            <div className='selector'>
                <h4>What We Do</h4>
                <a  className='clean'>Cleaning</a>
                <br/>
                <a onMouseEnter={()=>setImageHover(Interior)} onMouseLeave={()=>setImageHover(Civic)}  className='inter'>Interior Cleaning</a>
                <br/>
                <a onMouseEnter={()=>setImageHover(Corolla)}  onMouseLeave={()=>setImageHover(Civic)}  className='service'>Service</a>

            </div>

        </div>
    );
}

export default HeroBanner;