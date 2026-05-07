import Button from "../components/Button"

const carType = [
  "Convertible Car",
  "Coupe Car",
  "Electric Car",
  "Luxury Car",
  "Sedan Car",
  "Sport Car"
];

const CarFilter = ({
  search,
  setSearch,
  selectedTypes,
  handleCheckbox,
  onSearch
}) => {

  return (
    <>
      <div className="w-full lg:w-[30%] bg-gray-light/40 rounded-lg p-8 space-y-8">
        <div className="border-b pb-5">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full ps-5 border rounded-full py-5 outline-none"
            data-aos="fade-center" data-aos-delay="300"
          />
        </div>

        <div className="border-b pb-5">
          <h4 className="text-2xl pb-5 font-semibold" data-aos="fade-right" data-aos-delay="400">
            Car Types
          </h4>

          <ul className="space-y-2">
            {carType.map((type, index) => (
              <li key={type} data-aos="fade-right" data-aos-delay={index * 100}>
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(type)} // Indica si esta seleccionado
                  onChange={() => handleCheckbox(type)}  // Agrega o quita una categoría de la lista de seleccionados.
                  className="me-2"
                />
                {type}
              </li>
            ))}
          </ul>
        </div>

        <Button
          text="Search"
          className="btn-black w-full mt-0"
          data-aos="fade-right"
          data-aos-delay="500"
          onClick={onSearch}
        />
      </div>
    </>
  )
}

export default CarFilter