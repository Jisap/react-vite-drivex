
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../../../shared/ui/PageBanner'
import { teams } from '../../../shared/data/team'
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import youtube from "../../../assets/images/youtube.png"
import linkedin from "../../../assets/images/linkedin.png"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"
import { Check, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    text: "Davis is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.",
    name: "Casey Davis",
    role: "Customer",
  },
  {
    id: 2,
    text: "Amazing service and smooth ride. Highly recommended!",
    name: "Michael Lee",
    role: "Customer",
  },
  {
    id: 3,
    text: "Very punctual and professional chauffeur experience.",
    name: "Sarah Khan",
    role: "Customer",
  },
];


const TeamDetails = () => {

  const { id } = useParams();

  const team = teams.find((team) => team.id === Number(id));

  if (!team) {
    return <p>Team not found</p>;
  }

  return (
    <>
      <PageBanner
        title="Team Details"
        currentPage="Team Details"
      />

      <div className='container mx-auto px-4 py-[8%] section-container gap-10 lg:gap-14 items-start!'>
        <div className='w-full lg:w-[35%] bg-white shadow-lg rounded-4xl'>
          <div className='team-image group overflow-hidden' data-aos="fade-center" data-aos-delay="200">
            <img src={team.image} alt="team-image" className='group-hover:scale-110 transition-all duration-300' />
          </div>

          <div className='team-info p-8 space-y-8'>
            <div className='border-b border-gray-200 pb-5'>
              <h4 className='text-4xl font-semibold uppercase! tracking-wide pb-2' data-aos="fade-right" data-aos-delay="300">
                {team.name}
              </h4>

              <span className='text-lg text-pera' data-aos="fade-right" data-aos-delay="400">
                {team.position}
              </span>
            </div>

            <ul className='space-y-5 border-b border-gray-200 pb-5'>
              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Phone:  </strong>
                <strong data-aos="fade-right" data-aos-delay="500">{team.phone}</strong>
              </li>

              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Email:  </strong>
                <strong data-aos="fade-right" data-aos-delay="600">{team.email}</strong>
              </li>

              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Position:  </strong>
                <strong data-aos="fade-right" data-aos-delay="700">{team.position}</strong>
              </li>
            </ul>

            <ul className='centered-row gap-5'>
              <li data-aos="fade-up" data-aos-delay="500">
                <Link to="https://facebook.com" className="group">
                  <img src={facebook} alt="facebook" className='bg-black p-2 rounded-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 cursor-pointer' />
                </Link>
              </li>

              <li data-aos="fade-up" data-aos-delay="600">
                <Link to="https://instagram.com" className="group">
                  <img src={instagram} alt="instagram" className='bg-black p-2 rounded-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 cursor-pointer' />
                </Link>
              </li>

              <li data-aos="fade-up" data-aos-delay="700">
                <Link to="https://youtube.com" className="group">
                  <img src={youtube} alt="youtube" className='bg-black p-2 rounded-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 cursor-pointer' />
                </Link>
              </li>

              <li data-aos="fade-up" data-aos-delay="800">
                <Link to="https://linkedin.com" className="group">
                  <img src={linkedin} alt="linkedin" className='bg-black p-2 rounded-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 cursor-pointer' />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='w-full lg:w-[65%]'>
          <div className='team-content space-y-8'>
            <span className='sub-title' data-aos="fade-right" data-aos-delay="500">
              Introduction
            </span>

            <h2 className='heading-1 max-w-120 mb-5' data-aos="fade-right" data-aos-delay="600">
              {team.name} biography
            </h2>

            <p className='text-desc' data-aos="fade-right" data-aos-delay="700">
              We pride ourselves on having a team of highly skilled and professional drivers dedicated to providing you with the best possible service. Here are some of the top drivers who make your journeys safe, comfortable, and enjoyable:
            </p>

            <p className='text-desc' data-aos="fade-right" data-aos-delay="800">
              {team.name} brings over 15 years of professional driving experience to our team. His extensive knowledge of the city, coupled with his impeccable driving skills, ensures that you reach your destination safely and on time. John is known for his punctuality and professionalism, making him a favorite among our corporate clients.
            </p>

            <ul className='space-y-5 border-b border-gray-200 pb-8'>
              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Experience: </strong>
                <span data-aos="fade-right" data-aos-delay="700">{team.experience}</span>
              </li>

              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Specialty: </strong>
                <span data-aos="fade-right" data-aos-delay="700">{team.Specialty}</span>
              </li>

              <li className='text-xl'>
                <strong data-aos="fade-center" data-aos-delay="200">Languages: </strong>
                <span data-aos="fade-right" data-aos-delay="700">{team.languages}</span>
              </li>
            </ul>

            <span className='sub-title' data-aos="fade-right" data-aos-delay="500">
              Features
            </span>

            <h2 className='heading-1 max-w-120 mb-5' data-aos="fade-right" data-aos-delay="600">
              Know about {team.name}
            </h2>

            <p className='text-desc' data-aos="fade-right" data-aos-delay="700">
              With a passion for driving and a commitment to exceptional service, {team.name} has quickly become one of our most trusted drivers.
            </p>

            <ul className='grid-col lg:grid-cols-2 gap-5 border-b border-gray-200 pb-8'>
              <li className='centered-row flex-wrap gap-2' data-aos="fade-center" data-aos-delay="500">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span>Qualidied and Experienced</span>
              </li>

              <li className='centered-row flex-wrap gap-2' data-aos="fade-center" data-aos-delay="600">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span>Safety First</span>
              </li>

              <li className='centered-row flex-wrap gap-2' data-aos="fade-center" data-aos-delay="700">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span>Highly Trained</span>
              </li>

              <li className='centered-row flex-wrap gap-2' data-aos="fade-center" data-aos-delay="800">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span>Personalized Experience</span>
              </li>

              <li className='centered-row flex-wrap gap-2' data-aos="fade-center" data-aos-delay="900">
                <Check size={22} className="bg-black text-white p-1 rounded-full" />
                <span>Local Knowledge</span>
              </li>
            </ul>

            <span className='sub-title' data-aos="fade-right" data-aos-delay="500">
              Testimonials
            </span>

            <h2 className='heading-1 max-w-120 mb-5' data-aos="fade-right" data-aos-delay="600">
              Customers Feedback
            </h2>

            <Splide
              options={{
                type: "loop",
                perPage: 1,
                gap: "1.5rem",
                pagination: true,
                breakpoints: {
                  768: { perPage: 1 },
                },
              }}
            >
              {testimonials.map((item, index) => (
                <SplideSlide key={item.id}>
                  <div
                    className='tst-item border border-gray-200 p-5 sm:p-8 rounded-lg w-fit hover:shadow-xl transition-all duration-300'
                    data-aos="fade-center"
                    data-aos-delay={index * 120}
                  >
                    <Quote size={50} className='mb-5' />

                    <p className='max-w-xl text-desc pb-5'>
                      {item.text}
                    </p>

                    <div className='flex flex-col justify-start'>
                      <strong className='text-xl md:text-2xl'>{item.name}</strong>
                      <span className='text-lg'>{item.role}</span>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamDetails