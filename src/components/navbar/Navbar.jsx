import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar"


 const Navbar = () => {

  return (
    <div className="navbar">
       {/*sidebar*/} 
       <Sidebar/>
       <div className="wrapper">
        <motion.span
            initial={{opacity:0 , scale: 0.5 }}
            animate={{opacity:1 , scale: 1 }}
            transition={{duration:0.5 }}

        >./My Folio/.
        </motion.span>
        <div className="sociale">
            <a href="https://www.facebook.com/joseph.finfanilonantenaina.1?locale=fr_FR"> <img src="/facebook.png" alt="" /></a>
            <a href="https://www.youtube.com/@FinJoseph"> <img src="/youtube.png" alt="" /></a>
            <a href="https://www.linkedin.com/in/joseph-fin-fanilonantenaina-19b75222a/?originalSubdomain=mg"> <img src="/link.svg" alt="" /></a>
            <a href="https://x.com/FINJoseph24"> <img src="/twitter.svg" alt="" /></a>
        </div>
       </div>
    </div>
  )
};

export default Navbar;