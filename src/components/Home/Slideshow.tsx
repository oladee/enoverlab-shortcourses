import { Swiper, SwiperSlide } from "swiper/react"
import { slideshowCom } from "../../constants"
import { Autoplay} from "swiper/modules"
import 'swiper/css';
import 'swiper/css/autoplay';


const Slideshow = () => {
  return (
    <div className="my-5 lg:my-8">
        <Swiper
        modules={[Autoplay]}
        autoplay = {
            {
                delay : 1200
            }
        }
        breakpoints={{
            320 : {
                slidesPerView : 1.5
            },
            700 : {
                slidesPerView : 3.5
            },
            1024 : {
                slidesPerView : 5
            }
        }}
        >
      {
        slideshowCom.map((showCom, idx)=> <SwiperSlide key={idx}><div><img src={showCom} className="h-[368px] lg:h-[520px]" alt="" /></div></SwiperSlide>)
      } 
      {
        slideshowCom.map((showCom, idx)=> <SwiperSlide key={idx}><img src={showCom} className="h-[368px] lg:h-[520px]" alt="" /></SwiperSlide>)
      }
    </Swiper>
    </div>
    
  )
}

export default Slideshow
