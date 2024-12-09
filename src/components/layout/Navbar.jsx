import { Link } from "react-router-dom"

import { Container } from "./Container"

import  styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
export function Navbar() {

    const links = [
        { path: "/", label: "Home" },
        { path: "/contact", label: "Contato" },
        { path: "/company", label: "Empresa" },
        { path: "/newproject", label: "Novo Projeto" },
    ]
    return (
        <div className={styles.navbar}>
            <Container>
                <Link to="/" className={styles.logo}>
                    <img src={logo} alt="Coins" />
                </Link>
                <ul className={styles.list}>
                    {links.map((link, index) => (
                        <li key={index} className={styles.item}>
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    )
}