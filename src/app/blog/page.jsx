import React from 'react';
import BlogContent from './content';

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Blog = async () => {
    const data = await getData();
    return <BlogContent data={data} />;
};

export default Blog;
