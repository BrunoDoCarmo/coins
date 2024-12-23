import ConversaoMoeda from '../../utils/ConversaoMoeda'
import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

export function ServiceCard({ id, name, cost, description, handleRemove}) {
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)
    }
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>
                    Custo total:
                </span>
                {ConversaoMoeda(Number(cost))}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}