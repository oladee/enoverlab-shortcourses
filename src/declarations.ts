import { ReactNode } from "react"

export interface dataProps{
    id : number,
    topic : string,
    instructorName : string,
    rating : number,
    price : number,
    category : string,
    courseImg : string
    details : string
}

export interface contextProps{
    children : ReactNode
}