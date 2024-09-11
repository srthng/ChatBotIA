import {Link} from 'react-router-dom'

export default  function HeaderItem () {
    return (
        <header>
            <div className="inicio">
            <h1>Maria botânica</h1>
            </div>

            <div className="meio">
            <div className="botaodirecional1"><Link to="/">Home</Link></div>
            <div className="botaodirecional2"><Link to="Chatbot">Chatbot</Link></div>
            <div className="botaodirecional2"><Link to="Chatbot">Marketplace</Link></div>
            </div>
   

            <div className="fim">
            <div className="botaodirecional2"><Link to="Chatbot">login</Link></div>
            <div className="botaodirecional2"><Link to="Chatbot">registrar</Link></div>
            </div>
        </header>
    )
}