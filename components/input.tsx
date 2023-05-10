import React from 'react'
interface InputProps{
    id:string;
    // onChange:any;
    // value:string;
    label:string;
    type:string;
}
const Input: React.FC<InputProps> = ({
    id,label,type
}) => {
    
  return (
    <div className='relative'>

    <input 
    placeholder=' '
    id={id}
    type={type}
    
    className='text-xs cursor-text bg-neutral-700 w-full mt-3 rounded-sm outline-none text-white px-4 pt-4 pb-4 peer'>
    </input>
    <label htmlFor="{id}" className="text-xs cursor-text absolute top-6 left-4 duration-150 transform -translate-y-3 scale-80 text-zinc-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-sm ">{label} </label>
    </div>
  )
}

export default Input