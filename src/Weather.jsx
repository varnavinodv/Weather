import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Themecontext from './ThemeContext.js';

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

  const { theme, toggleTheme } = useContext(Themecontext);
  console.log(theme); 
  const handleCheckboxChange = () => {
    toggleTheme();
  };
  
  
  
  

  return (
    <div className={` ${theme ? 'daybg' : 'homebg'}`}>
      <div className='flex flex-wrap sm:gap-[28rem] '>
      <div className='pt-5'>
      <div class="theme-switch">
  <input type="checkbox" id="theme-checkbox" onChange={handleCheckboxChange} />
  <label for="theme-checkbox">
    <div></div>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          fill-rule="evenodd"
          d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6"
      >
        <path
          d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
        ></path>
      </svg>
    </span>
  </label>
</div>
</div>
<div>

      <form className="sm:max-w-md sm:mx-auto pt-6" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={data1?data1:''} id="search" className="w-[300px] p-4 ms-20 text-sm border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white" placeholder="Search district" required />
      </form>
</div>
      </div>
  {data &&
  <>
      <div className='pt-[200px]'>
        <p className={`text-7xl text-center font-semibold  ${theme ? 'text-gray-800' : 'text-gray-400'}`}>{data?.name}</p>
        <p className={`text-5xl text-center font-medium ${theme ? 'text-gray-800' : 'text-gray-400'} p-5`}>{data?.main?.temp}°F</p>
        <p className={`text-2xl text-center font-medium ${theme ? 'text-gray-800' : 'text-gray-400'}`}>{data?.weather[0]?.main}</p>
      </div>

      <div className={`${theme ? 'bg-slate-500/60' : 'bg-slate-400/60'} sm:w-[650px] h-[150px] m-auto mt-10 rounded-2xl flex flex-wrap justify-around text-center `}>
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
