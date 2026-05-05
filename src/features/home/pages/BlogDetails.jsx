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

      {/* <div className="container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!">
       
        <div className="w-full lg:w-[70%] content">
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
              Renting a car can be a seamless experience if you know the right tips and tricks. Whether you're traveling for business or leisure, understanding the nuances of car rentals can save you time, money, and stress. In this comprehensive guide, we'll explore everything you need to know about booking your next car rental.
            </p>

            <blockquote className="relative p-8 bg-gray-50 border-l-4 border-black italic text-xl text-gray-800 rounded-sm" data-aos="fade-left">
              <Quote size={40} className="absolute top-4 right-4 text-gray-200 -z-0" />
              <p className="relative z-10">
                "The journey of a thousand miles begins with a single step, and usually, that step involves a reliable rental car."
              </p>
            </blockquote>

            <h3 className="text-2xl font-semibold text-gray-900" data-aos="fade-right">
              Key considerations before booking
            </h3>

            <p className="text-desc text-gray-600" data-aos="fade-up">
              Before you hit the 'book' button, consider the size of the vehicle you need, the fuel policy, and the insurance coverage. It's also important to check the rental company's reviews and their policy on additional drivers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="rounded-sm overflow-hidden h-60 lg:h-80" data-aos="zoom-in">
                <img src={blog.image} alt="detail 1" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-sm overflow-hidden h-60 lg:h-80" data-aos="zoom-in" data-aos-delay="200">
                <img src={blog.image} alt="detail 2" className="w-full h-full object-cover" />
              </div>
            </div>

            <p className="text-desc text-gray-600" data-aos="fade-up">
              Another crucial factor is the pickup and drop-off location. Airport rentals are convenient but often come with extra fees. Downtown locations might offer better rates if you're willing to take a short shuttle or taxi ride.
            </p>

            <div className="share-section flex items-center gap-6 pt-8 border-t border-gray-100" data-aos="fade-up">
              <span className="font-semibold text-gray-900 uppercase tracking-widest text-sm">Share Post:</span>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black group transition-all duration-300">
                  <img src={facebook} alt="facebook" className="w-5 h-5 object-contain group-hover:invert" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black group transition-all duration-300">
                  <img src={instagram} alt="instagram" className="w-5 h-5 object-contain group-hover:invert" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black group transition-all duration-300">
                  <img src={linkedIn} alt="linkedin" className="w-5 h-5 object-contain group-hover:invert" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-black group transition-all duration-300">
                  <img src={youtube} alt="youtube" className="w-5 h-5 object-contain group-hover:invert" />
                </a>
              </div>
            </div>
          </div>
        </div>

       
        <aside className="w-full lg:w-[30%] space-y-12 lg:sticky lg:top-24">
          
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
      </div> */}

      <div className="blog section section-container py-[8%] gap-10 relative flex-col">
        <div className="blog-image h-200 w-full rounded-sm overflow-hidden" data-aos="fade-center" data-aos-delay="300">
          <img
            src={blog.image}
            alt={blog.title}
            className="section-image object-cover hover:scale-110 transition-all duration-300"
          />
        </div>

        <div className="blog-content space-y-8">
          <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="400">
            {blog.title}
          </h3>

          <p className="text-desc" data-aos="fade-right" data-aos-delay="500">
            Renting a car can be an essential part of travel, offering flexibility and convenience for exploring new destinations or navigating daily life when your own vehicle isn’t available. Whether you’re planning a vacation, business trip, or just need a temporary ride.
          </p>

          <p className="text-desc" data-aos="fade-right" data-aos-delay="500">
            The first step in the car rental process is selecting a reputable company. Major rental agencies like Hertz, Enterprise, Avis, and Budget are known for their extensive networks and reliability. However, don’t overlook local rental companies, which can sometimes offer better rates or more personalized service. Always check reviews and compare prices online to find the best option for your needs.
          </p>

          <div className="bg-white shadow-lg centered-row items-start! flex-wrap lg:flex-nowrap gap-5 p-5 max-w-7xl mx-auto rounded-sm mb-10" data-aos="fade-right" data-aos-delay="700">
            <div className="quote">
              <Quote size={50} />
            </div>

            <p className="text-desc lg:text-xl">
              Before booking, ensure you meet the rental company’s requirements. Most agencies require drivers to be at least 21 years old, though some may have a minimum age of 25. Young drivers often face additional fees. A valid driver’s license and a credit card in the driver’s name are also essential. International travelers might need an International Driving Permit (IDP) in addition to their home country’s license.
            </p>
          </div>

          <h3 className="heading-2 text-2xl lg:text-3xl font-semibold text-gray-900" data-aos="fade-right" data-aos-delay="900">
            Understanding Rental Requirements
          </h3>

          <p className="text-desc text-gray-600" data-aos="fade-right" data-aos-delay="800">
            Car rental agencies offer a range of vehicles, from compact cars to luxury SUVs. Consider your needs and budget when choosing. For city travel, a compact car is economical and easy to park. If you’re traveling with family or a group, an SUV or minivan may be more appropriate. Don’t forget to check for special deals or discounts, such as weekend specials or packages that include GPS or child seats.
          </p>

          <ul className="space-y-5 list-disc ms-5">
            <li>
              <span className="text-lg font-medium" data-aos="fade-right" data-aos-delay="600">
                Opt for well-known rental agencies like Hertz, Enterprise, Avis, or local firms.
              </span>
            </li>

            <li>
              <span className="text-lg font-medium" data-aos="fade-right" data-aos-delay="600">
                Most rental companies require drivers to be at least 21, with some having a minimum age of 25.
              </span>
            </li>

            <li>
              <span className="text-lg font-medium" data-aos="fade-right" data-aos-delay="600">
                Read the agreement carefully, noting the rental period, mileage limits, fuel policy.
              </span>
            </li>

            <li>
              <span className="text-lg font-medium" data-aos="fade-right" data-aos-delay="600">
                Choose a vehicle that suits your needs and budget. Compact cars are while larger vehicles.
              </span>
            </li>

            <li>
              <span className="text-lg font-medium" data-aos="fade-right" data-aos-delay="600">
                Ensure your rental comes with unlimited mileage if you plan on long-distance travel.
              </span>
            </li>
          </ul>

          <p className="text-desc border-b border-gray-200 pb-8" data-aos="fade-right" data-aos-delay="800">
            Insurance is a crucial aspect of car rental. Rental companies usually offer several coverage options, including Collision Damage Waiver (CDW), Theft Protection, and Third-Party Liability. Your personal car insurance or credit card may already cover rental cars, so check with your provider before purchasing additional coverage. It’s important to understand what is covered and any potential deductibles or exclusions.
          </p>

          <div className="section-container gap-3">
            <div className="tags centered-row flex-wrap gap-2">
              <h4 className="uppercase! text-2xl font-semibold tracking-wide" data-aos="fade-center" data-aos-delay="600" >
                Tages:
              </h4>

              <ul className="centered-row flex-wrap gap-3">
                <li className="bg-primary text-white py-3 px-5 text-lg rounded-full capitalize" data-aos="fade-center" data-aos-delay="700">
                  <span>businesstravel</span>
                </li>

                <li className="bg-primary text-white py-3 px-5 text-lg rounded-full capitalize" data-aos="fade-center" data-aos-delay="700">
                  <span>carrental</span>
                </li>

                <li className="bg-primary text-white py-3 px-5 text-lg rounded-full capitalize" data-aos="fade-center" data-aos-delay="700">
                  <span>travel</span>
                </li>

                <li className="bg-primary text-white py-3 px-5 text-lg rounded-full capitalize" data-aos="fade-center" data-aos-delay="700">
                  <span>travelplanning</span>
                </li>
              </ul>
            </div>

            <div className="centered-row flex-wrap gap-3">
              <Link to="https://www.facebook.com/" className="bg-primary w-10 h-10 centered-row justify-center rounded-full cursor-pointer" data-aos="fade-center" data-aos-delay="700">
                <img src={facebook} alt="facebook" className="w-5" />
              </Link>

              <Link to="https://www.instagram.com/" className="bg-primary w-10 h-10 centered-row justify-center rounded-full cursor-pointer" data-aos="fade-center" data-aos-delay="700">
                <img src={instagram} alt="instagram" className="w-5" />
              </Link>

              <Link to="https://www.linkedin.com/" className="bg-primary w-10 h-10 centered-row justify-center rounded-full cursor-pointer" data-aos="fade-center" data-aos-delay="700">
                <img src={linkedIn} alt="linkedin" className="w-5" />
              </Link>
            </div>

          </div>
          <CommentForm />
        </div>
      </div>
    </>
  )
}

export default BlogDetails