import { FaNode, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";


const iconAni = (duration)=>({
    initial: {y: -10},
    animate: {y:[10, -10], transition: {
        duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse",
    }}
})

const Techno = () => {
  return (
        <div className=" border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">Teachnologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconAni(2.5)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaReact className="text-7xl text-cyan-500"/>
                </motion.div>
                <motion.div variants={iconAni(5)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandNextjs className="text-7xl text-neutral-100"/>
                </motion.div>
                <motion.div variants={iconAni(7.5)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div variants={iconAni(10)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <DiRedis className="text-7xl text-red-500"/>
                </motion.div>
                <motion.div variants={iconAni(7.5)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </motion.div>
                <motion.div variants={iconAni(5)} initial="inital" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BiLogoPostgresql className="text-7xl text-blue-500"/>
                </motion.div>
            </div>
         </div>
  )
}

export default Techno