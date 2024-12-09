import styles from './Container.modules.css'

export function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.chidren}
        </div>
    )
}