import { Link } from "react-router-dom"
import contactBgImg from "./assets/contact-lg.jpg"
import Button from "../../../../shared/components/Button"


const Contact = () => {
  return (
    <>
      <section
        className='contact bg-no-repeat bg-cover bg-center h-200 py-[8%] mt-8 relative'
        style={{ backgroundImage: `url(${contactBgImg})` }}
      >
        <div className='absolute right-0 top-0 flex justify-center lg:justify-end items-center w-full h-full lg:mx-10 px-4'>
          <div className='contact-form bg-white p-14 w-fit space-y-12'>
            <div className="main-title flex flex-col gap-3 w-full lg:w-1/2">
              <span className="sub-title" data-aos="fade-right" data-aos-delay="100">
                Welcome to DriveX
              </span>

              <h2 className="heading-1 max-w-2xl" data-aos="fade-right" data-aos-delay="200">
                The ultimate driving experience
              </h2>
            </div>

            <form method="post">
              <div className="space-y-14">
                <div className="grid-col lg:grid-cols-2 gap-8">
                  <div className="input-wrapper pb-2 relative" data-aos="fade-center" data-aos-delay="400">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-box w-full outline-none"
                      required
                    />
                  </div>

                  <div className="input-wrapper pb-2 relative" data-aos="fade-center" data-aos-delay="400">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-box w-full outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="input-wrapper pb-2 relativ" data-aos="fade-center" data-aos-delay="600">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input-box w-full outline-none"
                      required
                    />
                  </div>
                  <div className="input-wrapper pb-2 relativ" data-aos="fade-center" data-aos-delay="700">
                    <select
                      className="input-box w-full outline-none text-pera cursor-pointer"
                      required
                    >
                      <option >Select Residence</option>
                      <option value="Selecte Residence 2">Select Residence 2</option>
                      <option value="Selecte Residence 3">Select Residence 3</option>
                      <option value="Selecte Residence 4">Select Residence 4</option>
                    </select>
                  </div>
                </div>

                <p className="text-gray-500" data-aos="fade-center" data-aos-delay="800">
                  <input type="checkbox" required /> I agree that my data is <Link className="underline">Collected and stored</Link>
                </p>
              </div>

              <Button
                type="submit"
                className="btn-black"
                text="Get In Touch"
                data-aos="fade-center"
                data-aos-delay="900"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact