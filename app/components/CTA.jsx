import React from 'react';
import Button from './Button';
import styles from '@app/constants/style';

const CTA = () => (
  <section className=" ml-3 ">
    <div className="flex-1 flex flex-col  container1 ">
      <div className="md:w-2/3">
        <h2 className={styles.heading2}>WATAYE ICYANGOMBWA?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          Muraho!! Twishimiye kuba musuye urubuga rwacu Hano dufasha abo bataye ibyangobwa kuba babibona byoroshye
          <br className="break-words" />
        </p>
      </div>
      <div className="flex items-center justify-center md:w-1/3  mt-2 ml-2  mb-2  md:w-a/3">
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
