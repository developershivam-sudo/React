import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



function App (){
  
  return (
    <>
      
      <Navbar />
        
      <div className="p-10 flex gap-2">
        <Card name="Shivam" surname='Singh' city='Saharanpur' />
        <Card name = 'Ankit' surname='Kumar' city='Saharanpur'/>
      </div>
      <Footer />
    </>
  )
}

export default App