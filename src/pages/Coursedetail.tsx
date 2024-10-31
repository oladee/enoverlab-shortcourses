import { useState } from "react"
import DetailHero from "../components/CourseDetail/DetailHero"
import Review from "../components/CourseDetail/Review"
import { CourseDetailProvider } from "../context/CourseDetailContext"
import Instructor from "../components/CourseDetail/Instructor"


const Coursedetail = () => {
  const [enrolled, setEnrolled] = useState<boolean>(false)
  return (
    <div>
      <CourseDetailProvider>
        <DetailHero enrolled={enrolled}/>
        <Review/>
        <Instructor/>
      </CourseDetailProvider>
      
    </div>
  )
}

export default Coursedetail
