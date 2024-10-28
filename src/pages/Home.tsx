import Explore from "../components/Home/Explore"
import Hero from "../components/Home/Hero"
import Slideshow from "../components/Home/Slideshow"
import {CourseDataListProvider} from "../context/CourseDataListContext"

const Home = () => {
  return (
    <div>
      <CourseDataListProvider>
      <Hero/>
      <Slideshow/>
      <Explore/>

      </CourseDataListProvider>
      
    </div>
  )
}

export default Home