import { createContext, useState } from "react";
import {dataProps,contextProps} from '../declarations'
import {courses} from '../constants'

interface listContextProps{
    data : dataProps[]
    activeTab : string
    switchTab : (tabname:string)=> void
}


const CourseDataListContext = createContext<listContextProps>({}as listContextProps)

export default CourseDataListContext

export const CourseDataListProvider = ({children}:contextProps)=>{
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