"use client"; // this is a client component 👈🏽
import React, { useState } from 'react'


function Message({doc}){
  
  

  return (
    <div className={` flex  p-0 sm:p-4  ${doc.Usertype==='user'? 'flex-row-reverse':''}`} >
<div className={`bg-gray-400 rounded-b-xl   p-3  text-black ${doc.Usertype==='user'? 'rounded-l-xl':'rounded-r-xl'}`}>
 <span className='font-sans text-xs'>{doc.Mess}</span>
</div>
    </div>
  )
}

export default Message