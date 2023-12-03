import React from 'react';
import {BsArrowUpRight}  from 'react-icons/bs';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';


const services = [
  {
    name:'UI/UX Design',
    description: 'lorem ipsum here we are lets go now where when will tell you how do you do?',
    link: 'learn more',
  },

  {
    name:'Development',
    description: 'lorem ipsum here we are lets go now where when will tell you how do you do?',
    link: 'learn more',
  },

  {
    name:'Iot Project Developer',
    description: 'lorem ipsum here we are lets go now where when will tell you how do you do?',
    link: 'learn more',
  },

]


const Services = () => {
  return (
          <section className='section' id='services '>
            <div  className='container mx-auto'>
               <div className='flex flex-col lg:flex-row '>

               <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                <h2 className='h2 text-accent mb-6'>What I Do</h2>
                <h3 className='h3 max-w-[455px] mb-16'>I'm a App Developer, I am passionate about transforming ideas into functional and user-friendly applications. </h3>
                <button className='btn btn-sm'>See my Work</button>
               </div>

               <div className='flex'>
                 <div>
                  {services.map( (service, index) => {
                    return <div>
                              <services Key={service.index}
                                        name={service.name}
                                        description={service.description}
                                        link={service.link}

                              />
                           </div>
                  })}
                 </div>
               </div>

              </div>

            </div>
          </section>
          
            
          

          )
};

export default Services;
