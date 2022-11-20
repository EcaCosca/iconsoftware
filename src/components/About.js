import React from 'react'
import img from '../img/office/basecamp.webp'

const About = () => {
  return (
    <div className='flex'>
        <div>
            <h4 className='font-mono leading-tight text-5xl mt-0 mb-4 text-gray-400 border-t-2 p-6'>ABOUT</h4>
            <div>
                <p className='font-mono my-2 p-4'>Since 2009, Icon has delivered bespoke software for the sophisticated processing and analysis of technical data alongside a compelling, intuitive user experience.</p>
                <p className='font-mono my-2 p-4'>We employ rigorous software engineering practices whilst exploiting our efficiency to deliver quickly and to readily adapt to evolving client requirements.</p>
                <p className='font-mono my-2 p-4'>Icon is based at the University of Nottingham’s Innovation Park with a branch office in the Chamonix valley, France.</p>
            </div>
        </div>
        <div className="py-6 flex flex-col justify-center sm:py-12 flex-none px-8">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-300 via-sky-500 to-red-400 shadow-lg hover:shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl hover:scale-125 hover:rotate-6 ease-in-out duration-500"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 hover:shadow-2xl transform hover:scale-105 opacity-90 hover:opacity-100 ease-in-out duration-500">
                    <div className="max-w-md mx-auto transform hover:scale-105 hover:shadow-2xl hover:opacity-100 ease-in-out duration-500">
                        <img src={img} className="rounded-lg" alt="image1" />
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default About