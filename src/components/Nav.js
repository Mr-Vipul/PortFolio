import React from 'react';
import { Link } from "react-scroll";
// eslint-disable-next-line
import {BiHomeAlt, biHomeAlt, BiUser} from 'react-icons/bi';
// eslint-disable-next-line
import {BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText} from 'react-icons/bs';


const Nav = () => {
  return (    
            <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
                 <div className='container mx-auto'>
                      <div className='w-full  bg-white/20 h-[66px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50'>

                        <Link  
                               to='home' 
                               spy={true} 
                               smooth={true}
                               offset={-200}
                               activeClass='active' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'> 
                         <BiHomeAlt />
                        </Link>

                        <Link  to='about' 
                               spy={true} 
                               smooth={true}
                               activeClass='active'
                               className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'> 
                         <BiUser />
                        </Link>

                        <Link  spy={true} 
                               smooth={true}
                               activeClass='active' to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'> 
                         <BsClipboardData />
                        </Link>

                        <Link  spy={true} 
                               smooth={true}
                               activeClass='active' to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'> 
                         <BsBriefcase />
                        </Link>

                        <Link 
                               spy={true} 
                               smooth={true}
                               activeClass='active' 
                               to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'> 
                         <BsChatSquareText />
                        </Link>

                      </div> 
                  </div>
               </nav>
              
          
          )
};

export default Nav;
