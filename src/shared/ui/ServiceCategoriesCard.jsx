import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"



const ServiceCategoriesCard = ({ image, title }) => {
  return (
    <Link 
      to={`/cars?type=${encodeURIComponent(title)}`}
      className="ctg-car-item relative rounded-4xl overflow-hidden group block"
    >
      <img
        src={image}
        alt="service-image"
        className="section-image"
      />

      <div className="overly bg-black/30 top-0 w-full h-full absolute"></div>

      <h4 className="text-4xl uppercase! absolute top-10 left-10 font-semibold text-white">
        {title}
      </h4>

      <div className="icon absolute bottom-10 right-10 text-white bg-primary w-12 h-12 centered-row justify-center rounded-full p-2 group-hover:rotate-45 transition-all duration-300">
        <MoveRight />
      </div>
    </Link>
  )
}

export default ServiceCategoriesCard