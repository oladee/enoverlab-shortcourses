import { useContext } from "react"
import CourseDetailContext from "../../context/CourseDetailContext"
const DetailHero = () => {
  const {detailData} = useContext(CourseDetailContext)
  return (
    <div className="font-inter ">
      <section className=" lg:px-[102px] mt-10 lg:pt-24 lg:text-white lg:bg-blue-300 relative">
        <h2 className="text-[28px] md:text-[32px] font-bold lg:w-[50vw] lg:max-w-[720px] px-5 md:px-14 lg:px-0">
          {detailData.topic}
        </h2>
        <div className="lg:absolute lg:w-[31.9vw] lg:max-w-[460px] px-5 md:px-14  right-[102px] py-6 lg:px-6 bg-white">
          <img src={detailData.courseImg} alt="" className="w-full"/>
          <p className="hidden lg:flex text-black-100 text-[42px] font-bold mt-6">₦{detailData.price.toLocaleString()}</p>
          <button className="hidden lg:flex justify-center bg-blue-100 text-white border font-bold border-blue-100 hover:text-blue-100 hover:bg-white py-4 mt-2 text-sm lg:text-[26px] w-full rounded-md text-center">
            Enroll Now
          </button>
        </div>
        <div className="lg:w-[50vw] lg:max-w-[720px] bg-blue-300 text-white px-5 md:px-14 lg:px-0 py-6 space-y-8 md:space-y-9">
          <header className="text-[26px] italic font-medium md:font-bold">
            About Course
          </header>
          <p className="text-base lg:text-lg font-normal md:font-medium leading-7 lg:leading-10">
            {detailData.details}
          </p>
          <p className="text-xl font-bold">
            Tutor : {detailData.instructorName}
          </p>
        </div>
      </section>
      <section className="bg-[#D6E1FF] lg:px-[102px] lg:pt-20 lg:pb-24 px-8 py-6 md:px-14">
        <header className="text-lg font-bold mb-3">
          What you’ll learn:
        </header>
        <div className="text-base lg:text-lg list-disc space-y-2">
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
          <li>Lorem ipsum dolor sit amet, consectetur</li>
        </div>
      </section>
      <div className="lg:hidden">
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default DetailHero
