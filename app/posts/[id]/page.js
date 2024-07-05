import Comments from '@/app/components/Comments';
import getAllPosts from '@/lib/getAllPosts';
import getPost from '@/lib/getPost';
import getPostComments from '@/lib/getPostComment';
import React, { Suspense } from 'react'

export async function generateMetadata({params}) {
    const { id } = params;
    const post = await getPost(id)
    return {
        title:post.title,
        description:post.body
    }
}
export default async function PostPage({ params }) {
    const { id } = params;
    const postPromise = getPost(id)
    const commentPromise = getPostComments(id)
    
    // const [post , comments] =await Promise.all([postPromise , commentPromise])
    const post = await postPromise;
  
  return (
      <div>
          <h2>{post.title}</h2>
          <h2>{post.body}</h2>
        
          <Suspense fallback="<h1>Loading comments....</h1>">
              <Comments promise={ commentPromise} />
          </Suspense>
          
    </div>
  )
}
export async function generateStaticParams() {
    const posts = await getAllPosts()
    return posts.map(post => ({
        id: post.id.toString(),
    }))
}