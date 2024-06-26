import logo from "../assets/kevinRushLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex mb-20 items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="w-10 mx-2" src={logo} alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4 m-8">
            <FaLinkedin/>
            <FaGithub/>
            <FaXTwitter/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar