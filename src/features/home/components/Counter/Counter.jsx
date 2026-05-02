import CounterCard from "../../../../shared/ui/CounterCard"
import { counters } from "../../data/counter"





const Counter = () => {
  return (
    <>
      <section className="section py-[4%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
          {counters.map((item, i) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <CounterCard
                end={item.value}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Counter