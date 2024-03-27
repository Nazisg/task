import React from 'react'
import styles from './Header.module.scss'
import arrowLeft from '../../assets/imgs/arrow-left.svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={arrowLeft} />
            <div className={styles.title}>
                <h1>FIG ARTISTIC GYMNASTICS WORLD CUP</h1>
                <div className={styles.subtitle}>
                    <p>Doha, Qatar</p>
                    <div className={styles.line}></div>
                    <p>12/03/2023 - 13/02/2023</p>
                </div>
            </div>
        </div>
    )
}
