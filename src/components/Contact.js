import React from 'react'
import DM1 from '../img/office/basecamp.webp'
import DM2 from '../img/office/unip.webp'
import Card from './Card'

const Contact = () => {
  return (
    <div className="flex flex-row justify-around p-4">
        <Card img={DM2} adress={["Icon Software","Sir Colin Campbell Building","Triumph Road","Nottingham","NG7 2TU","UK"]}/>
        <Card img={DM1} adress={["Icon Software","Mont-Blanc Base Camp","336 Route du Nant Jorland","74310 Les Houches","FRANCE"]}/>

    </div>
  )
}

export default Contact