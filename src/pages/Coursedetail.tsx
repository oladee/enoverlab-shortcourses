import DetailHero from "../components/CourseDetail/DetailHero"
import { CourseDetailProvider } from "../context/CourseDetailContext"


const Coursedetail = () => {
  return (
    <div>
      <CourseDetailProvider>
        <DetailHero/>
      </CourseDetailProvider>
      
    </div>
  )
}

export default Coursedetail
