import React, { useState ,useEffect } from 'react'
import axios from 'axios' 
const Main = () => {
const [numbers,setNumbers]=useState([]);
const body={
  
    companyName: "DRMCET",
    clientID: "e9f91c4f-b8cb-4535-ac91-76d7c7b3c5bb",
    clientSecret: "SjoUknblcaupucTA",
    ownerName: "Rajakumar",
    ownerEmail: "727621bee059@mcet.in",
    rollNo: "727621bee059"

};
const [val,setVal]=useState(0)

/*useEffect(()=>{
  try{
  const response=axios.post("http://20.244.56.144/test/auth",body);
  console.log(response);}
  catch(err){
    console.log(err);
  }
},[]);*/
  return (
    <div className=' bg-slate-600 flex justify-center mt-[20%]'>
    <div className=' mr-40 w-96 bg-slate-300 h-50 my-auto rounded-md  p-5'>
        <h1 className=' text-2xl align-middle pr-20'>
            Calculater
        </h1>
        <div className=' bg-slate-500 w-full'>
<div className='bg-slate-300 mt-12'>
  <input className='bg-slate-100 mr-3' type='text' placeholder='enter the values' value={val} onChange={(e)=>{setVal(e.target.val)}}/>
  <button className='w-25 rounded-full text-white bg-slate-600 p-1 mr-[40px]' onClick={()=>{
    setVal(eval(val))
  }}>Calculate</button>
</div>
        </div>
        </div>
        </div>
        
  )
}

export default Main