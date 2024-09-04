// i hate bazingers

import { useContext } from "react"
import { Context } from "./Context/Context"

const Chatpage = () => {

    const {onSent,recentPrompt,loading,resultData,setInput,input} = useContext(Context)
    return (
        <div>
            <h1>Chatpage</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {recentPrompt && <p>{recentPrompt}</p>}
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                </div>
            )}
            <div>
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" />
                <button style={{ marginLeft: '20px' }} onClick={() => { console.log(input); onSent(input)}}>Enviar</button>
            </div>

        </div>
    )
    
}
export default Chatpage;