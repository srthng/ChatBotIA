import { createContext, useContext } from "react";
import { useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();
export const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompts,setPrevPrompts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) => {
        setLoading(true);
        console.log("Loading...")
        const response = await run(prompt);
        setResultData(response);
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        loading,
        resultData,
        input,
        setInput
    }
    
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;