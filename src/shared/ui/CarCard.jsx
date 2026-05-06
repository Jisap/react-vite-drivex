import { MoveRight } from "lucide-react"
import doorIcon from "../../assets/images/cars/icon-door.svg"
import passengerIcon from "../../assets/images/cars/icon-passenger.svg"
import { Link } from "react-router-dom"



const CarCard = ({ car }) => {
  return (
    <>
      <div className="car-item bg-gray-light/40 p-5 space-y-5 group rounded-lg">
        {/* Images */}
        <div className="car-item bg-gray-light/40 p-5 space-y-5 group rounded-lg">
          <img
            src={car.image}
            alt={car.name}
            className="w-full"
          />
        </div>

        {/* Content */}
        <div className="car-content space-y-8">
          {/* Title */}
          <Link to={`/cars/${car.id}`} className="info flex flex-col gap-3">
            <span className="ctg bg-primary text-black text-sm px-3 py-1 rounded-full w-fit">
              {car.category}
            </span>

            <h4 className="text-3xl font-semibold tracking-wide uppercase">
              {car.name}
            </h4>
          </Link>

          <ul className="space-y-5 border-b border-gray-200 pb-5">
            <li className="centered-row justify-between">
              <div className="centered-row gap-2 text-[16px]">
                <img
                  src={doorIcon}
                  alt="doors"
                  className="w-6 h-6 brightness-0"
                />

                <span>Doors</span>
              </div>

              <span>{car.doors}</span>
            </li>

            <li className="centered-row justify-between">
              <div className="centered-row gap-2 text-[16px]">
                <img
                  src={passengerIcon}
                  alt="passenger"
                  className="w-6 h-6 brightness-0"
                />

                <span>Passenger</span>
              </div>

              <span>{car.passengers}</span>
            </li>
          </ul>

          {/* Bottom */}
          <div className="car-bottom centered-row justify-between">
            {/* Price */}
            <div className="price flex items-end gap-1">
              <span className="text-sm text-gray-500">$</span>
              <span className="text-4xl font-bold font-barlow">{car.price}</span>
              <span className="text-sm text-gray-500">{car.rent}</span>
            </div>

            {/* Arrow */}
            <Link to={`/cars/${car.id}`} className="arrow bg-heading text-white w-10 h-10 flex justify-center items-center rounde-full -rotate-45 group-hover:rotate-0 transition-all duration-300 curosr-pointer">
              <MoveRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarCard