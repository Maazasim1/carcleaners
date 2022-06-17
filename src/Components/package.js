import React from 'react'
import Cards from './Card'
import './package.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
library.add(faCircleCheck);




export default function Package() {



  return (
      <div className='packages' id="package">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Cards price={<><p className="price">FROM PKR2999</p></>} height="45rem" title="SHOWROOM SHINE ✨ PACKAGE" text={<><br /><FontAwesomeIcon icon='circle-check' className='checks' /> CEREMIC WAX COMPOUNDING ( 3 MONTHS WARRANTY ) <br /><FontAwesomeIcon icon='circle-check' className='checks' /> COMPLETE SEATS CLEANING AFTER REMOVAL<br /><FontAwesomeIcon icon='circle-check' className='checks' /> FLOOR MATS CLEANING / WASH <br /><FontAwesomeIcon icon='circle-check' className='checks' />  FLOOR CARPET CLEANING<br /><FontAwesomeIcon icon='circle-check' className='checks' /> COMPLETE FLOOR CLEANING <br /><FontAwesomeIcon icon='circle-check' className='checks' />  ROOF & DOORS FABRIC CLEANING & POLISH<br /><FontAwesomeIcon icon='circle-check' className='checks' /> COMPLETE INTER-CLEANING INCLUDING DASHBOARD, GEAR NOB , A/C VENTS ETC<br /><FontAwesomeIcon icon='circle-check' className='checks' /> ULTRA CAR-WASH WITH SHAMPOO <br /><FontAwesomeIcon icon='circle-check' className='checks' />  ONLY USED FIBER CLOTHES ON CAR<br /><FontAwesomeIcon icon='circle-check' className='checks' /> WHEEL CLEANING AND POLISHING <br /><FontAwesomeIcon icon='circle-check' className='checks' />  FENDERS SHIELD CLEANING <br /><FontAwesomeIcon icon='circle-check' className='checks' />  TYRE POLISHING  <br /><FontAwesomeIcon icon='circle-check' className='checks' />  TRUNK CLEANING AND TREATMENT <br /><FontAwesomeIcon icon='circle-check' className='checks' />  ENGINE ROOM CLEANING AND DETAILING<br /><FontAwesomeIcon icon='circle-check' className='checks' /> CONSOLE POLISH AND SEATS BELTS CLEANING & WASH <br /><FontAwesomeIcon icon='circle-check' className='checks' />CAR CLEANERS CERTIFICATION STICKER</>} border="1px solid #532345" color="transparent" />

        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Cards price={<><p className="price">FROM PKR999</p></>} height="45rem" title='TESLA PACKAGE' text={<><FontAwesomeIcon icon='circle-check' className='checks' /> CARPET VACUUM
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> CAR MATS CLEANING
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> Dashboard, A/C Vents , STEERING , DOOR PANELS, GEAR PANEL CLEAN THOUGH ( APC )
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> POLISHED IN FIXING POSITION
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> TRUNK CLEANING
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> ENGINE ROOM CLEANING
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> COMPLETE EXTERIOR WASH
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> FOAM WASH WITH HIGH QUALITY SHAMPOO
            <br /><FontAwesomeIcon icon='circle-check' className='checks' /> TYRE WASH AND POLISHED</>} border="1px solid #532345" color="transparent" />

        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>
          <Cards price={<><p className="price">FROM PKR1999</p></>} height="45rem" title='RUBBING POLISHING AND WAX COMPOUNDING PACKAGE' text={<><FontAwesomeIcon icon='circle-check' className='checks' />COLOR ( UPPER LAYER ) SCRATCHES REMOVAL
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />COLORS DIRTY POURS REMOVAL
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />SHINE INCREASING
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />COLOR RESTORATION
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />POLISHING WITH MACHINE</>} border="1px solid #532345" color="transparent" />

        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }}>

          <Cards price={<><p className="price">FROM PKR11999</p></>} title='GLASS COATING PACKAGE' text={<><FontAwesomeIcon icon='circle-check' className='checks' />Package Description:
            Process starts with proper Wash  & shampoo wash with engine room
            Then we start 3 stage polishing process on paint surface.
            ( which is necessary for every vehicle, before the Glass Coat process )
            this 3 stage polishing process make your vehicle paint surface contamination free , make it swirls free and gives your vehicle perfect shine & smooth surface.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            Then we start Glass Coat process.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />

            LEXICON ( MADE IN JAPAN ) Glass coat life is 4 to 5 years and 3 year warranty.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />

            Average time duration required for all the process is 6 hours.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />


            SOME Benefits of LEXICON Glass Coat
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            •Improves the solidness of your paint.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            •Repellent to water, acid and salt.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            •It has shine like a mirror with a high gloss finish.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            •Glass Coating deflects dirt so your vehicle stays cleaner.
            <br /><FontAwesomeIcon icon='circle-check' className='checks' />
            •Protects against the elements of weather and UV rays on your car paint surface also keeping the shine longer and it is anti-corrosive.</>} border="1px solid #532345" color="transparent" height="45rem" />

        </motion.div>
      </div>

  )
}
