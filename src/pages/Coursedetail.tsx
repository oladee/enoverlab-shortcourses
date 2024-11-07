import { useEffect, useState } from "react"
import DetailHero from "../components/CourseDetail/DetailHero"
import Review from "../components/CourseDetail/Review"
import Instructor from "../components/CourseDetail/Instructor"
import Back from "../components/Back"
import { useContext } from "react"
import CourseDetailContext from "../context/CourseDetailContext"
import { userData } from "../constants"
import { useNavigate } from "react-router-dom"


const Coursedetail = () => {
  const  {detailData} = useContext(CourseDetailContext)
  const [enrolled, setEnrolled] = useState<boolean>(false)
  const navigate = useNavigate()
  
  useEffect(()=>{
    const userEnrolled = userData.enrolledCourses.find((item)=> item.id == detailData.id)
    if(userEnrolled){
      setEnrolled(true)
      navigate(`/enrolledcourse/${detailData.id}`)
    }
  },[detailData,navigate])
  

  return (
    <div>
      
        <DetailHero enrolled={enrolled}/>
        {!enrolled && <Review/>}
        <Instructor/>
        <Back/>
      
    </div>  )
}

export default Coursedetail