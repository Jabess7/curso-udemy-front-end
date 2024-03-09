import { createContext,useReducer } from "react";




export const QuizContext = createContext();

export const QuizProvider = ({childre}) => {
    
    const value = {}
    return<QuizContext.Provider value={value}>{childre}</QuizContext.Provider>
}