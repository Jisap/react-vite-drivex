
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../../../shared/ui/PageBanner'
import { teams } from '../../../shared/data/team'
import facebook from "../../../assets/images/facebook.png"
import instagram from "../../../assets/images/instagram.png"
import youtube from "../../../assets/images/youtube.png"
import linkedin from "../../../assets/images/linkedin.png"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/react-splide/css"

const testimonials = [
  {
    id: 1,
    text: "John is professionalism and attention to detail are outstanding. We felt safe and well-cared-for throughout our journey.",
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
      </div>
    </>
  )
}

export default TeamDetails