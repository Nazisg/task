import React from 'react'
import vector from '../../assets/imgs/vector.png'
import rus from '../../assets/imgs/rus.png'
export default function Table() {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Bib</th>
                        <th>Name</th>
                        <th className="center">D</th>
                        <th className="center">E</th>
                        <th className="center">Pen</th>
                        <th className="center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className="rank">1</div></td>
                        <td><div className="team"><img src={rus} alt="rus" /><span>RUS</span></div></td>
                        <td>212</td>
                        <td>Bonartsev Aleksandr</td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>102.256</p><p>102.256</p><p className="yellow">102.256</p></td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <div className="line"><img src={vector} alt="vector" /></div>
                        </td>
                    </tr>                    
                    <tr>
                        <td><div className="rank">1</div></td>
                        <td><div className="team"><img src={rus} alt="rus" /><span>RUS</span></div></td>
                        <td>212</td>
                        <td>Bonartsev Aleksandr</td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>43.833</p><p>43.833</p></td>
                        <td className="center"><p>102.256</p><p>102.256</p><p className="yellow">102.256</p></td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <div className="line"><img src={vector} alt="vector" /></div>
                        </td>
                    </tr>                </tbody>
            </table>
        </div>
        )
}
