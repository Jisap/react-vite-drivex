
import PageBanner from '../../../shared/ui/PageBanner'
import pricing1 from "../../../assets/images/pricing/pricing-box-img-1.png"
import pricing2 from "../../../assets/images/pricing/pricing-box-img-2.png"
import pricing3 from "../../../assets/images/pricing/pricing-box-img-3.png"
import PricingCard from '../../../shared/ui/PricingCard'
import Banner from '../components/Banner/Banner'
import Testimonials from '../../../shared/components/Testimonials/Testimonials'



const Pricing = () => {
  return (
    <>
      <PageBanner
        title="Pricing"
        currentPage="Pricing"
      />

      <div className='section py-[8%] relative grid-col lg:grid-cols-3 gap-10'>
        <div data-aos="fade-up" data-aos-delay="100">
          <PricingCard
            image={pricing1}
            title="Luxury Car"
            pera="Specifies the type of modal of the car avaliable for rent."
            price="29"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <PricingCard
            image={pricing2}
            title="Convertible Car"
            pera="Specifies the type of modal of the car avaliable for rent."
            price="49"
          />
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <PricingCard
            image={pricing3}
            title="Spot Car"
            pera="Specifies the type of modal of the car avaliable for rent."
            price="79"
          />
        </div>
      </div>

      <Banner />
      <Testimonials />
    </>
  )
}

export default Pricing