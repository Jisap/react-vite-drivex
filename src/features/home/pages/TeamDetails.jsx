
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
  return (
    <>
      <PageBanner
        title="Team Details"
        currentPage="Team Details"
      />
    </>
  )
}

export default TeamDetails