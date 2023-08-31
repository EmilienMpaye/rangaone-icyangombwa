import Footer from '@app/components/footer';
import React from 'react';

const Ukodukora = () => {
  return (
    
    <div className="w-full flex flex-col flex-grow min-h-screen  bg-gradient-to-b from-slate-600 to-green-400 ">
    <div className="flex flex-col flex-grow">
  <span className="block text-center  py-2">Murakoze kudusura!</span>
  <div>
    <h1 className="text-xl font-bold mt-4 flex items-center justify-center">Urubuga ranga</h1>
    <p className="text-center py-2">
      Uru nurubuga ruranga rukanarangisha ibyangombwa byatakaye mu Rwanda.
      Aho uwataye icyangombwa yuzuza form iri ahatangira.
    </p>
    <p className="text-center  py-2">
      Wuzuzamo ibikuranga nibiri kucyangombwa cyawe iyo Uranga icyangombwa nibyiza ko ushyiraho
      nimero zawe kuburyo nyiracyo yakwandikira cyangwa akakoherereza ubutumwa.
    </p>
    <h1 className="text-lg font-bold mt-4 ml-5 flex items-center justify-center">ICYITONDERWA</h1>
    <p className="text-center  py-2">
      Nibyiza kuranga icyangombwa ukigitora cyanga ukigitakaza gusa icyiza kurushaho
      nukukigeza kucyicaro cyikwegereye cya police cyanga ibiro by&apos;akagari
    </p>
    <p className="text-center  py-2">
      Twe ntitwita uko uwataye nuwatoye icyangombwa bumvikana, icyo tubafasha nuko bahuza nuwatoye icyangombwa.
      Ashobora kumwaka amafaranga nkuwatoraguye gusa atari umurengera
    </p>


  </div>
  
 
</div>
<div  className="w-full footer">
        <Footer/> 
        </div> 
</div>
  )
}

export default Ukodukora