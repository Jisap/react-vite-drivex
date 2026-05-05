import partners1 from "./assest/icon-partners-1.svg";
import partners2 from "./assest/icon-partners-2.svg";
import partners3 from "./assest/icon-partners-3.svg";
import partners4 from "./assest/icon-partners-4.svg";



const Partners = () => {

  const partner = [
    partners1,
    partners2,
    partners3,
    partners4,
    partners3,
    partners2,
    partners1,
  ]

  return (
    <>
      <div className="section pt-[8%] pb-[4%] relative space-y-8">
        <div className="content-col text-black w-full lg:w-1/2 relative gap-8 mx-auto">
          <div className="main-title flex flex-col text-center mx-auto gap-3">
            <span className="sub-title" data-aos="fade-down" data-aos-delay="100">
              Executive partners
            </span>

            <h2 className="heading-1 max-w-120" data-aos="fade-down" data-aos-delay="200">
              Trusted by leading brands
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partners