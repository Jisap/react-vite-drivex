import React from 'react'
import PageBanner from '../../../shared/ui/PageBanner'
import { blogs } from '../data/blogs'
import BlogCard from '../../../shared/ui/BlogCard'

const BlogPage = () => {
  return (
    <>
      <PageBanner
        title="Our Blog"
        currentPage="Blog"
      />

      <div className="blog section section-container py-[8%] relative space-y-10">
        <div className="blog-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <BlogCard id={blog.id} title={blog.title} date={blog.date} image={blog.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPage