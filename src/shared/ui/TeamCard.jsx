import { Link } from "react-router-dom"


const TeamCard = ({ id, image, name, position }) => {
  return (
    <>
      <div key={id} className="team-item space-y-5">
        <div className="team-image rounded-xl overflow-hidden group w-full">
          <img
            src={image}
            alt={name}
            className='group-hover:scale-110 transition-all duration-700 w-full'
          />
        </div>

        <Link to={`/team/${id}`} className="team-content text-center">
          <h6 className="text-2xl font-medium tracking-wide">{name}</h6>
          <span className="text-gray-500 block">{position}</span>
        </Link>
      </div>
    </>
  )
}

export default TeamCard