import { HERO_CONTENT} from "../constants";
import profilePic from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion";

const container = (delay)=>({
    hidden: {x: -100 , opacity: 0},
    visible: {x: 0,  opacity: 1, transition: {duration: 0.5, delay: delay}},
})


const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col text-center lg:text-start">
                    <motion.div variants={container(0)} initial="hidden" animate="visible" className="pb-12 text-[3.1rem] leading-none font-light tracking-tighter lg:text-8xl lg:mt-16">
                       Kevin Rush
                    </motion.div>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl lg:text-4xl">
                        Full Stack Developer
                    </motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm lg:text-lg">
                        {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                    <motion.img initial={{x: 100 , opacity: 0}} animate={{ x: 0 , opacity: 1}} transition={{duration: 0.5 , delay: .75}} src={profilePic} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero