## Form Handling
```React
import { useState } from "react"


function App (){

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(val);
    setVal("")

  }
  const[val, setVal] = useState("");

  return (
    //fragments: empty tags works as wrapper
    <> 
      <form onSubmit={ (e) => {
        submitHandler(e);
      }}>
        <input
        onChange={ (e) => {
          setVal(e.target.value)
        }}
        value={val} 
        className="px-4 py-3 m-5 rounded bg-slate-50 font-semibold text-slate-950"
        type="text" 
        placeholder="write here"
        />
        <button className="px-4 py-3 m-5 rounded bg-slate-50 font-semibold text-slate-950">Submit</button>
      </form>
    </>
  )
}

export default App
```
## JSON / API Handling
### JSON
```React
import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const users = [
  {
    "name": "Alice Johnson",
    "age": 28,
    "city": "New York",
    "profession": "Software Engineer",
    "profilePhoto": "https://example.com/photos/alice.jpg"
  },
  {
    "name": "Ravi Kumar",
    "age": 32,
    "city": "Bangalore",
    "profession": "Data Analyst",
    "profilePhoto": "https://example.com/photos/ravi.jpg"
  },
  {
    "name": "Emily Chen",
    "age": 24,
    "city": "San Francisco",
    "profession": "UX Designer",
    "profilePhoto": "https://example.com/photos/emily.jpg"
  },
  {
    "name": "El-Sayed",
    "age": 30,
    "city": "Cairo",
    "profession": "Cybersecurity Specialist",
    "profilePhoto": "https://example.com/photos/mohamed.jpg"
  },
  {
    "name": "Sofia Martinez",
    "age": 27,
    "city": "Madrid",
    "profession": "Marketing Manager",
    "profilePhoto": "https://example.com/photos/sofia.jpg"
  }
]

function App (){
  
  return (
    <>
      <Navbar />
      <div className="p-10 flex gap-4 text-white">
          {users.map( (element, idx) => {
            return <div key = {idx}>
              <Card name={element.name} age={element.age} city={element.city} profession={element.profession} profilePhoto={element.profilePhoto}/>
            </div>
          })}
        </div>
        
      <Footer />
    </>
  )
}

export default App
```
### API
```React
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=20')
    console.log(response.data);
    
    setData(response.data);
  }

  useEffect( () => {
    getData()
  }, [])

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
```