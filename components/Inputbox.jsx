import { type } from "os"
import { useState } from "react"



function Inputbox() {
    const [prompt, setPrompt] = useState("")
    const handleSubmit =()=> {}
  return (
    <form >
    <div className="flex relative items-center text-center w-full justify-between ">   
    <input type="text" className='px-10 w-[100%] bg-slate-500 p-3 rounded-md outline-none' value={prompt} placeholder='' onChange={(e)=>setPrompt(e.target.value)} />
    <button type='submit'>
   <PaperAirplaneIcon className='absolute h-6 w-6 -rotate-12 right-3' onClick={handleSubmit}/></button>
   </div>
   </form>
  )
}

export default Inputbox