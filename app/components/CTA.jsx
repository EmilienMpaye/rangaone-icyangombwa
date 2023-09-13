import React from 'react';
import Button from './Button';
import styles from '@app/constants/style';

const CTA = () => (
  <section className="container1 ml-3  ">
    <div className="flex-1 flex flex-col md:flex-row  ">
      <div className="md:w-2/3">
        <h2 className={styles.heading2}>WATAYE ICYANGOMBWA?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
          Muraho!! Twishimiye kuba musuye urubuga rwacu Hano dufasha abo bataye ibyangobwa kuba babibona byoroshye
          <br className="break-words" />
        </p>
      </div>
      <div className="   md:w-1/3  flex items-center justify-center  md:justify-end mt-4 md:mt-0  md:w-a/3">
        <Button />
      </div>
    </div>
  </section>
);

export default CTA;
