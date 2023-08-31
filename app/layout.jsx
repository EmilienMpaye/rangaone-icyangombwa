import '../styles/globals.css';
import Header from './components/header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
//import VerticalHandle from './components/scrollball';

  export const metadata = {
    title : "Ishakiro",
    description : 'Shakira hano icyangombwa',
   
}

const RootLayout = ({children}) => {
  return (
  <html lang='en'  >
      <body className="flex flex-col min-h-screen max-w-full wrapper">
      <div className="header "><Header /> </div>
        <div className="main flex-grow">
          {/* <div className='gradient'/> */}
          {/* <VerticalHandle /> */}
        </div>
        
      
      <main className="max-w-full">
          {children}
          
        </main>
        <ToastContainer /> 
     
      </body>
      
  </html>
  )
}

export default RootLayout