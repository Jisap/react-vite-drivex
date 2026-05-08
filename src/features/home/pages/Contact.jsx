import { Mail, MapPin, Phone } from 'lucide-react'
import PageBanner from '../../../shared/ui/PageBanner'
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import twiiter from "../../../assets/images/linkedin.png"
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
        </div>
      </div>
    </>
  )
}

export default Contact