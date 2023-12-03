import React from 'react';
import Self from '../assets/Self-1.jpg';
// eslint-disable-next-line
import { FaGithub, FaYoutube, FaDribble, FaInstagram, FaLinkedin, FaWhatsappSquare, FaTwitter, FaGit } from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation'
// eslint-disable-next-line

import { motion } from 'framer-motion'

// eslint-disable-next-line
import { fadeIn } from '../variants';

const Banner = () => {
    return ( <section id = 'home'className = 'min-h-[85vh] lg:min-h-[78vh] flex items-center' >

        <div className = 'container mx-auto' >

        <div className = 'flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12' >

        <div className = 'flex-1 text-center font-secondary lg:text-left' >

        <motion.h1 variants = { fadeIn('up', 0.3) }
                   initial = 'hidden'
                   whileInView = { 'show' }
                   viewport = {{ once: false, amount: 0.7 } }
                   className = 'text-[55px] font-bold leading-[0.8] lg:text-[85px]'> SUBODH SHARMA </motion.h1>

        <motion.div variants = { fadeIn('up', 0.4) }
                    initial = 'hidden'
                    whileInView = { 'show' }
                    viewport = { { once: false, amount: 0.7 } }
                    className = 'mb-6 text-[36px] lg:text=[60px] font-secondary font-semibold uppercase leading-[1]' >

           <span className = ' text-white mr-4' > I am a </span>

           <TypeAnimation sequence = {['DEveloper', 1000,'Designer', 1000,'Influencer', 1000]}
                       speed = { 50 }
                       className = 'text-accent'
                       wrapper = 'span'
                       repeat = { Infinity }/> 
        </motion.div>

        <motion.p variants = { fadeIn('up', 0.5) }
                  initial = 'hidden'
                  whileInView = { 'show' }
                  viewport = { { once: false, amount: 0.7 }} className = 'mb-8 max-w-lg mx-auto lg:mx-0' style = {{ marginTop: "2rem" } }> 
                  lorem ipsum here we are lets go now where when will tell you how do you do ? 
        </motion.p>

            <motion.div
                       variants = { fadeIn('down', 0.3) }
                       initial = 'hidden'
                       whileInView = { 'show' }
                       viewport = { { once: false, amount: 0.7 } }
                       className = 'flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' >

        <button className = 'btn btn-lg'> Contact Me </button>
         <a href = "#" className = 'text-gradient btn-link' > My portFolio </a>

        </motion.div>

        <motion.div variants = { fadeIn('down', 0.5) }
                    initial = 'hidden'
                    whileInView = { 'show' }
                    viewport = {             { once: false, amount: 0.7 } }
                    className = 'flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 ' >

        <a href = '#' > <FaGithub /> </a> 
        <a href = '#' ><FaInstagram /></a> 
        <a href = '#' > <FaLinkedin /> </a> 
        <a href = '#' > <FaWhatsappSquare /> </a> 
        <a href = '#' > <FaTwitter /> </a>

        </motion.div>


        </div> 

        <motion.div variants = {fadeIn('up', 0.5)}
                    initial = 'hidden'
                    whileInView = {'show'}
                    viewport = {{once: false, amount: 0.5 }}
                    className = 'hidden lg:flex flex-1 max-w-[200px] lg:max-w-[482px]'> <img src = { Self } alt = '' style = {{ borderRadius: '600px', border: '10px solid white' }}/>
        </motion.div>
        </div>
        </div>
    </section>
    )
                    }

export default Banner;