import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({ params }) {
    const { id } = params;
    if (id == '3') {
        notFound();
    }
  return (
      <div>the blog id id {id}</div>
  )
}
