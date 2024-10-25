import search from '../../assets/landing/search.svg'

const Hero = () => {
  return (
    <div className="flex items-center justify-center font-inter mt-14 lg:mt-28 relative bg-[url('./assets/landing/greencircle.svg'),_url('./assets/landing/bluecircle.svg')] bg-[position:center_right,center_left] bg-[size:43px,_40px] lg:bg-[size:120px,_100px]  bg-no-repeat">
    <div className='bg-blue-100 w-[75.11vw] lg:w-[70vw] rounded-2xl py-16 px-4 lg:px-[99px]'>
      <h1 className='font-bold text-white text-[8.06vw] lg:text-[3.8vw] text-center lg:leading-[64px]'>
        Master <span className='text-green-100'>Product Management</span> At Any Stage With Our Expert-Led Short Courses.
      </h1>
      <form action="" method="get" className='w-full flex justify-center mt-6 lg:mt-10'>
        <div className='p-3 rounded-3xl flex justify-between items-center bg-white'>
          <input type="text" name="" id="" placeholder='All courses' className='outline-none w-[70%] lg:w-[300px]' />
          <img src={search} alt="" />
        </div>
      </form>
    </div>
    <div className='bg-green-100 text-white font-bold text-xs md:text-lg lg:text-3xl absolute p-2 rounded-md lg:right-14 lg:top-10 top-6 right-5'>
    RESEARCH
    </div>
    <div className='bg-blue-200 text-white font-bold text-xs md:text-lg lg:text-3xl absolute p-2 rounded-md lg:right-16 lg:bottom-10 bottom-6 right-5'>
    PRODUCT
    </div>
    <div className='bg-blue-200 text-white font-bold text-xs md:text-lg lg:text-3xl absolute p-2 rounded-md top-6 left-5 lg:top-36 lg:left-16 '>
    USER
    </div>
    </div>
  )
}

export default Hero
