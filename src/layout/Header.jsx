import { useNavigate } from "react-router-dom"
import "../css/header.css"


export default function Header() {

    const navigation = useNavigate()
    return (
        <header>
            <img src="/assets/Logo.svg" alt="Logo" className="logo" />
            <button className="button" onClick={() => navigation('create-todo')}>Create</button>
        </header>
    )
}