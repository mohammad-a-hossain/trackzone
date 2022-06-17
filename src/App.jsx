
import './App.css'
import ClockForm from './components/CreateClock.jsx/index.jsx'
 import Card from './components/Card'
 import UserForm from './components/UserForm'
 import IntervalExample from './components/extra'


 
function App(){
  

  return (
     <div className="App">
     {/*  <IntervalExample /> */}
        <UserForm />
        <ClockForm  />
       <Card />

    </div>
   
  )
}

export default App
