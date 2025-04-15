import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {

  const [open, setIsOpen] = useState(false);

  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/*logo  */}
       <h1 className='text-3xl font-bold text-slate-400'>Bloggers<span className='text-2xl text-red-700'>.com</span></h1>   
      {/* mobile menu */}
       <div className="md:hidden">
        {/* mobile button */}
        <div className="">

        {open 
        ? 
        <>
          <MdClose onClick={() => setIsOpen(!open)} className="text-red-700 text-3xl cursor-pointer"/>
        </>
        : 
        <FaBars onClick={() => setIsOpen(!open)} className="text-red-700 text-2xl cursor-pointer"/> 
        }
        </div>
        {/* mobile link list */}
       <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-black bg-opacity-50 ${open ? "-right-0" : "-right-[100%]"} transition-all duration-500 ease-in-out`}>
        menu 
       </div>  
       </div>
      {/* desktop menu */}
      <div className="hidden md:flex">
        
      </div>
    </div>
  )
}

export default Navbar;
