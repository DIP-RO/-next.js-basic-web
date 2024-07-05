import Link from 'next/link'
import React from 'react'
export const metadata = {
    title: "blog about page",
    description: "Generated by create next app",
  };
export default function Aboutlayout({children}) {
  return (
      <div><nav>
          <ul className='flex gap-6'>
              <li><Link href="/about/mission">mission</Link></li>
              <li><Link href="/vision">vision</Link></li>
          </ul>
      </nav>
          {children}
      </div>
  )
}