import { Link, useParams } from "react-router-dom"
import PageBanner from "../../../shared/ui/PageBanner"
import { blogs } from "../data/blogs"
import { Calendar, User, Quote, MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import Button from "../../../shared/components/Button"
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import linkedIn from "../../../assets/images/linkedin.png"
import youtube from "../../../assets/images/youtube.png"
import CommentForm from "../../../shared/ui/CommentForm"

const BlogDetails = () => {
  const { id } = useParams()
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Blog Not Found</h2>
          <Link to="/blog" className="text-blue-600 hover:underline inline-flex items-center gap-2">
            <ArrowRight size={20} className="rotate-180" /> Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  const recentBlogs = blogs.filter(b => b.id !== blog.id).slice(0, 3);

  return (
    <>
      <PageBanner
        title="Blog Details"
        currentPage="Blog Details"
        productName={blog.title}
      />

      <div className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!">
        {/* Left Side - Main Content */}
        <div className="w-full lg:w-[70%] content space-y-8">
          <div className="blog-image mb-8 h-auto lg:h-125 overflow-hidden rounded-sm" data-aos="fade-center" data-aos-delay="300">
            <img
              src={blog.image}
              alt={blog.title}
              className="section-image object-cover hover:scale-110 transition-all duration-500"
            />
          </div>

          <div className="blog-meta flex flex-wrap gap-6 mb-6 text-gray-600 border-b pb-6" data-aos="fade-up">
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <User size={18} className="text-black" />
              <span>By Admin</span>
            </div>
            <div className="flex items-center gap-2 text-sm lg:text-base">
              <Calendar size={18} className="text-black" />
              <span>{blog.date}</span>
            </div>
          </div>

          <div className="blog-content space-y-8">
            <h1 className="heading-2 text-3xl lg:text-4xl font-bold text-gray-900 leading-tight" data-aos="fade-right">
              {blog.title}
            </h1>

            <p className="text-desc text-gray-600 leading-relaxed" data-aos="fade-up">
              Renting a car can be an essential part of travel, offering flexibility and convenience for exploring new destinations or navigating daily life when your own vehicle isn’t available. Whether you’re planning a vacation, business trip, or just need a temporary ride.
            </p>

            <p className="text-desc text-gray-600 leading-relaxed" data-aos="fade-up">
              The first step in the car rental process is selecting a reputable company. Major rental agencies like Hertz, Enterprise, Avis, and Budget are known for their extensive networks and reliability. However, don’t overlook local rental companies, which can sometimes offer better rates or more personalized service. Always check reviews and compare prices online to find the best option for your needs.
            </p>

            <blockquote className="relative p-8 bg-gray-50 border-l-4 border-black italic text-xl text-gray-800 rounded-sm" data-aos="fade-left">
              <Quote size={40} className="absolute top-4 right-4 text-gray-200 -z-0" />
              <div className="relative z-10 flex gap-4">
                <p className="text-desc lg:text-xl">
                  Before booking, ensure you meet the rental company’s requirements. Most agencies require drivers to be at least 21 years old, though some may have a minimum age of 25. Young drivers often face additional fees. A valid driver’s license and a credit card in the driver’s name are also essential. International travelers might need an International Driving Permit (IDP) in addition to their home country’s license.
                </p>
              </div>
            </blockquote>

            <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900" data-aos="fade-right">
              Understanding Rental Requirements
            </h3>

            <p className="text-desc text-gray-600" data-aos="fade-up">
              Car rental agencies offer a range of vehicles, from compact cars to luxury SUVs. Consider your needs and budget when choosing. For city travel, a compact car is economical and easy to park. If you’re traveling with family or a group, an SUV or minivan may be more appropriate. Don’t forget to check for special deals or discounts, such as weekend specials or packages that include GPS or child seats.
            </p>

            <ul className="space-y-5 list-disc ms-5 text-gray-600">
              <li data-aos="fade-right" data-aos-delay="200">
                <span className="text-lg font-medium">Opt for well-known rental agencies like Hertz, Enterprise, Avis, or local firms.</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="300">
                <span className="text-lg font-medium">Most rental companies require drivers to be at least 21, with some having a minimum age of 25.</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="400">
                <span className="text-lg font-medium">Read the agreement carefully, noting the rental period, mileage limits, fuel policy.</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="500">
                <span className="text-lg font-medium">Choose a vehicle that suits your needs and budget. Compact cars are while larger vehicles.</span>
              </li>
              <li data-aos="fade-right" data-aos-delay="600">
                <span className="text-lg font-medium">Ensure your rental comes with unlimited mileage if you plan on long-distance travel.</span>
              </li>
            </ul>

            <p className="text-desc text-gray-600 leading-relaxed" data-aos="fade-up">
              Insurance is a crucial aspect of car rental. Rental companies usually offer several coverage options, including Collision Damage Waiver (CDW), Theft Protection, and Third-Party Liability. Your personal car insurance or credit card may already cover rental cars, so check with your provider before purchasing additional coverage. It’s important to understand what is covered and any potential deductibles or exclusions.
            </p>

            <div className="section-container gap-3 pt-8 border-t border-gray-100 flex-wrap lg:flex-nowrap">
              <div className="tags centered-row flex-wrap gap-2">
                <h4 className="uppercase! text-2xl font-semibold tracking-wide" data-aos="fade-center">
                  Tags:
                </h4>
                <ul className="centered-row flex-wrap gap-3">
                  {['businesstravel', 'carrental', 'travel', 'travelplanning'].map((tag, idx) => (
                    <li key={tag} className="bg-primary text-white py-2 px-5 text-md rounded-full capitalize hover:bg-black transition-colors cursor-pointer" data-aos="fade-center" data-aos-delay={idx * 100}>
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="share-section centered-row gap-4 mt-5 lg:mt-0">
                <span className="font-semibold text-gray-900 uppercase tracking-widest text-sm">Share:</span>
                <div className="flex gap-3">
                  {[
                    { img: facebook, name: 'facebook' },
                    { img: instagram, name: 'instagram' },
                    { img: linkedIn, name: 'linkedin' },
                    { img: youtube, name: 'youtube' }
                  ].map((social, idx) => (
                    <a key={social.name} href="#" className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center hover:bg-primary group transition-all duration-300" data-aos="fade-center" data-aos-delay={idx * 100}>
                      <img src={social.img} alt={social.name} className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-10" data-aos="fade-up">
              <CommentForm />
            </div>
          </div>
        </div>

        {/* Right Side - Sidebar */}
        <aside className="w-full lg:w-[30%] space-y-12 lg:sticky lg:top-24">
          {/* Recent Posts */}
          <div className="bg-white p-8 shadow-xs border border-gray-100 rounded-sm" data-aos="fade-left">
            <h4 className="text-xl font-bold text-gray-900 mb-8 pb-2 border-b-2 border-black inline-block">
              Recent Posts
            </h4>
            <div className="space-y-6">
              {recentBlogs.map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`} className="flex gap-4 group">
                  <div className="w-20 h-20 flex-shrink-0 rounded-sm overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                    <h5 className="text-sm font-semibold text-gray-900 group-hover:text-black line-clamp-2 transition-colors">
                      {item.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Widget */}
          <div className="bg-black text-white p-8 rounded-sm shadow-xl" data-aos="fade-left" data-aos-delay="200">
            <h4 className="text-2xl font-bold mb-6">Need Assistance?</h4>
            <p className="text-gray-400 mb-8">Our team is available 24/7 to help you with your car rental questions.</p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-widest">Phone</span>
                  <span className="font-semibold">(414) 857 - 5557</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-widest">Email</span>
                  <span className="font-semibold">support@drivex.com</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase tracking-widest">Address</span>
                  <span className="font-semibold">221B Baker St, London</span>
                </div>
              </li>
            </ul>

            <Button
              text="Contact Us"
              className="w-full mt-10 bg-white text-black hover:bg-gray-200 border-none"
            />
          </div>
        </aside>
      </div>
    </>
  )
}

export default BlogDetails