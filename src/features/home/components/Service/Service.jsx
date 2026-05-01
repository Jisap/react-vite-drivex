import Button from "../../../../shared/components/Button"
import ServiceCard from "../../../../shared/ui/ServiceCard"
import { services } from "../../data/services"




const Service = () => {
  return (
    <>
      <section className='section py-[8%] relative space-y-10'>
        <div className='text-black w-full relative gap-8'>
          <div className='main-title gap-3 text-center content-col'>
            <span className='subt-title' data-aos='fade-down' data-aos-delay='100'>
              Our Services
            </span>

            <h2 className='heading-1 max-w-120 mx-auto' data-aos='fade-down' data-aos-delay='200'>
              Explore our wide range of rental services
            </h2>
          </div>
        </div>

        <div className='grid-col lg:grid-cols-4 gap-10'>
          {services.slice(0, 4).map((service, i) => (
            <div key={service.id} data-aos="fade-up" data-aos-delay={300 + i * 100}>
              <ServiceCard
                id={service.id}
                {...service}
              />
            </div>
          ))}
        </div>

        <div className="info text-center max-w-xl mx-auto mt-10" data-aos="fade-up" data-aos-delay="800">
          <p className="text-desc">
            Discover our range of car rental services designed to meet all your travel needs. From a diverse fleet of vehicles to flexible rental plans.
          </p>

          <Button
            data-aos="fade-up"
            data-aos-delay="900"
            to="/service"
            text={"View All Services"}
            className="btn-black w-60!"
          />
        </div>
      </section>
    </>
  )
}

export default Service