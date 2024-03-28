import React, { useState, useEffect } from 'react';
import vector from '../../assets/imgs/vector.png'
import rus from '../../assets/imgs/rus.png'
import aze from '../../assets/imgs/aze.png'
import styles from './Live.module.scss'
import fe from '../../assets/imgs/floor-exercise.png'
import axios from 'axios';

export default function Live() {
    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/liveTable');
          setData(response.data);
  
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(data)
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
                        <td><div className="team"><img className='flag' src={aze} alt="flag" /><span>AZE</span></div></td>
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
