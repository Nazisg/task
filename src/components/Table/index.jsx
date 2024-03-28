import React from 'react'
import styles from './Table.module.scss'
import vector from '../../assets/imgs/vector.png'
import rus from '../../assets/imgs/rus.png'
export default function Table() {
    return (
        <div className={styles.tableContainer}>

            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Bib</th>
                        <th>Name</th>
                        <th className={styles.center}>D</th>
                        <th className={styles.center}>E</th>
                        <th className={styles.center}>Pen</th>
                        <th className={styles.center}>Total</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className={styles.rank}>1</div></td>
                        <td><div className={styles.team}><img src={rus} alt="rus" /><span>RUS</span></div></td>
                        <td>212</td>
                        <td>Bonartsev Aleksandr</td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>102.256</p><p>102.256</p><p className={styles.yellow}>102.256</p></td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <div className={styles.line}><img src={vector} alt="vector" /></div>
                        </td>
                    </tr>                    <tr>
                        <td><div className={styles.rank}>1</div></td>
                        <td><div className={styles.team}><img src={rus} alt="rus" /><span>RUS</span></div></td>
                        <td>212</td>
                        <td>Bonartsev Aleksandr</td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>43.833</p><p>43.833</p></td>
                        <td className={styles.center}><p>102.256</p><p>102.256</p><p className={styles.yellow}>102.256</p></td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <div className={styles.line}><img src={vector} alt="vector" /></div>
                        </td>
                    </tr>                </tbody>
            </table>
        </div>)
}
