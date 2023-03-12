"use client"; // this is a client component 👈🏽
import { createContext, useReducer } from "react";
export const ChatContext = createContext();
export const ChatContextProvider = ({ children }) => {

    const INITIAL_STATE =
        [{
            Usertype: '',
            Mess: 'How can i halp you'
        }]


    const chatReducer = (state = [], action) => {
        switch (action.type) {
            case 'ADD_CHAT':
                return [
                    ...state, action.payload.prompt, action.payload.da
                ]
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE)
    return (
        < ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider >
    )
}