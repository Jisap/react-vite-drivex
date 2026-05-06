import { MoveRight } from "lucide-react"
import doorIcon from "../../assets/images/cars/icon-door.svg"
import passengerIcon from "../../assets/images/cars/icon-passengers.svg"
import { Link } from "react-router-dom"



const CarCard = ({ car }) => {
  return (
    <>
      <div className="car-item bg-gray-light/40 p-5 space-y-5 group rounded-lg">
        {/* Images */}
        <div className="car-image bg-gray-light/60 p-4 rounded-lg overflow-hidden flex justify-center items-center h-48 lg:h-56">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="car-content space-y-8">
          {/* Title */}
          <Link to={`/cars/${car.id}`} className="info flex flex-col gap-3">
            <span className="ctg bg-primary text-black text-xs font-bold px-3 py-1 rounded-full w-fit uppercase">
              {car.category}
            </span>

            <h4 className="text-2xl lg:text-3xl font-bold tracking-wide uppercase group-hover:text-primary transition-colors duration-300">
              {car.name}
            </h4>
          </Link>

          <ul className="space-y-4 border-b border-gray-200 pb-6">
            <li className="centered-row justify-between">
              <div className="centered-row gap-2 text-[15px] text-gray-600">
                <img
                  src={doorIcon}
                  alt="doors"
                  className="w-5 h-5 opacity-70"
                />

                <span>Doors</span>
              </div>

              <span className="font-semibold">{car.doors}</span>
            </li>

            <li className="centered-row justify-between">
              <div className="centered-row gap-2 text-[15px] text-gray-600">
                <img
                  src={passengerIcon}
                  alt="passenger"
                  className="w-5 h-5 opacity-70"
                />

                <span>Passenger</span>
              </div>

              <span className="font-semibold">{car.passengers}</span>
            </li>
          </ul>

          {/* Bottom */}
          <div className="car-bottom centered-row justify-between pt-2">
            {/* Price */}
            <div className="price flex items-baseline gap-1">
              <span className="text-lg font-bold text-primary">$</span>
              <span className="text-4xl font-bold font-barlow tracking-tight">{car.price}</span>
              <span className="text-sm text-gray-400 font-medium ml-1">/ {car.rent}</span>
            </div>

            {/* Arrow */}
            <Link to={`/cars/${car.id}`} className="arrow bg-heading text-white w-12 h-12 flex justify-center items-center rounded-full -rotate-45 group-hover:rotate-0 transition-all duration-300 cursor-pointer shadow-lg group-hover:bg-primary group-hover:text-black">
              <MoveRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard