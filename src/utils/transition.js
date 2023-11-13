import { motion } from "framer-motion";
import "../components/animation/Animation.css";

const transition = (OgComponent) => {
  return () => (
    <div  className="slide container">
      <OgComponent/>
      <motion.div 
        className="slide-in"
        initial={{opacity: 0}}
        animate={{opacity: 0}}
        exit={{opacity: 1}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
      <motion.div 
        className="slide-out"
        initial={{opacity: 1}}
        animate={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
      />
    </div>
  )
}

export default transition;