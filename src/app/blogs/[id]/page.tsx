'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/header'
import { supabase } from "@/utils/server"

// Define the shape of a blog post
type BlogPost = {
  id: string;
  title: string;
  created_at: string;
  content: string;
}

// Define the structure of the subtitles (content related to the blog)
type Subtitle = {
  id: string;
  content: string;
  subtitle: string;
}

const BlogPostPage = () => {
  const [blog, setBlog] = useState<BlogPost | null>(null); // Store fetched blog data
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams(); // Use useParams to get the dynamic route parameter
  const [content, setContent] = useState<Subtitle[]>([]); // Store the subtitles or content

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Fetch the main blog post data
        const { data, error } = await supabase
          .from('blog')
          .select('*')
          .eq('id', id)
          .single(); // Fetch a single blog post by id

        if (error) throw error;
        setBlog(data); // Set the blog data

        // Fetch the subtitles/content related to this blog
        const { data: subtitleData, error: subtitleError } = await supabase
          .from('subtitles')
          .select('*')
          .eq('blog_id', id); // Fetch subtitles by the blog id
        
        if (subtitleError) throw subtitleError;
        setContent(subtitleData); // Set the subtitle data

      } catch (error) {
        console.error('Error fetching blog or subtitles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id]); // Fetch blog and subtitles when the id changes

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return (
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
          <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-6">Oops! The blog post doesn't exist.</p>
          <Link href="/blogs" className="text-blue-500">Search for another blog?</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className='bg-gradient-to-b from-slate-50 via-slate-200 to-slate-100 p-3 tablet:text-center'>
        <div className="p-4 min-h-screen">
          <h1 className="text-3xl font-extrabold text-pretty px-5">{blog.title}</h1>
          <p className="text-gray-500 px-3 text-2xl">Published on: {new Date(blog.created_at).toLocaleDateString()}</p>
          
          <div className="mt-4 px-5">
           

            {/* Render subtitles/content if available */}
            {content.length > 0 && (
              <div className="mt-6 p-20">
               
                {content.map((subtitle) => (
                  <div key={subtitle.id} className="mt-4 p-5">
                    <h3 className="font-semibold text-2xl p-5">{subtitle.subtitle}</h3>
                    <p className='text-lg'>{subtitle.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;

