import { ABOUT_TEXT } from "../constants"
import  aboutImage from "../assets/about.jpg"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-center text-4xl my-20">About <span>Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0 , x: -100}} transition={{duration:0.5}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                <img className="rounded-xl" src={aboutImage} alt="" />
                </div>
            </motion.div>
            <motion.div whileInView={{x: 0 , opacity: 1}} initial={{x: 100 , opacity: 0}} transition={{duration: 0.5}} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start text-center lg:text-start">
                    <p className="my-2 max-w-xl py-6 font-light text-sm lg:text-lg">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About