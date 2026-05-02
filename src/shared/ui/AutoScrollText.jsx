import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css"



const AutoScrollText = ({ items = [], className = "" }) => {
  return (
    <div className="bg-black py-4 overflow-hidden w-full">
      <Splide
        options={{
          type: "loop",
          drag: false,
          arrows: false,
          pagination: false,
          gap: "1.5rem",
          autoWidth: true,           // ← clave
          autoScroll: {
            speed: 1.2,
            pauseOnHover: false,
            pauseOnFocus: false,
          }
        }}
        extensions={{ AutoScroll }}
        className="w-full flex justify-center items-center"
      >
        {[...items, ...items, ...items].map((text, index) => (
          <SplideSlide key={index}>
            <h2 className={`flex items-center gap-4 text-white uppercase font-bold font-barlow whitespace-nowrap text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
              ${className}  
            `}
            >
              {text}
              <span className="text-gray-500 text-base sm:text-lg md:text-xl"> • </span>
            </h2>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  )
}

export default AutoScrollText