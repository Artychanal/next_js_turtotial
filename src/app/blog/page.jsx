// Blog.jsx (Серверный компонент)
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import BlogContent from './content.jsx'; // Клиентский компонент

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

    return (
        <BlogContent data={data} />
    );
};

export default Blog;
