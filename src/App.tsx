
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Technologies from './Component/Technologies/Technologies'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './Component/Footer/Footer'


function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <Technologies />
    <ToastContainer />
    <Footer />
    </>
  )
}

export default App
