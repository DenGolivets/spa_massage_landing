import { useEffect } from "react"
import Navbar from "./components/Navbar"
import AOS from "aos";
import 'aos/dist/aos.css'
import Hero from "./components/Hero";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  

  return (
    <>
      <Navbar />
      <Hero />
    </>
  )
}

export default App
