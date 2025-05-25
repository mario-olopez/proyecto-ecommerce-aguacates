import React, {useState, useEffect} from "react";
import axios from "axios"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"
import "./About.css"

const About = () => {

  const [amount, setAmount] = useState("")

  useEffect(() => {
    async function fetchAmount(){
      try{
        const res = await axios.get(`http://localhost:3000/api/stock`)
        setAmount(res.data.stock_kg)
      } catch (error){
        console.log(error)
        setAmount("Error")
      }
    }
    fetchAmount()
  }, [])

  return (
    <>
      <div className="amount">
        <h3>Actualmente disponemos de un stock de: {amount}kg</h3>
      </div>
      <div className="about-carousel">
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="/fotos-huerto/DSC_0079_1.JPG" alt="Imagen 1" />
          </div>
          <div>
            <img src="/fotos-huerto/DSC_0080_1.JPG" alt="Imagen 2" />
          </div>
          <div>
            <img src="/fotos-huerto/DSC_0086_1.JPG" alt="Imagen 3" />
          </div>
          <div>
            <img src="/fotos-huerto/DSC_0087_1.JPG" alt="Imagen 3" />
          </div>
          <div>
            <img src="/fotos-huerto/DSC_0089.JPG" alt="Imagen 3" />
          </div>
          <div>
            <img src="/fotos-huerto/DSC_0090_1.JPG" alt="Imagen 3" />
          </div>
        </Carousel>
      </div>
      <motion.div 
        className="about-text"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5 }}
        >
          <h2>Desde 2013, cultivando calidad</h2>
          <p>Nos dedicamos con pasión a ofrecer aguacates de la mejor calidad, directamente desde nuestro huerto en Bédar, Almería. 
            A lo largo de los años, hemos mantenido un firme compromiso con la frescura, el sabor auténtico y el respeto por la tierra.
          </p>
      </motion.div>
    </>
  )
};

export default About;
