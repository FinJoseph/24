import { useRef } from "react";
import "./portfolio.scss";
import {motion , useScroll, useSpring, useTransform } from "framer-motion";

const items = [

    {
        id:4,
        title:"Jeux Bibilava",
        img:"/24/bibilava.png",
        desc:"J'ai développé un jeu classique de serpent en utilisant JavaScript, combinant des fonctionnalités simples et une interface utilisateur intuitive. Le jeu met en avant mes compétences en manipulation du DOM, en gestion des événements clavier, et en création de boucles de jeu fluides. Le but du jeu est de diriger le serpent pour manger la nourriture qui apparaît aléatoirement sur l'écran, tout en évitant de toucher les bords ou de se mordre la queue. Ce projet démontre ma capacité à coder des jeux interactifs tout en gardant une logique de programmation propre et efficace.",
        link:"http://jeux-bibilava.s3-website.eu-north-1.amazonaws.com/game.html"
    },

    {
        id:1,
        title:"My Folio",
        img:"/24/projet1.png",
        desc:"Ce portfolio est le reflet de mon parcours et de mes compétences en développement web et en design numérique. J'ai conçu et développé ce site pour mettre en avant mes projets, mes réalisations, et mes services. L'interface est pensée pour offrir une navigation fluide et agréable, tout en étant entièrement responsive pour s'adapter à tous les types d'écrans. Ce projet témoigne de ma maîtrise des technologies front-end modernes, ainsi que de mon souci du détail et de l'expérience utilisateur.",
        link:"http://localhost:5173/#Accueil"
    },

    {
        id:2,
        title:"Projet2",
        img:"/24/art.png",
        desc:"J'ai conçu et développé un site vitrine entièrement en HTML et CSS pour mettre en valeur les produits artisanaux malagasy. Ce site se distingue par son design épuré et son interface intuitive, permettant aux visiteurs de découvrir les richesses de l'artisanat malagasy. Les pages sont optimisées pour une navigation fluide et une présentation claire des produits, offrant une expérience utilisateur agréable. Ce projet démontre ma capacité à créer des sites esthétiques et fonctionnels, tout en mettant en avant la culture et les produits locaux..",
        link:"https://finjoseph.github.io/art-malagasy/"
    },

    {
        id:3,
        title:"Projet3",
        img:"/24/projet.png",
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