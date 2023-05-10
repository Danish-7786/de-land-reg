import React from 'react'
import {AiTwotonePieChart} from 'react-icons/ai'
import {CiUser} from "react-icons/ci"
import {FcLandscape} from "react-icons/fc"
import {BsHouseDownFill} from "react-icons/bs"
import {FaMoneyBillAlt} from "react-icons/fa"
import { useRouter } from 'next/router'
const Navbar = () => {
    const router = useRouter();

  return (
    <div className='bg-gradient-to-r rounded-md from-purple-500 to-pink-500 pt-8 flex flex-col gap-4'>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <AiTwotonePieChart className='text-white mt-1' size={20}/>
        <a onClick={()=>router.push("/")} className='flex gap-4 text-white ' > Dashboard</a>
   </div>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <CiUser className='text-white mt-1' size={20}/>
        <h1 className='flex gap-4 text-white'>Buyers Profile</h1>
   </div>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <FcLandscape className='text-white mt-1' size={20}/>
        <h1 onClick={()=>router.push("/AddLand")} className='flex gap-4 text-white'>LAND GALLERY</h1>
   </div>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <BsHouseDownFill className='text-white mt-1' size={20}/>
        <h1 className='flex gap-4 text-white'>Owned Lands</h1>
   </div>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <FaMoneyBillAlt className='text-white mt-1' size={20}/>
        <h1 className='flex gap-4 text-white'>MAKE PAYMENT</h1>
   </div>
   <div className='flex gap-4 p-1 items-baseline cursor-pointer'>
   <CiUser className='text-white mt-1' size={20}/>
        <h1 className='flex gap-4 text-white'>HELP</h1>
   </div>
    
    
    </div>
  )
}

export default Navbar