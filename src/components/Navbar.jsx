import {useState, useRef} from 'react'
// import img from '../assets/Job-Board-Images/footer-logo.png'
import { AiOutlineClose, AiOutlineLogout } from "react-icons/ai";

import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <nav className="container mx-auto p-6 top-0 sticky z-10">
    
    <div className="flex items-center justify-between">
      
      <div className="pt-2">
        {/* <img src={} alt="" /> */}
        <h2>NewsFlash</h2>
      </div>
      
      <ul className="hidden space-x-6 lg:flex">
        <li to='/' className="hover:text-darkGrayishBlue">Home</li>
        <li to='/jobsec' className="hover:text-darkGrayishBlue">Jobs</li>
        <li to='/uploadjob' className="hover:text-darkGrayishBlue">UploadJob</li>
        <li to='/blogpage'className="hover:text-darkGrayishBlue" >Blog</li>
        <li to='/aboutus' className="hover:text-darkGrayishBlue">AboutUs</li>
        <li to='/terms' className="hover:text-darkGrayishBlue">Terms</li>
        <li to='faq' className="hover:text-darkGrayishBlue">Faq</li>
        
      </ul>
      
      <button className='flex flex-row items-center justify-center text-2xl cursor-pointer transition-all duration-0.3 linear  lg:hidden text-slate-900 ' onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <AiOutlineClose size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
    </div>

    <div onClick={handleCloseNavbar}
          className={`${isOpen ? " flex " : "hidden"} lg:hidden flex-col fixed min-h-full left-0 w-full h-full items-center justify-center transition duration-5 z-10 text-2xl space-y-6 mt-4 text-[#423f3f]`}
        >
          <li to='/' >Home</li>
          <li to='/jobsec'>Jobs</li>
          <li to='/uploadjob' >UploadJob</li>
          <li to='/blogpage'>Blog</li>
          <li to='/aboutus' >AboutUs</li>
          <li to='/terms'>Terms</li>
          <li to='/faq'>Faq</li>
        </div>

  </nav>
  )
}

export default Navbar