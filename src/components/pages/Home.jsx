import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import { LinkButton } from '../layout/LinkButton'

export function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Coins</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Cria Projeto"/>
            <img src={savings} alt="Coins"/>
        </section>
    )
}