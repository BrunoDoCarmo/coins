import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export function Footer() {

    const linksSocial = [
        { path: "FACEBOOK", label: <FaFacebook/>},
        { path: "INSTAGRAM", label: <FaInstagram/>},
        { path: "LINKEDIN", label: <FaLinkedin/>}
    ]

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                {linksSocial.map((linkSocial, index) => (
                    <li key={index}>
                        <Link to={linkSocial.path}>{ linkSocial.label }</Link>
                    </li>
                ))}
            </ul>
            <p className={styles.copy_right}>
                <span>Coins</span> &copy; 2024
            </p>
        </footer>
    )
}