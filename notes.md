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