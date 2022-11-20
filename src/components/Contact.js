import React from 'react'
import DM1 from '../img/office/basecamp.webp'
import DM2 from '../img/office/unip.webp'
import Card from './Card'

const Contact = () => {
  return (
    <div className="flex flex-col justify-around p-4">
        <h4 className='font-mono leading-tight text-5xl mt-0 mb-4 text-gray-400 border-t-2 p-6'>CONTACT</h4>
        <div>
            <p className="text-2xl mb-1 p-3 font-mono font-semibold">
                + 44 (0) 1163 800 370
            </p>
            <a className="text-2xl mb-1 p-3 font-mono font-semibold hover:text-gray-400" href="mailto:ben@icon.software">
                ben@icon.software
            </a>
        </div>

        <div className="flex flex-col lg:flex-row justify-around p-4">
        <Card img={DM2} country="UK" adress={["Sir Colin Campbell Building","Triumph Road","Nottingham","NG7 2TU"]}/>
        <Card img={DM1} country="France" adress={["Mont-Blanc Base Camp","336 Route du Nant Jorland","Les Houches","74310"]}/>
        </div>
    </div>
  )
}

export default Contact