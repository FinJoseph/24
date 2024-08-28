import { useRef } from "react";
import "./portfolio.scss";
import {motion , useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id:4,
        title:"Jeux Bibilava",
        img:"/bibilava.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat tempora maxime, facilis repellat debitis ipsam labore expedita cumque, quae laudantium. Similique quasi sequi sunt odit voluptates maxime dolorem! Delectus!",
        link:"http://jeux-bibilava.s3-website.eu-north-1.amazonaws.com/game.html"
    },

    {
        id:1,
        title:"My Folio",
        img:"/projet1.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat tempora maxime, facilis repellat debitis ipsam labore expedita cumque, quae laudantium. Similique quasi sequi sunt odit voluptates maxime dolorem! Delectus!",
        link:"http://localhost:5173/#Accueil"
    },

    {
        id:2,
        title:"Projet2",
        img:"/projet.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat tempora maxime, facilis repellat debitis ipsam labore expedita cumque, quae laudantium. Similique quasi sequi sunt odit voluptates maxime dolorem! Delectus!",
    },

    {
        id:3,
        title:"Projet3",
        img:"/projet.png",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab placeat tempora maxime, facilis repellat debitis ipsam labore expedita cumque, quae laudantium. Similique quasi sequi sunt odit voluptates maxime dolorem! Delectus!",
    },

   
];

const Single = ({item}) => {

    const ref = useRef();


    const {scrollYProgress} = useScroll({
        target:ref, 
        
    }); 

    const y = useTransform(scrollYProgress,[0,1] , [-500, 500]);

    return (
      <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                    </div>    
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    {item.link && (
                                <button onClick={() => window.location.href = item.link}>
                                    Voir
                                </button>
                            )}
                </motion.div>
                </div>
            </div>
        </section>
    );  
};

const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],

    });


    const scaleX = useSpring(scrollYProgress, {
        stiffness : 100,
        damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>.Project.</h1>
            <motion.div  style={{ scaleX }} className="progressBar">
            </motion.div>
        </div>
        {items.map(item=>(
           <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio; 