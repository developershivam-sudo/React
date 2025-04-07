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