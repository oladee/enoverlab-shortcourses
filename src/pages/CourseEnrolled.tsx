import DetailHero from "../components/CourseDetail/DetailHero"
import Course from "../components/courseEnrolled/Course"
import { ChapterProvider } from "../context/ChapterContext"

const CourseEnrolled = () => {
  return (
    <div>
      <DetailHero enrolled={true}/>
      <ChapterProvider>
        <Course/>
      </ChapterProvider>
    </div>
  )
}

export default CourseEnrolled
