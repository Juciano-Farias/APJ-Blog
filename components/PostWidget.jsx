import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug}) => {
    const [relatedPost, setRelatedPost] = useState([]);
    useEffect(() => {
        if(slug) {
            getSimilarPosts(categories, slug)
            .then((result) => setRelatedPost(result))
        } else {
            getRecentPosts()
            .then((result) => setRelatedPost(result))
        }
    }, [slug]);

    return (
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? 'Posts Parecidos' : 'Posts Recentes'}
            </h3>
            {relatedPost.map(post => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='w-16 flex-none'>
                        <img
                            className='align-middle rounded-full'
                            src={post.featuredImage.url}
                            alt={post.title}
                            height="60px"
                            width="60px"
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('DD/MM, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
