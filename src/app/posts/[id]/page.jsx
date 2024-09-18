import React from 'react';

export const generateMetadata = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const postData = await res.json();

    return {
        title: `${postData.title}`,
        description: `${postData?.body}`,
        keywords: postData?.body.split(" ")
    }
}

const PostDetails = ({ params }) => {
    return (
        <div>
            post details
        </div>
    );
};

export default PostDetails;