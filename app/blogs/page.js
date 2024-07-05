import Link from 'next/link'
import React from 'react'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
    title: "Blog 1",
    description: "blog 1 description"
  },
    {
    id:2,
    title: "Blog 2",
    description: "blog 2 description"
    }
  ]
    
  return (
    <main>
      <ul>
        {blogs.map(blog => (
        
             <li key={blog.id} className='mb-4 mt-4'><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
          
       
        ))}
      </ul>
    </main>
  )
}
