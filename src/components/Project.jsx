import { motion } from "framer-motion"
import { PROJECTS } from "../constants"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{y: 0 , opacity: 1}} initial={{opacity: 0, y: -100}} transition={{duration: 1,}} className=" my-20 text-center text-4xl">Projects</motion.h1>
        {PROJECTS.map( function( project , index){
            return(
            <div className="flex flex-wrap mb-8 lg:justify-center">
                <motion.div whileInView={{x: 0 , opacity: 1}} initial={{opacity: 0 , x: -100}} transition={{duration: 1,}} className="w-full lg:w-1/4">
                    <img className="mb-6 rounded-xl" src={project.image} alt={project.image} width={150} height={150} />
                </motion.div>
                <motion.div whileInView={{x: 0 , opacity: 1}} initial={{opacity: 0 , x: 100}} transition={{duration: 1,}} className="lg:w-3/4 w-full max-w-xl">
                    <h5 className="mb-2 font-semibold">{project.title}</h5>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map(function(tech , index){
                        return(
                            <span key={index} className="mr-2 bg-neutral-900 px-2 rounded py-1 font-medium text-purple-800 text-sm">
                                {tech}
                            </span>
                        )
                    })}

                </motion.div>
            </div>
            )
        })

        }
    </div>
  )
}

export default Project