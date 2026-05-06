import { useMemo, useState } from "react";

const useCarFilter = (cars) => {
  const [search, setSearch] = useState("");                  // Lo que el usuario escribe en el input
  const [selectedTypes, setSelectedTypes] = useState([]);    // Una lista (array) de las categorías que el usuario ha marcado en los checkboxes.
  const [appliedType, setAppliedType] = useState([]);        // Los filtros que realmente se están aplicando a la lista (se actualizan cuando llamas a handleSearch)
  const [currentPage, setCurrentPage] = useState(1);         // Para saber en qué página de resultados estamos.
  const carsPerPage = 6;

  const handleCheckBox = (type) => {                         // Agrega o quita una categoría de la lista de seleccionados.
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const handleSearch = () => {                               // Actualiza los filtros y reinicia a la primera página.
    setAppliedType(selectedTypes);
    setCurrentPage(1);
  }

  const fileteredCars = useMemo(() => {                      // Aplica los filtros al array de coches
    return cars.filter((car) => {
      const matchesSearch = car.name                         // Comprueba si el nombre del coche contiene el texto buscado (sin importar mayúsculas).
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesType =                                    // Comprueba si la categoría del coche está dentro de las seleccionadas (o si no hay ninguna seleccionada, muestra todos).
        appliedType.length === 0 ||
        appliedType.includes(car.category)

      return matchesSearch && matchesType
    })
  }, [cars, search, appliedType]);

  const indexOfLast = currentPage * carsPerPage;                          // Calcula el índice del último coche de la página actual.
  const indexOfFirst = indexOfLast - carsPerPage;                         // Calcula el índice del primer coche de la página actual.

  const currentCars = fileteredCars.slice(indexOfFirst, indexOfLast);     // Obtiene la porción de coches que corresponden a la página actual.
  const totalPages = Math.ceil(fileteredCars.length / carsPerPage);       // Calcula el número total de páginas necesarias.

  return {
    search,
    setSearch,
    selectedTypes,
    handleCheckBox,
    handleSearch,
    currentCars,
    totalPages,
    currentPage,
    setCurrentPage
  }

};

export default useCarFilter;