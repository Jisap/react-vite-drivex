import { MoveRight } from "lucide-react"
import serviceImg1 from "../../../../assets/images/home/servicecategories/luxury-collection-img-1.jpg";
import serviceImg2 from "../../../../assets/images/home/servicecategories/luxury-collection-img-2.jpg";
import serviceImg3 from "../../../../assets/images/home/servicecategories/luxury-collection-img-3.jpg";
import serviceImg4 from "../../../../assets/images/home/servicecategories/luxury-collection-img-4.jpg";
import ServiceCategoriesCard from "../../../../shared/ui/ServiceCategoriesCard";




const ServiceCategories = () => {

  const categories = [
    { image: serviceImg1, title: "Sport Car" },
    { image: serviceImg2, title: "Convertible Car" },
    { image: serviceImg3, title: "Sedan Car" },
    { image: serviceImg4, title: "Luxury Car" },
  ];

  return (
    <>
      <div className="grid-col md:grid-cols-2 xl:grid-cols-4 px-4 gap-4">
        {categories.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <ServiceCategoriesCard image={item.image} title={item.title} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ServiceCategories