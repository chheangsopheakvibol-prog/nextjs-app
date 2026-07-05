import React from 'react'
import Link from "next/link"

export default function Header() {
  return (
    <div>
       <header className='p-4 bg-red-300 flex gap-4'>
           <Link href="/">Home</Link>
          <Link href="/about">about</Link>  
          <Link href="/contact">contact</Link>               
           
           
           
             </header>
        
        </div>

  )
}