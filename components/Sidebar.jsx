import React from 'react'

function Sidebar() {
  return (
    <div className=' bg-gray-900 max-w-xs md:min-w-[20rem] text-white overflow-y-auto'>
      <div className="flex gap-3 justify-start m-2 p-3 rounded-md
      border-gray-400 cursor-pointer border ">
        <span>+</span>
        <h3>New chat</h3>
      </div>
    </div>
  )
}

export default Sidebar