import { Link, useParams } from 'react-router-dom'
import PageBanner from '../../../shared/ui/PageBanner'
import { teams } from '../../../shared/data/team'
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import youtube from "../../../assets/images/youtube.png"
import linkedin from "../../../assets/images/linkedin.png"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"
import { Check, Quote, Phone, Mail, Briefcase, Award, Languages, Clock } from 'lucide-react'
import Button from '../../../shared/components/Button'

const testimonials = [
  {
    id: 1,
    text: "Their professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our entire journey across the city.",
    name: "Casey Davis",
    role: "Corporate Client",
  },
  {
    id: 2,
    text: "Amazing service and incredibly smooth ride. The driver knew all the best routes and was very punctual. Highly recommended for airport transfers!",
    name: "Michael Lee",
    role: "Regular Traveler",
  },
  {
    id: 3,
    text: "A truly premium chauffeur experience. Punctual, polite, and the car was in pristine condition. Will definitely book again for my next business trip.",
    name: "Sarah Khan",
    role: "Business Executive",
  },
];

const TeamDetails = () => {
  const { id } = useParams();
  const team = teams.find((team) => team.id === Number(id));

  if (!team) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Member Not Found</h2>
          <Link to="/about" className="text-primary hover:underline inline-flex items-center gap-2">
            Back to About Us
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <PageBanner
        title="Team Details"
        currentPage="Team Details"
        productName={team.name}
      />

      <div className='container mx-auto px-4 py-[8%]'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 items-start'>
          
          {/* Sidebar - Profile Card */}
          <aside className='w-full lg:w-[35%] sticky top-24' data-aos="fade-right">
            <div className='bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100'>
              <div className='team-image group overflow-hidden relative'>
                <img 
                  src={team.image} 
                  alt={team.name} 
                  className='w-full h-auto group-hover:scale-105 transition-transform duration-700 ease-out' 
                />
                <div className='absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white'>
                  <h4 className='text-3xl font-bold uppercase tracking-wider mb-1'>{team.name}</h4>
                  <p className='text-primary font-medium'>{team.position}</p>
                </div>
              </div>

              <div className='p-8 space-y-8'>
                <ul className='space-y-6'>
                  <li className='flex items-center gap-4 group'>
                    <div className='w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300'>
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className='block text-xs text-gray-400 uppercase tracking-widest'>Phone</span>
                      <span className='font-bold text-gray-900'>{team.phone}</span>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 group'>
                    <div className='w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300'>
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className='block text-xs text-gray-400 uppercase tracking-widest'>Email</span>
                      <span className='font-bold text-gray-900'>{team.email}</span>
                    </div>
                  </li>
                  <li className='flex items-center gap-4 group'>
                    <div className='w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300'>
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <span className='block text-xs text-gray-400 uppercase tracking-widest'>Position</span>
                      <span className='font-bold text-gray-900'>{team.position}</span>
                    </div>
                  </li>
                </ul>

                <div className='pt-8 border-t border-gray-100'>
                  <span className='block text-xs text-gray-400 uppercase tracking-widest mb-4'>Follow Socially</span>
                  <div className='flex gap-4'>
                    {[
                      { img: facebook, link: "https://facebook.com", name: "facebook" },
                      { img: instagram, link: "https://instagram.com", name: "instagram" },
                      { img: youtube, link: "https://youtube.com", name: "youtube" },
                      { img: linkedin, link: "https://linkedin.com", name: "linkedin" }
                    ].map((social, idx) => (
                      <Link 
                        key={social.name} 
                        to={social.link} 
                        className='w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-primary group transition-all duration-300'
                        data-aos="zoom-in"
                        data-aos-delay={idx * 100}
                      >
                        <img src={social.img} alt={social.name} className='w-5 h-5 object-contain group-hover:scale-110' />
                      </Link>
                    ))}
                  </div>
                </div>

                <Button 
                  text="Book This Driver" 
                  className="w-full btn-black mt-4" 
                />
              </div>
            </div>
          </aside>

          {/* Main Content (Right) */}
          <div className='w-full lg:w-[65%] space-y-16'>
            
            {/* Bio Section */}
            <section className='space-y-6'>
              <div className='space-y-2' data-aos="fade-up">
                <span className='sub-title text-primary uppercase tracking-[0.2em] text-sm font-bold'>Professional Profile</span>
                <h2 className='heading-1 leading-tight'>{team.name}'s Biography</h2>
              </div>
              
              <div className='prose prose-lg text-gray-600 space-y-6 max-w-none' data-aos="fade-up" data-aos-delay="100">
                <p>
                  With a deep-seated passion for excellence and a commitment to safety, {team.name} has been a cornerstone of our premium transportation team. Their approach combines technical driving mastery with the soft skills required to provide a truly VIP experience for every passenger.
                </p>
                <p>
                  Over the years, {team.name} has specialized in {team.Specialty.toLowerCase()}, earning praise for their punctuality, discretion, and local knowledge. Whether it's a high-stakes corporate transfer or a leisurely city tour, they ensure that every detail of the journey is executed to perfection.
                </p>
              </div>

              {/* Stats Grid */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-8'>
                <div className='bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4' data-aos="fade-up" data-aos-delay="200">
                  <div className='w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary'>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className='text-2xl font-bold leading-none'>{team.experience}+</h5>
                    <p className='text-sm text-gray-500'>Years Exp.</p>
                  </div>
                </div>
                <div className='bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4' data-aos="fade-up" data-aos-delay="300">
                  <div className='w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary'>
                    <Languages size={24} />
                  </div>
                  <div>
                    <h5 className='text-xl font-bold leading-none uppercase'>{team.languages}</h5>
                    <p className='text-sm text-gray-500'>Languages</p>
                  </div>
                </div>
                <div className='bg-gray-50 p-6 rounded-2xl border border-gray-100 flex items-center gap-4' data-aos="fade-up" data-aos-delay="400">
                  <div className='w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary'>
                    <Award size={24} />
                  </div>
                  <div>
                    <h5 className='text-xl font-bold leading-none'>Certified</h5>
                    <p className='text-sm text-gray-500'>Road Safety</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className='space-y-8 bg-gray-950 p-8 lg:p-12 rounded-3xl text-white relative overflow-hidden'>
              <div className='relative z-10 space-y-8'>
                <div className='space-y-2' data-aos="fade-right">
                  <span className='sub-title text-primary uppercase tracking-[0.2em] text-sm font-bold'>Why Hire {team.name.split(' ')[0]}?</span>
                  <h2 className='text-3xl lg:text-4xl font-bold'>Excellence in every mile</h2>
                </div>
                
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6'>
                  {[
                    "Qualified and Highly Experienced",
                    "Safety-First Driving Philosophy",
                    "Advanced Route Knowledge",
                    "Personalized Chauffeur Experience",
                    "Punctuality Guaranteed",
                    "Vehicle Maintenance Expert"
                  ].map((feature, i) => (
                    <li key={i} className='flex items-center gap-4' data-aos="fade-up" data-aos-delay={i * 100}>
                      <div className='w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black'>
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className='text-lg text-gray-300'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative background element */}
              <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl'></div>
            </section>

            {/* Testimonials Section */}
            <section className='space-y-8'>
              <div className='space-y-2' data-aos="fade-up">
                <span className='sub-title text-primary uppercase tracking-[0.2em] text-sm font-bold'>Success Stories</span>
                <h2 className='heading-1'>Client Testimonials</h2>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <Splide
                  options={{
                    type: "loop",
                    perPage: 1,
                    gap: "2rem",
                    arrows: false,
                    pagination: true,
                    autoplay: true,
                    interval: 5000,
                  }}
                >
                  {testimonials.map((item) => (
                    <SplideSlide key={item.id}>
                      <div className='bg-white border border-gray-100 p-8 lg:p-12 rounded-3xl shadow-sm relative group hover:shadow-xl transition-shadow duration-500'>
                        <Quote size={60} className='text-gray-100 absolute top-8 right-8 group-hover:text-primary/20 transition-colors duration-500' />
                        <p className='text-xl lg:text-2xl text-gray-700 italic leading-relaxed mb-8 relative z-10'>
                          "{item.text}"
                        </p>
                        <div className='flex items-center gap-4'>
                          <div className='w-12 h-1 w-8 bg-primary rounded-full'></div>
                          <div>
                            <h5 className='text-xl font-bold text-gray-900'>{item.name}</h5>
                            <p className='text-gray-500'>{item.role}</p>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            </section>
          </div>

        </div>
      </div>
    </>
  )
}

export default TeamDetails