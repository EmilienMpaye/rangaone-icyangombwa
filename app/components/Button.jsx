
import { FaArrowDown } from 'react-icons/fa'
const Button = ({styles}) => {
  return (
    <div className="button-container" >
    <div type="button" className={` px-2 bg-blue-gradient font-poppins font-medium 
     text-white outline-none ${styles} rounded-[8px]`}>
      Uzuza Hano
      <div className="arrow-container">
      <FaArrowDown className="arrow-icon" />
    </div>
    </div>
    </div>
  )
}

export default Button