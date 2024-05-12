import { motion } from "framer-motion"
import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{y: 0, opacity: 1}} initial={{opacity: 0 , y: -100}} transition={{duration: 1,}} className="text-4xl text-center my-20">Experience</motion.h1>
        <div>
            {EXPERIENCES.map(function(experience , index){
                return(
               <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{x: 0 , opacity: 1}} initial={{x: -100, opacity: 0}} transition={{duration: 1,}} className="w-full lg:w-1/4">
                        <p className="mb-2 text-neutral-400 text-sm">{experience.year}</p>
                    </motion.div>
                    <motion.div whileInView={{x: 0 , opacity: 1}} initial={{x: 100, opacity: 0}} transition={{duration: 1,}}  className="w-full lg:w-3/4 max-w-xl">
                        <div>
                            <h5 className="mb-2 font-semibold">{experience.role} -{" "} <span className="text-sm text-purple-100">{experience.company}</span></h5>
                            <h6 className="mb-4 text-neutral-400">{experience.description}</h6>
                            {experience.technologies.map(function( tech , index){
                                return(
                                <span key={index} className="text-purple-400 mr-2 mt-4 rounded-lg bg-neutral-900 px-2 py-1 text-sm font-medium">
                                    {tech}
                                </span>)
                            })

                            }
                        </div>
                    </motion.div>
               </div>)
            })
            }
        </div>
    </div>
  )
}

export default Experience