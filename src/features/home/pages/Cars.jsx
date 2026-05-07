import PageBanner from "../../../shared/ui/PageBanner";
import { cars } from "../../../shared/data/cars";
import CarList from "../../../shared/ui/CarList";
import useCarFilter from "../../../shared/hooks/useCarFilter";
import CarFilter from "../../../shared/ui/CarFilter";
import Pagination from "../../../shared/ui/Pagination";



const Cars = () => {

  const {
    search,
    setSearch,
    selectedTypes,
    handleSearch,
    handleCheckBox,
    currentCars,
    totalPages,
    currentPage,
    setCurrentPage } = useCarFilter(cars)

  return (
    <>
      <PageBanner
        title="Our Cars"
        currentPage="Cars"
      />

      <div className="section section-container items-start! py-[8%] flex flex-col lg:flex-row gap-10">

        <CarFilter
          search={search}
          setSearch={setSearch}
          selectedTypes={selectedTypes}
          handleCheckbox={handleCheckBox}
          onSearch={handleSearch}
        />

        <div className="w-full lg:w-[70%]">
          <CarList
            cars={currentCars}
          />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  )
}

export default Cars