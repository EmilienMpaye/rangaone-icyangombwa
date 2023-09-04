import React from 'react'
import Button from './Button';
import styles from '@app/constants/style';


const CTA1 = () => 
   (
    <section className="container1">
       <div className="flex-1 flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <h2 className={`${styles.heading2} ml-7 pl-4`}>WATAYE ICYANGOMBWA?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-2 md:ml-7 pl-4`}>
        Waba waratoraguye icyangobwa ?
      hano biroroshye kukirangisha,
      wandika ibiranga icyangombwa watorayuye
         {/* // <br className="break-words" /> */}
        </p>
      </div>
      <div className="md:w-1/3 flex items-center justify-center md:justify-end mt-4 md:mt-0">
        <Button />
      </div>
    </div>
      
      </section>
  )


export default CTA1
