import BlogCard from "../../../../shared/ui/BlogCard"
import { blogs } from "../../data/blogs"




const Blog = () => {
  return (
    <>
      <div className="blog section py-[8%] relative space-y-10">
        <div className="text-black w-full relative gap-8">
          <div className="main-title gap-3 text-center content-col">
            <span className="sub-title" data-aos="fade-up" data-aos-delay="200">
              Latest Articles
            </span>

            <h2 className="heading-1 max-w-140 mx-auto" data-aos="fade-up" data-aos-delay="300">
              Stay informed and inspired for your next journey
            </h2>
          </div>
        </div>

        <div className="blog-grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {blogs.slice(0, 3).map((blog, index) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <BlogCard id={blog.id} title={blog.title} date={blog.date} image={blog.image} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog