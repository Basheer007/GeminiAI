import { createContext } from "react"
import run from "../Config/api"
import { useState } from 'react';
export const Context = createContext()



const Contextapi = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompt, setRecentPrompt] = useState([]);
    const [generatedText, setGeneratedText] = useState('')
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState('')
    const [loading, setLoading] = useState(false);

    const onsent = async () => {

        setShowResult(true);
        setCurrentQuestion(input);
        setGeneratedText('')
        setLoading(true);
        setRecentPrompt(prev=>{
            return [...prev, input];
        })
        const response = await run(input);
        let markdownHtml = markdownToBoldHTML(response)
        const withLineBreaks = markdownHtml.replace(/\*/g, '<br>');
        setLoading(false)
        setGeneratedText(withLineBreaks);
        setInput('');
    }
    // Function to convert markdown text with bold markers to full HTML
    function markdownToBoldHTML(text) {
        return text.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>');
    }


    const contextValue = {
        input,
        setInput,
        onsent,
        showResult,
        setShowResult,
        generatedText,
        setGeneratedText,
        recentPrompt,
        setRecentPrompt,
        currentQuestion,
        setCurrentQuestion,
        loading,
        setLoading,
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>

    )
}

export default Contextapi
