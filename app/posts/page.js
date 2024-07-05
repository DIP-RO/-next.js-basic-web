import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function Posts() {
    const posts = await getAllPosts();
    console.log(posts);
    return (
        <div>
            <h1>all post</h1>
            <ul>
                {posts.map(post => <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>)}
            </ul>
        </div>
    )
}
