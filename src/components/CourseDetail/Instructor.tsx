import instructorImg from '../../assets/coursedetails/instructorsImg.svg'
import ratingStar from '../../assets/coursedetails/icon-rating.svg'
import reviewIcon from '../../assets/coursedetails/icon-review.svg'
import studentIcon from '../../assets/coursedetails/icon-student.svg'

const Instructor = () => {
  return (
    <div className="bg-[#EEFCFC] py-14 lg:py-16 px-5 lg:px-[6.94vw]">
      <section className="py-5 px-1 lg:px-12">
        <h2 className="text-black-100 font-bold text-2xl font-roboto mb-6">
            Instructor
        </h2>
        <h4 className="font-roboto text-[#002DA4] font-bold text-lg mb-2">
            John Doe
        </h4>
        <p className="font-inter text-[#6A6F73] text-base mb-2">
            Head of AI Product Management Training
        </p>
        <div className='flex items-start gap-4 lg:gap-7 lg:mb-10'>
            <div>
                <img src={instructorImg} alt="" />
            </div>
            <section className='font-roboto lg:text-sm text-black-100 pt-4 space-y-4 '>
                <div className='flex items-center gap-2 lg:gap-4 font-normal'>
                    <img src={ratingStar} alt="" />
                    4.6 Instructor Rating
                </div>
                <div className='flex items-center gap-2 lg:gap-4 font-normal'>
                    <img src={reviewIcon} alt="" />
                    1,209 Reviews
                </div>
                <div className='flex items-center gap-2 lg:gap-4 font-normal'>
                    <img src={studentIcon} alt="" />
                    1,000 Students
                </div>
            </section>
        </div>
        <p className='text-base font-inter text-black-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque exercitationem perferendis maiores, ratione iste amet sed illum ipsum aut aliquid. Laborum necessitatibus, facilis nesciunt corporis hic dolor perferendis quas?
        </p>
      </section>
    </div>
  )
}

export default Instructor
