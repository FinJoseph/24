import { useRef } from "react";
import "./apropos.scss";
import {motion , useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id:1,
        title: "Etude",
        anneé:"2023",
        ecole:"EMIT",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam odio itaque ullam quas, magnam necessitatibus tempora, non cumque incidunt, amet unde in aut natus perspiciatis ea ducimus beatae dolores!",

    },

    {
        id:2,
        title: "Etude",
        anneé:"2023",
        ecole:"EMIT",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quibusdam odio itaque ullam quas, magnam necessitatibus tempora, non cumque incidunt, amet unde in aut natus perspiciatis ea ducimus beatae dolores!",

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

 const Apropos = () => {

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
    <div className="apropos" ref={ref}>
        <div className="progress">
            <h1>.Apropos.</h1>
            <motion.div  style={{ scaleX }} className="progressBar">
            </motion.div>
        </div>
        {items.map(item=>(
           <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Apropos;