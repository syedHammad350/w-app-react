import axios from "axios"
import { useState } from "react"

export const Weather = () => {
    const[city,setCity]=useState('')
    const[weather,setWeather]=useState(null)



   async function weatherfathch(e){

    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b4588a95d7a99ec3d4734f37dee4a93&units=metric `)
// console.log(response);
setWeather(response.data)
console.log(weather)

  }
  
  
  
  
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-blue-900 py-8">
    <div className=" max-w-2xl  bg-blue-300 mx-auto shadow-lg rounded-lg">
      <h1 className="text-center font-bold text-blue-500 py-4 text-3xl">
        WeAtHeR aPp
      </h1>

    <div className='flex gap-2 p-2 '>
        <input
        value={city}
          onChange={(e)=>setCity(e.target.value)}
          className="flex-grow outline-none p-2 rounded-lg bg-blue-200 mb-8"
          type="text"
          placeholder="Enter a city..."
        />
        <button
          onClick={weatherfathch}
          className="bg-green-500 rounded-lg px-6 text-white hover:bg-green-600 mb-8"
        >
          Search
        </button>

        
        </div>
        {weather&&(
          <div>
            <h1 className='text-center text-white text-4xl font-bold'>
              {weather?.name}
            </h1>
            
            <h1 className='text-center text-white text-4xl font-bold mt-8'>
              {Math.round(weather.main.temp)}°c
              
            </h1>
            <div className=" flex justify-center ">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>
            <div className='flex justify-center gap-24 p-4'>
              <div className='h-[120px] w-[100px] bg-blue-500 rounded-lg shadow-sm'>
                <h1 className='text-xl font-bold text-blue-100 text-center'>
                Humidity

                </h1>
                <p className="mt-4 text-xl text-center text-blue-300 font-bold">{weather.main.humidity}</p>
              </div>
              <div className='h-[120px] w-[100px] bg-blue-500 rounded-lg shadow-sm'>
                <h1 className='text-xl font-bold text-blue-100 text-center'>
                pressure

                </h1>
                <p className="mt-4 text-xl text-center text-blue-300 font-bold">{weather.main.pressure}</p>
              </div>
              <div className='h-[120px] w-[100px] bg-blue-500 rounded-lg shadow-sm'>
                <h1 className='text-xl font-bold text-blue-100 text-center'>
                feels_like

                </h1>
                <p className="mt-4 text-xl text-center text-blue-300 font-bold">{Math.round(weather.main.feels_like)}</p>
              </div>



            </div>

          </div>
        )

        }
      
      </div>
      </div>

  )
}

