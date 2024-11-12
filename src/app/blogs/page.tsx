'use client'
import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import { useRouter } from "next/navigation"
import { motion } from 'framer-motion'
import { supabase } from "@/utils/server"

// Define the shape of a blog post
type BlogPost = {
    id: string;
    title: string;
    created_at: string;
    content: string;
}

const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]); 
    const [isClient, setIsClient] = useState(false); // To detect client-side rendering
    const router = useRouter();

    useEffect(() => {
        // Set isClient to true once the component is mounted on the client
        setIsClient(true);

        const fetchBlogs = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog')
                    .select('*');
                if (error) throw error;
                setBlogPosts(data || []);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const goToBlog = (id: string) => {
        if (isClient) {
            router.push(`/blogs/${id}`);
        }
    };

    return (
        <div>
            <Header />
            <motion.div
                className="w-screen h-screen bg-gradient-to-b from-slate-50 via-slate-200 to-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            > 
                <div className='w-full h-auto bg-slate-400 flex justify-center'>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr className="text-left bg-gray-100">
                                <th className="p-2">Name</th>
                                <th className="p-2">Published Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogPosts.map((blog) => (
                                <tr key={blog.id}>
                                    <td
                                        className="p-2 border cursor-pointer"
                                        onClick={() => goToBlog(blog.id)}
                                    >
                                        {blog.title}
                                    </td>
                                    <td className="p-2 border">
                                    {new Date(blog.created_at).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    )
}

export default Blogs;
