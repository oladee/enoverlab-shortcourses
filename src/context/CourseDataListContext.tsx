import { ReactNode, createContext, useState } from "react";
import {courses} from '../constants'

interface dataProps{
    topic : string,
    instructorName : string,
    rating : number,
    price : number,
    category : string,
    courseImg : string
}
interface listContextProps{
    data : dataProps[]
    activeTab : string
    switchTab : (tabname:string)=> void
}
interface fuctionProps{
    children : ReactNode
}

const CourseDataListContext = createContext<listContextProps>({}as listContextProps)

export default CourseDataListContext

export const CourseDataListProvider = ({children}:fuctionProps)=>{
    const [data, setData] = useState<dataProps[]>([...courses.filter((item:dataProps)=> item.category === 'beginner')])
    const [activeTab, setActiveTab] = useState<string>('beginner')
    const switchTab = (tabname: string)=>{
        const newCourses = [...courses.filter((item:dataProps)=> item.category === tabname)]
        setData(newCourses)
        setActiveTab(tabname)
    }
    return (<CourseDataListContext.Provider value={{data, activeTab, switchTab}}>
        {children}
    </CourseDataListContext.Provider>)
}