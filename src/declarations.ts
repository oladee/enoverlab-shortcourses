import { ReactNode } from "react"


export interface chapterContextProps {
    activeChapter : number | undefined
    setActiveChapter : React.Dispatch<React.SetStateAction<number | undefined>>
}

export interface chapterProps extends Partial <chapterContextProps>{
    idx ?: number,
    topic : string,
    duration : string,
    details : string,
    videoUrl : string,
}

export interface dataProps{
    id : number,
    topic : string,
    instructorName : string,
    rating : number,
    price : number,
    category : string,
    courseImg : string
    details : string,
    courseMtl ?: chapterProps[]
}




export interface contextProps{
    children : ReactNode
}

export interface detailHeroProps{
    enrolled : boolean
}