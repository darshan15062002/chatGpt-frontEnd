"use client"; // this is a client component 👈🏽
import React, { useContext } from 'react'
import { ChatContext } from '../Context/ChatContext'
import { MESS } from '../typing';
import Message from './Message'

function Messages() {
  const {data}=useContext(ChatContext);
  console.log(data);
  
//  const Data:MESS[] =data
//  console.log(Data);
 
 
  
  return (
    <div className='flex flex-col gap-5 overflow-y-scroll no-scrollbar w-full'>
    {data.map((doc) =>(
       <Message doc={doc} />
    ))}
    </div>
  )
}

export default Messages