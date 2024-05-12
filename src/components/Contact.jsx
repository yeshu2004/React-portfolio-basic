import { CONTACT } from "../constants"


const Contact = () => {
  return (
    <div className="flex flex-col border-b border-neutral-900 pb-10 justify-center items-center">
        <h1 className="text-4xl my-10">Get in Touch</h1>
            <p className="my-4 tracking-tighter">{CONTACT.address}</p>  
            <p className="my-4 tracking-tighter">{CONTACT.phoneNo}</p> 
            <a className="border-b border-white" href="http://">{CONTACT.email}</a>       

    </div>
  )
}

export default Contact