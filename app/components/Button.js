'use client'
import React from 'react'

export default function Button() {
  return (
    <div className='mt-5'>
    <button className="bg-green-500 rounded" onClick={()=>console.log("i have clicked")}>
    Click here
    </button> 
</div>
  )
}
