import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState();
  const [data1, setData1] = useState();

  const handleChange = (event) => {
    setData1(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try{
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`);
      console.log(response);
      setData(response.data);
      setData1('')
    }
    catch(e)
    {
      alert('Please enter a valid district')
    }
   
  };

  return (
    <div className='homebg'>
      <form className="max-w-md mx-auto pt-6" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={data1?data1:''} id="search" className="w-[300px] p-4 ms-20 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white" placeholder="Search district" required />
      </form>
  {data &&
  <>
      <div className='pt-[200px]'>
        <p className='text-7xl text-center font-semibold text-gray-400 '>{data?.name}</p>
        <p className='text-5xl text-center font-medium text-gray-400 p-5'>{data?.main?.temp}°F</p>
        <p className='text-2xl text-center font-medium text-gray-400'>{data?.weather[0]?.main}</p>
      </div>

      <div className='bg-slate-400/60 w-[650px] h-[150px] m-auto mt-10 rounded-2xl flex flex-wrap justify-around text-center '>
        <div>
           <p className='pt-8 text-lg font-bold text-black'>{data?.main?.feels_like}</p>
           <p className='pt-6 text-lg font-semibold text-black'>Feels like</p>

        </div>
        <div >
        <p className='pt-8 text-lg font-bold text-black'>{data?.main?.humidity}%</p>
        <p className='pt-6 text-lg font-semibold text-black'>Humidity</p>


        </div>
        <div >
        <p className='pt-8 text-lg font-bold text-black'>{data?.wind?.speed}MPH</p>
        <p className='pt-6 text-lg font-semibold text-black'>Winds</p>

        </div>
    
    

</div>
</>
}
    </div>
  );
};

export default Weather;
