"use client"; // this is a client component 👈🏽
import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../Context/ChatContext'
import { MESS } from '../typing';
import Message from './Message'


function Messages() {
  const {chats}=useContext(ChatContext);
 
  
    const bottomRef = useRef();
    useEffect(() => bottomRef.current.scrollIntoView({behavior: 'smooth'}),[chats]);
  
  
  
//  const Data:MESS[] =data
//  console.log(Data);
 
 
  
  return (
    <div className='flex flex-col gap-5 overflow-y-scroll no-scrollbar h-[80%] w-full'>
    {chats.map((doc, index) =>(
       <Message doc={doc} key={index}/>
    ))}
    <div className='w-full'  ref={bottomRef} />
    </div>
  )
}

export default Messages