
import './App.css'

import Card from './components.jsx/Card.jsx';
import { hospitals } from "./data/hospitals";
function App() {


  return (
    <>
<div className=" w-full">
<div className="flex flex-wrap">

    {hospitals.map((hospital, index) => (
      <div className="w-[80%] mx-auto xl:w-[50%] overflow-x-hidden  2xl:flex ">

      <Card key={index} hospital={hospital} />
    </div>
    ))}
    </div>
    </div>    


    </>
  )
}

export default App
