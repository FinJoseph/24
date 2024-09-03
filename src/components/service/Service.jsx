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
                <h2> Développement web</h2>
                <p>
                    
                Je conçois et développe des sites web modernes et responsifs, adaptés à vos besoins spécifiques. De la création de pages statiques à la mise en place de sites dynamiques, j'assure une expérience utilisateur optimale sur toutes les plateformes.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Prototypage</h2>
                <p>
                Je réalise des prototypes interactifs pour vous permettre de visualiser et tester vos idées avant leur mise en production. Cette étape cruciale vous aide à affiner les fonctionnalités et l'ergonomie de vos projets.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> E-marketing</h2>
                <p>
                Je vous aide à maximiser votre présence en ligne grâce à des stratégies de e-marketing efficaces. De l'optimisation des moteurs de recherche (SEO) à la gestion des campagnes publicitaires, j'améliore votre visibilité et atteins vos cibles.
                </p>
                <button>Voir</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray" , color:" black" }}>
                <h2> Accompagnement de projets numériques</h2>
                <p>
                J'offre un accompagnement personnalisé pour vos projets numériques, de la phase de conception à la réalisation finale. Mon objectif est de vous guider à chaque étape, en assurant le bon déroulement et le succès de vos initiatives.
                </p>
                <button>Voir</button>
            </motion.div>
        </motion.div>
    </motion.div>
  );
};

export default Service;