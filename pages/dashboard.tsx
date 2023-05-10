import React from 'react'
import Navbar from "@/components/navbar"
// import styles from "../styles/dashboard.module.css"
import Card from "@/components/card"
const Dashboard = () => {
  return (
    <div className='m-2'>
 <h1 className='text-2xl font-bold'>Dashboard</h1>
    <div className='grid gap-4 grid-cols-5 h-screen'>
       <Navbar/>
    <div className='grid col-span-4 gap-4 grid-cols-3 grid-rows-3 m-2 bg-slate-100 h-3/4'>

       <div className="flex items-center flex-col rounded-sm bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className='w-8 h-8 rounded-full bg-cyan-200 border-white'>
      
         <img src="/images/user.png" className="w-8" alt="" />
        </div>
         <h1 className='text-1xl mt-6'>Total Sellers</h1>
         <p className='font-bold '>1</p>
       </div>
         
       
       <div className="flex items-center flex-col rounded-sm bg-gradient-to-r from-sky-500 to-indigo-500">
        <div className='w-8 h-8 rounded-full bg-sky-200 border-white'>
      
         <img src="/images/user.png" className="w-8" alt="" />
        </div>
         <h1 className='text-1xl mt-6'>Total Sellers</h1>
         <p className='font-bold '>1</p>
       </div>
       
       <div className="flex items-center flex-col rounded-sm bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className='w-8 h-8 rounded-full bg-violet-200 border-white'>
      
         <img src="/images/user.png" className="w-8" alt="" />
        </div>
         <h1 className='text-1xl mt-6'>Total Sellers</h1>
         <p className='font-bold'>1</p>

       </div>
         <Card
         Profile='Profile'
         vProf='View Profile'/>
           <Card
         Profile='Owner Lands'
         vProf='View Your Lands'/>
           <Card
         Profile='Make Payments For Approved Land Requests'
         vProf='Make Payement'/>

         <div className='col-span-3 bg-white drop-shadow-md p-2 rounded-md'>
          <h1>Lands Info</h1>
             <div className='grid gap-4 grid-cols-8 '>
              <p>#</p>
              <p>Area</p>
              <p>City</p>
              <p>State</p>
              <p>Price</p>
              <p>Property PID</p>
              <p>Survey Number</p>
              <p>Request</p>
              <p>1</p>
              <p>450</p>
              <p>Akola</p>
              <p>Maharashtra</p>
              <p>250000</p>
              <p>12</p>
              <p>34</p>
              <button className='p-1 rounded-sm bg-slate-500 text-white'>Request Land</button>

             </div>
         </div>
    </div>
         </div>
    </div>
  )
}

export default Dashboard