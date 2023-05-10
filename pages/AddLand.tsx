import Navbar from '@/components/navbar'
import React from 'react'

const AddLand = () => {
  return (
    <div className='grid h-screen grid-cols-5 m-4 gap-4'>
     
      <Navbar />
    
    <div className='grid col-span-4 grid-cols-2  gap-8'>
      <div>
        <img className= "w-full h-60" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <h1 className='font-bold'>23 sq.m</h1>
        <h2 className='font-bold text-orange-400'> Chandigarh</h2>    
        <p>PID: 44</p>
        <p>Survey: 23</p>
        <h3>Price $2320 </h3>
        <span>View verified Land</span> <span>Document</span>
         </div>
         <div>
        <img className='w-full h-60' src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <h1>23 sq.m</h1>
        <h2 className='text-orange'> Chandigarh</h2>    
        <p>PID: 44</p>
        <p>Survey: 23</p>
        <h3>Price $2320 </h3>
        <span>View verified Land</span> <span>Document</span>
         </div>
    </div>
    </div>
  )
}

export default AddLand