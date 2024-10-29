import DetailHero from "../components/CourseDetail/DetailHero"
import Review from "../components/CourseDetail/Review"
import { CourseDetailProvider } from "../context/CourseDetailContext"


const Coursedetail = () => {
  return (
    <div>
      <CourseDetailProvider>
        <DetailHero/>
        <Review/>
      </CourseDetailProvider>
      
    </div>
  )
}

export default Coursedetail
