import { createContext, useState } from "react";
import { chapterContextProps, contextProps } from "../declarations";

const ChapterContext = createContext({} as  chapterContextProps)

export default ChapterContext

export const ChapterProvider = ({children}:contextProps)=>{
    const [activeChapter, setActiveChapter] = useState<number | undefined>(undefined)
    return(<ChapterContext.Provider value={{activeChapter, setActiveChapter}}>
        {children}
    </ChapterContext.Provider>)
}
