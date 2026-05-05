import { teams } from "../../data/team"
import TeamCard from "../../ui/TeamCard"

const Team = () => {
  return (
    <>
      <div className="section pt-[8%] pb-[4%] relative space-y-8">
        <div className="content-col text-black w-full lg:w-1/2 relative gap-8 mx-auto">
          <div className="main-title flex flex-col text-center mx-auto gap-3">
            <span className="sub-title" data-aos="fade-down" data-aos-delay="100">
              Our Experienced Drivers
            </span>

            <h2 className="heading-1 max-w-120" data-aos="fade-down" data-aos-delay="200">
              Ensuring your safety and
              comfort on every journey
            </h2>
          </div>
        </div>

        <div className='grid-col sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          {teams.map((team, index) => (
            <div
              key={team.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <TeamCard
                id={team.id}
                image={team.image}
                name={team.name}
                position={team.position}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team