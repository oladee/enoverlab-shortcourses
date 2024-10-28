import { createContext, useEffect, useState } from "react";
import {contextProps, dataProps} from '../declarations'
import { useParams } from "react-router-dom";
import {courses} from '../constants'

interface detailContextProps{
    detailData : dataProps
}

const CourseDetailContext = createContext<detailContextProps>({} as detailContextProps
)

export default CourseDetailContext



export const CourseDetailProvider  = ({children}:contextProps)=>{
    const {id} = useParams()
    const [detailData, setDetailData] = useState<dataProps>({}as dataProps)
    useEffect(()=>{
        const course = courses.filter(item => String(item.id) == id)
        setDetailData(course[0])
    },[id])
    return(<CourseDetailContext.Provider value={{detailData}}>
        {children}
    </CourseDetailContext.Provider>)
}