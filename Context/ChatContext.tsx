"use client"; // this is a client component 👈🏽
import { createContext, useReducer } from "react";
type Chat = {
    Usertype: string;

    Mess: string;
};
type ChatContextType = {
    chats: Chat[];
    dispatch: React.Dispatch<ChatAction>;
  };


type ChatAction =
  | { type: "ADD_CHAT"; payload: Chat }

 const chatReducer = (state :Chat[], action:ChatAction) => {
        switch (action.type) {
            case 'ADD_CHAT':
                return [
                    ...state, action.payload
                ]
            default:
                return state
        }
    }
    export const ChatContext = createContext<ChatContextType>({
        chats: [],
        dispatch: () => {},
      });
export const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {
    

  
    const INITIAL_STATE =
        [{
            Usertype: 'bot',
            Mess: 'How can i halp you'
        }]


   

    const [chats, dispatch] = useReducer(chatReducer, INITIAL_STATE)
    return (
        < ChatContext.Provider value={{ chats, dispatch }}>
            {children}
        </ChatContext.Provider >
    )
}