import { Link } from "react-router-dom"
export function Navbar() {

    const links = [
        { path: "/", label: "Home" },
        { path: "/contact", label: "contact" },
    ]
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contato</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><Link to="/newproject">NewProject</Link></li>
            </ul>
        </div>
    )
}