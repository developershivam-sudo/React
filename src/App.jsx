import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
    console.log(response.data);
    
    setData(response.data);
  }

  return (
    <div className='p-10'>
      <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xt px-6 py-3 rounded active:scale-90'>Get Data</button>
      <div className='p-5 mt-5 bg-gray-950 text-white'>
        {
          data.map( (element, idx) => {
            return <div key = {idx} className='text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
              <img className='h-40' src={element.download_url} alt="" />
              <h1 className='text-white px-4'>{element.author}</h1>
            </div>
          })
        }
      </div>
    </div>
  );
};

export default App;