import { useNavigate } from "react-router-dom"

export default function FooterLink({ link, value }) {

    const navigation = useNavigate()
    return (
        <a className="link" onClick={() => navigation(link)}>{value}</a>   
    )
}