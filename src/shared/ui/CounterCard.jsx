import { useEffect, useState, useRef } from "react"

const CounterCard = ({ end, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(      // Detecta cuando el elemento es visible en el DOM
      ([entry]) => {                                // entry es un objeto que contiene información sobre el elemento que se quiere monitorear
        if (entry.isIntersecting) {                 // es true si el elemento es visible en el DOM
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {                     // Si el elemento
      observer.observe(containerRef.current);       // es visible en el DOM se establece en true isVisible
    }

    return () => {
      if (containerRef.current) {                    // Si el elemento
        observer.unobserve(containerRef.current);    // no es visible deja de monitorear el elemento
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const target = Number(end) || 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, isVisible])

  return (
    <div ref={containerRef} className="count-item relative text-center w-full">
      <span className="font-barlow text-[12rem] font-semibold tracking-wide text-gray-light">
        {count}
      </span>

      <span className="absolute top-2 left-0 h-full w-full flex justify-center items-center uppercase font-semibold font-barlow text-2xl">
        {label}
      </span>
    </div>
  )
}

export default CounterCard
