import React from 'react'
import PostCard from './PostCard'

const PostsPage = ({searchResults}) => {
    const results = searchResults.map(post=><PostCard key={post.id} post={post}/>)
    //if results exists, then check if it is not empty, then save results in content, if results is empty just say no matching posts found
    const content = results?.length ? results : <article><p>No Matching Posts</p></article>

    return (
        <main>{content}</main>
    )
  
}

export default PostsPage