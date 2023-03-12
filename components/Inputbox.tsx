"use client"; // this is a client component 👈🏽
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import {FormEvent, useContext, useState} from 'react'
import {ChatContext} from '../Context/ChatContext'

function Inputbox() {
const {dispatch}=useContext(ChatContext);
  const [prompt,setPrompt] = useState("")
  const [data ,setData] = useState(["hello"])
  const handleSubmit= async(e:FormEvent<HTMLFormElement>)=>{ 
    e.preventDefault()

    if(!prompt) return;

    setPrompt("")
        
    const res =await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({prompt}),
    })
   
    const da = await res.json();
    dispatch({type:"ADD_CHAT",payload:{prompt:{Usertype:'user', Mess:prompt},da:{Usertype:'bot',Mess:da.text}} })
    console.log(da);
    
   
    // console.log(data.text);
    setData([...data, da.text]);
     
  }


    
   
    

  return (
      <form onSubmit={handleSubmit} className="flex relative items-center bottom-0 w-[100%] justify-between ">   
    <input type="text" className='px-10 w-full bg-slate-500 p-3 rounded-md outline-none' value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
   
   <button className='absolute h-6 w-6 -rotate-12 right-3'><PaperAirplaneIcon  /></button>
   </form>
  )
}

export default Inputbox