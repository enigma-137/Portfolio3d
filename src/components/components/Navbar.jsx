import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../styles';
import { navLinks } from '../../constants'
import { menu, close } from '../../assets'
import logo from "../../assets/enigmahigh.png"

const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
 
  const handleButtonClick = () => {
    const url = 'https://funaabpay.com.ng/department-due';

    window.open(url, '_blank');
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#0e5a10a1]`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className='w-9 h-9 object-contain' /> */}

          <p className='text-white text-[18px] font-bold cursor-pointer flex'>NAFST &nbsp; 
          <span className='sm:block hidden'> FUNAAB</span> </p>

        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-[#50e6559a]"} hover:text-[#ffffff] hover:underline hover:font-extrabold text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li><button onClick={handleButtonClick}  className='px-3 py-1 bg-white rounded-full text-black font-medium'>Pay dues</button></li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu"

            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl black-gradient`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-white" : "text-black"} font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle); //open and close toggle
                    setActive(link.title)  //set active link 
                  }
                    
                    }
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>


        </div>


      </div>

    </nav>
  )
}

export default Navbar