import React from 'react';
import { getPosts } from '../services/posts.services';
import Link from 'next/link';


const PostPage = async () => {
    const postsData = await getPosts(); 
    return (
        <div>
           <p className='text-center py-4 text-2xl font-bold text-rose-300'> Total Posts : {postsData?.length}</p>
            <div className='grid grid-cols-4 gap-6'>
                {
                    postsData?.map(({title,id, body})=>(
                        <div key={id} className="border-2 p-4">
                            <h6 className='text-xl font-semibold'>{title}</h6>
                            <h6 className='text-gray-400'>{body}</h6>
                            <button className=" rounded px-2 bg-slate-700 py-1"><Link href={`/posts/${id}`}>View</Link>  </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;
 