import React from 'react'
interface InputProps{
    Profile:string;
    // onChange:any;
    // value:string;
    vProf:string;
 
}
const Card:React.FC<InputProps> = ({
    Profile,vProf
})=> {
  return (
        <div className='flex justify-between flex-col mt-8 d drop-shadow-md p-2 rounded-sm bg-white'>
          <h1 >{Profile}</h1>
          <button className='bg-sky-500 p-1 text-white drop-shadow-md w-40'>{vProf}</button>
         </div>
  )
}

export default Card