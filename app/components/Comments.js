import { comment } from 'postcss'
import React from 'react'

export default async function Comments({promise}) {
  const  comments = await promise 
  return (
    <div><h2>comment</h2>
    <ul>
        {comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
    </ul></div>
  )
}
