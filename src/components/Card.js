import React from 'react'

const Card = ({img}) => {
  return (
    <div className="flex flex-col justify-around p-4">
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 flex-none px-8">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-500 to-red-400 shadow-lg hover:shadow-2xl transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl hover:scale-125 hover:rotate-6 ease-in-out duration-500"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 hover:shadow-2xl transform hover:scale-105 opacity-90 hover:opacity-100 ease-in-out duration-500">
                            <div className="max-w-md mx-auto transform hover:scale-105 hover:shadow-2xl hover:opacity-100 ease-in-out duration-500">
                                <img src={img} className="rounded-lg" alt="image1" />
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center mb-5 p-16 text-2xl font-mono">
                    <p className="mb-2 border-b-2 p-4 mb-20">
                    Argentine world traveler, writer, journalist and fashion producer
                    <br />
                    My professional career in the fashion world began in 2013 and since then I have been incorporating different visual and written techniques.
                    <br />
                    As a fashion producer, my aim is to create an image. I work with the client, either a brand or an individual, from the main concept and try to implement what they have in mind. My job is to bring any idea, no matter how crazy it seems, to life. I take care of every step, from the research of the perfect photographer to the scouting of models, including the seeking of a studio, or an outdoor or inside location. My job is to cover the entire creative process of editorials, campaign shoots, product shoots and photo sessions for social networks. All of them entail a previous study and an analysis of the way to communicate the message intended to be conveyed, so that it reaches the target audience in a clear and direct way.
                    <br />
                    As a writer and a fashion journalist, I dedicated last years to hold different meetings with leading figures of the fashion and art worlds. Through my research, I have found artists with new visions of the world, and messages to transmit that may reach the reader in a more personal and emotional way. Thus, I try to make people see fashion not as a final product, but as a creative process.
                    <br />
                    Both careers have given me the opportunity to develop my most creative and revolutionary side when it comes to talking about fashion. Thanks to various interviews and meetings with professionals, I arrived at the conclusion that there is a personal process given at an exact moment in the career of each artist that leads us to fashion, seen from different perspectives. We only need to have the ability to visualize it.
                    <br />
                    </p>
                    <div className='rounded-full h-40 w-40 flex items-center justify-center border-4 border-gray-300 shadow-lg transform hover:scale-125 hover:shadow-2xl transition ease-in-out duration-1000'>
                        <h2 className="text-4xl font-bold">ce ce</h2>
                    </div>
                </div>
            </div>
  )
}

export default Card