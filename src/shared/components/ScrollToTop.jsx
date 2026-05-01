import { ArrowUp } from "lucide-react"
import useScrollTop from "../../shared/hooks/useScrollTop"
import car from "../../assets/images/scroll-top-card.webp"



const ScrollToTop = () => {

  const { visible, scrollToTop } = useScrollTop();

  return (
    <button
      onClick={scrollToTop}
      className={`
        scroll-top-car-btn fixed bottom-6 right-6 z-50 w-20 rounded-full transition-all duration-300 cursor-pointer
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}
    `}>
      <span>
        <img
          src={car}
          alt="car-image"
        />
      </span>
    </button>
  )
}

export default ScrollToTop