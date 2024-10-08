import "./hero.scss";
import {motion} from "framer-motion";


const textVariants ={
  initial :{
    x: -500,
    opacity: 0,
  },

  animate :{
    x: 0,
    opacity: 1,
    transition: {
        duration : 1,
        staggerChildren: 0.1,
    },
  },

  scrollButton:{
    opacity:0,
    y:10,
    transition :{
        duration:2,
        repeat: Infinity
    }
  },
};

const sliderVariants ={
    initial :{
      x: 0,
    },
  
    animate :{
      x:"-435%",
      transition: {
        repeat : Infinity,
        repeatType:"mirror",
          duration : 20,
      },
    },
  };
  

 const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
             <motion.div
              className="textContainer" 
              variants={textVariants}
              initial="initial"
              animate="animate"
              >


                 <motion.h2 variants={textVariants}>FIN JOSEPH</motion.h2>
                  <motion.h1 variants={textVariants}>Developpeur web .UI/UX designer</motion.h1>
                 <motion.div variants={textVariants} className="buttons">
                      <motion.button variants={textVariants} onClick={() => scrollToSection("Projet")}>Projet</motion.button>
                       <motion.button variants={textVariants} onClick={() => scrollToSection("Contact")}>Conctact</motion.button>
                       <motion.button variants={textVariants} onClick={() => scrollToSection("Service")}>Service</motion.button>
                 </motion.div>
                 <motion.img variants={textVariants}  animate="scrollButton" src="/24/scroll.png" alt="" />
             </motion.div>
         </div>

         <motion.div className="slidingTextContainer" variants={sliderVariants } initial="initial" animate="animate">
            Bienvenue sur MYFolio
         </motion.div>
         <div className="imageContainer">
            <img src="/24/hero1.png" alt="" />

         </div>
    </div>
  );
};

export default Hero;

