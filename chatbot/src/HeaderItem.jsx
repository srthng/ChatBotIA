import {Link} from 'react-router-dom'

export default function HeaderItem() {
    return (
        <div>
            <h1>Bem-vindo ao nosso site</h1>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Chatbot">Chatbot</Link></li>
        </div>
    )
}