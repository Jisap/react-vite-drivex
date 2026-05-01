import { MoveRight } from "lucide-react"
import { Link } from "react-router-dom"


const ServiceCard = ({
  icon,
  image,
  title,
  id
}) => {
  return (
    <>
      <div className="service-card relative bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 p-8 rounded-3xl space-y-8 group">
        <div className="srv-icon w-16 h-16 relative">
          <img
            src={icon}
            alt="service-icon"
            className="section-image relative z-1"
          />

          <div className="absolute w-12 h-12 bg-gray-100 top-0 -right-2 z-0 rounded-full"></div>
        </div>

        <Link to={`/service/${id}`} className="gap-3 flex flex-col">
          <div className="srv-content">
            <h6 className="text-xl font-semibold pb-3">
              {title}
            </h6>

            <p className="text-desc">
              Enhance your rental experience with additional options.
            </p>
          </div>
        </Link>

        <Link to={`/service/${id}`}>
          <MoveRight className="group-hover:rotate-45 transition-all duration-300" />
        </Link>
      </div>
    </>
  )
}

export default ServiceCard