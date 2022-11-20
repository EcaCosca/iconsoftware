import React from 'react'

const Card = ({img, country, adress}) => {
  return (
    <div className="flex flex-col justify-around p-4 justify-center items-center">
                    <div className='rounded-full h-40 w-40 flex items-center justify-center border-4 border-gray-300 shadow-lg transform hover:scale-125 hover:shadow-2xl transition ease-in-out duration-1000'>
                            <h2 className="text-4xl font-bold">{country}</h2>
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
                <div className="flex flex-col justify-center items-center font-mono">
                    <p className="mb-2 border-t-2 p-4 mt-5">
                    {adress.map(str=>(<p>{str}</p>))}
                    </p>
                </div>
            </div>
  )
}

export default Card