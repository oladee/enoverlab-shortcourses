import { useState } from "react"
import DetailHero from "../components/CourseDetail/DetailHero"
import Review from "../components/CourseDetail/Review"
import { CourseDetailProvider } from "../context/CourseDetailContext"
import Instructor from "../components/CourseDetail/Instructor"
import Back from "../components/Back"


const Coursedetail = () => {

  const [enrolled] = useState<boolean>(false)

  return (
    <div>
      <CourseDetailProvider>
        <DetailHero enrolled={enrolled}/>
        <Review/>
        <Instructor/>
        <Back/>
      </CourseDetailProvider>
      
    </div>
  )
}

export default Coursedetail
