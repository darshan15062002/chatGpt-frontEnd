"use client"; // this is a client component 👈🏽
import React, { useState } from 'react'
//importing typewriter-effect
import Typewriter from "typewriter-effect";
type Chat = {
  Usertype: string;
  Mess: string;
};
type ChatProps = {
  doc: Chat;
};
function Message({doc}:ChatProps){
  console.log(doc);
  
  

  return (
    <div className={` flex  p-0 sm:p-4  ${doc.Usertype==='user'? 'flex-row-reverse':''}`} >
<div className={`bg-gray-400 rounded-b-xl   p-3  text-black ${doc.Usertype==='user'? 'rounded-l-xl':'rounded-r-xl'}`}>
 {/* <span className='font-sans text-xs text-left'>{doc.Mess}</span> */}
 <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(doc.Mess)
         
       .pauseFor(300)
      

       .start();
       }}
       />
</div>
    </div>
  )
}

export default Message