import { useEffect, useState } from "react"



const CounterCard = ({ end, label }) => {

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => { // cada 16ms aumenta el valor de start
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end])

  return (
    <div className="count-item relative text-center w-full">
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