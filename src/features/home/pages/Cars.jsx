import PageBanner from "../../../shared/ui/PageBanner";
import { cars } from "../../../shared/data/cars";
import CarList from "../../../shared/ui/CarList";
import useCarFilter from "../../../shared/hooks/useCarFilter";

const Cars = () => {

  const { currentCars } = useCarFilter(cars)

  return (
    <>
      <PageBanner
        title="Our Cars"
        currentPage="Cars"
      />

      <div className="section section-container items-start! py-[8%] flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[70%]">
          <CarList
            cars={currentCars}
          />
        </div>
      </div>
    </>
  )
}

export default Cars