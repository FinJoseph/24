import {motion} from "framer-motion";

const variants = {
  open:{
    transition:{
      StaggerChildren:0.05,
    },
  },

  closed:{
    transition:{
      StaggerChildren:0.05,
      StaggerDirection: -1,
    },
  },
};

const itemvariants = {
  open:{
   y: 0 ,
   opacity:100,
  },

  closed:{
    y: 50,
    opacity:0,
  },
};

 const Links = () => {

const items = [ "Accueil", "Apropos","Service", "Projet", "Contact" ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={ itemvariants } whileHover={{ scale: 2}} whileTap={{ scale: 4}}>
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};


export default Links;