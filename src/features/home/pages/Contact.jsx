import { Mail, MapPin, Phone } from 'lucide-react'
import PageBanner from '../../../shared/ui/PageBanner'
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import twitter from "../../../assets/images/linkedin.png"
import youtube from "../../../assets/images/youtube.png"
import { Link } from 'react-router-dom'
import Button from '../../../shared/components/Button'


const Contact = () => {
  return (
    <>
      <PageBanner
        title="Contact"
        currentPage="Contact"
      />

      <div className='section section-container items-start! my-[8%] px-5 py-10 md:p-10 lg:h-160 md:reounded-4xl relative gap-10 lg:gap-14 bg-[#191818]'>
        <div className='w-full lg:w-1/2 bg-[#100001] rounded-2xl p-12 flex-1 relative overflow-hidden h-full flex flex-col justify-center items-start!'>
          <h2
            className='text-white uppercase! text-4xl font-bold mb-4 tracking-wide'
            data-aos="fade-right"
            data-aos-delay="400"
          >
            Contact Information
          </h2>

          <p className='text-gray-400 mb-10' data-aos="fade-right" data-aos-delay="500">
            Say something to start a live chat!
          </p>

          <div className='space-y-6 text-white'>
            <div className='flex items-center gap-4'>
              <Phone size={22} className='text-primary' />
              <span>(+91) 98765 43210</span>
            </div>
            <div className='flex items-center gap-4'>
              <Mail size={22} className='text-primary' />
              <span>info@support.com</span>
            </div>
            <div className='flex items-center gap-4'>
              <MapPin size={22} className='text-primary' />
              <span>123 Main St, New York, NY 10001</span>
            </div>
          </div>

          <ul className='centered-row gap-5 mt-18'>
            <li className='fade-down' data-aos="fade-right" data-aos-delay='800'>
              <Link
                to="https://www.facebook.com/"
                className="group bg-white/20 w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <img src={facebook} alt="facebook-icon" className='w-6 h-6' />
              </Link>
            </li>

            <li className='fade-down' data-aos="fade-right" data-aos-delay='900'>
              <Link
                to="https://www.instagram.com/"
                className="group bg-white/20 w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <img src={instagram} alt="instagram-icon" className='w-6 h-6' />
              </Link>
            </li>
            <li className='fade-down' data-aos="fade-right" data-aos-delay='1000'>
              <Link
                to="https://www.linkedin.com/"
                className="group bg-white/20 w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <img src={twitter} alt="twitter-icon" className='w-6 h-6' />
              </Link>
            </li>

            <li className='fade-down' data-aos="fade-right" data-aos-delay='1100'>
              <Link
                to="https://www.youtube.com/"
                className="group bg-white/20 w-10 h-10 flex items-center justify-center rounded-md hover:rotate-12 hover:scale-110 transition-all duration-300"
              >
                <img src={youtube} alt="youtube-icon" className='w-6 h-6' />
              </Link>
            </li>
          </ul>
        </div>

        <form className='w-full lg:w-1/2 text-white h-full flex flex-col justify-center items-start'>
          <div className='grid md:grid-cols-2 gap-6 w-full'>
            <div>
              <label className='text-sm text-gray-400' data-aos="fade-center" data-aos-delay="400">
                First Name
              </label>
              <input
                type="text"
                placeholder='Enter your first name'
                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                required
                data-aos="fade-center"
                data-aos-delay="500"
              />
            </div>

            <div>
              <label className='text-sm text-gray-400' data-aos="fade-center" data-aos-delay="400">
                Last Name
              </label>
              <input
                type="text"
                placeholder='Enter your last name'
                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                required
                data-aos="fade-center"
                data-aos-delay="500"
              />
            </div>

            <div>
              <label className='text-sm text-gray-400' data-aos="fade-center" data-aos-delay="400">
                Email
              </label>
              <input
                type="email"
                placeholder='Enter your email'
                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                required
                data-aos="fade-center"
                data-aos-delay="500"
              />
            </div>

            <div>
              <label className='text-sm text-gray-400' data-aos="fade-center" data-aos-delay="400">
                Phone Number
              </label>
              <input
                type="text"
                placeholder='Enter your phone number'
                className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
                required
                data-aos="fade-center"
                data-aos-delay="500"
              />
            </div>
          </div>

          <div className='mt-6 w-full' data-aos="fade-center" data-aos-delay="600">
            <label className='text-sm text-gray-400'>
              Message
            </label>
            <textarea
              placeholder='Enter your message'
              className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-white"
              required
            />
          </div>

          <Button
            type="submit"
            text="Send Message"
            className="btn-yellow mt-8"
            data-aos="fade-center"
            data-aos-delay="700"
          />
        </form>
      </div>

      <div className='bg-gray-light'>
        <div className='iframe section py-[8%] relative space-y-10'>
          <div className='text-black w-full relative gap-8'>
            <div className='main-title gap-3 text-center content-col'>
              <span className='sub-title' data-aos="fade-up" data-aos-delay="400">Location</span>
              <h2 className='heading-1 max-w-140 mx-auto' data-aos="fade-up" data-aos-delay="500">How to reach our location</h2>
            </div>
          </div>

          <div className='iframe h-10 lg:h-150 rounded-4xl w-full overflow-hidden' data-aos="fade-center" data-aos-delay="500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232559.02673210207!2d-3.844343464188269!3d40.438098610297125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e1!3m2!1ses!2ses!4v1778252006332!5m2!1ses!2ses"
              width="100%"
              height="100%"
            >
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact