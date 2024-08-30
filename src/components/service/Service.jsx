import { useRef } from "react";
import "./service.scss";
 import {animate, motion , useInView} from "framer-motion";


 const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,

    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
 };
 

const Service = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div 
        className="service" 
        variants={variants} 
        initial="initial" 
        ref={ref} 
        // animate={isInView && "animate"}
        animate={"animate"}

       

     >
         
        <motion.div className="textContainer" variants={variants}>
             <p>
                Ravis de vous propos nos service
                <br /> et notre aide
             </p>
             <hr />
        </motion.div>

        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/24/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"green"}}>Des solutions </motion.b>  pour 
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"green"}}>Bosster votre </motion.b>  Business.
                </h1>
                <motion.button whileHover={{background:"lightgray" , color:" black" }}>Vos besoins?</motion.button>
            </div>
        </motion.div>

        <motion.div className="listeContainer" variants={variants}>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Service1</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui aliquid saepe dolorem distinctio dolore commodi officiis laudantium aut asperiores, illo ullam, magni ex, at ut iste minima debitis. Exercitationem.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Service2</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui aliquid saepe dolorem distinctio dolore commodi officiis laudantium aut asperiores, illo ullam, magni ex, at ut iste minima debitis. Exercitationem.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Service3</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui aliquid saepe dolorem distinctio dolore commodi officiis laudantium aut asperiores, illo ullam, magni ex, at ut iste minima debitis. Exercitationem.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Service4</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda qui aliquid saepe dolorem distinctio dolore commodi officiis laudantium aut asperiores, illo ullam, magni ex, at ut iste minima debitis. Exercitationem.
                </p>
                <button>Voir</button>
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default Service;