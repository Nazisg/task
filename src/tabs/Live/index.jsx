import React from 'react'
import vector from '../../assets/imgs/vector.png'
import rus from '../../assets/imgs/rus.png'
import aze from '../../assets/imgs/aze.png'
import styles from './Live.module.scss'
import fe from '../../assets/imgs/floor-exercise.png'

export default function Live() {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className="center">App</th>
                        <th className="center">AA</th>
                        <th className="center">Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img className='apparat' src={fe} alt="floor-exercise" /></td>
                        <td><div className="team"><img src={aze} alt="rus" /><span>AZE</span></div></td>
                        <td>212</td>
                        <td>Amirbekov T.</td>
                        <td><div className='team score'><span>D: 5.400</span><span>E: 8.800</span><span>P: 0.3</span></div></td>
                        <td className="center"><div className='team app'><p>12.500</p><div className='rank'>7</div></div></td>
                        <td className="center"><div className='team app'><p>12.500</p><div className='rank'>4</div></div></td>
                        <td className="center"><div className='team app'><p>12.500</p><div className='rank'>12</div></div></td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <div className="line"><img src={vector} alt="vector" /></div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
