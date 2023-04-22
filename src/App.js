import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [loading, setLoading]=useState(true);
  const [tours, setTours]=useState([]);

  const removePlace =(id)=>{
   const newTours= tours.filter((tour)=> tour.id!=id);
   setTours(newTours)
  }


  const getData = async()=>{
     setLoading(true);

     try {
       const response = await fetch(url);
       const data = await response.json();
       setLoading(false);
       setTours(data);
     } catch (error) {
       setLoading(true);
       console.log("Error")
     }
   
  }

  useEffect(()=>{
    getData();
  },[])


  if(loading){
     return (
       <main>
         <Loading ></Loading>
       </main>
     );
  }
if(tours.length===0){
  return <main>
    <div className="title">
      <h2>No tour left</h2>
       <button className='btn' onClick={getData}>Refersh</button>
    </div>
  </main>
}
  return (
    <main>
      <Tours tours={tours} removePlace={removePlace}></Tours>
    </main>
  );
}

export default App
