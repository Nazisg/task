import React, { useState, useEffect } from 'react';
import vector from '../../assets/imgs/vector.png'
import axios from 'axios';

export default function Live() {
    const [liveData, setliveData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/liveTable');
                setliveData(response.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    console.log(liveData)
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
                    {
                        liveData.map((data, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className={data.status ? "td-status" : "td-nostatus"}>
                                        <div className={data.status ? 'status' : ''}>
                                            {data.status && <p>{data.status}</p>}
                                            <img className='apparat' src={data.Apparatus} alt="apparatus" />
                                        </div>
                                    </td>
                                    <td><div className="team"><img className='flag' src={data.Flag} alt="flag" /><span>{data.Country}</span></div></td>
                                    <td>{data.Bib}</td>
                                    <td>{data.Name}</td>
                                    <td><div className='team score'>{typeof data.Score === "string" ? (
                                        <button className={data.Score === "Wait" ? 'wait' : "go"}>{data.Score}</button>
                                    ) : (
                                        data.Score.map(score => (
                                            <span>{score}</span>
                                        ))
                                    )}</div></td>
                                    <td className="center">
                                        <div className='team app'>
                                            {data.App && (
                                                <>
                                                    <p>{data.App.point}</p>
                                                    <div className='rank'>{data.App.num}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className='team app'>
                                            {data.AA && (
                                                <>
                                                    <p>{data.AA.point}</p>
                                                    <div className='rank'>{data.AA.num}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="center">
                                        <div className='team app'>
                                            {data.Team && (
                                                <>
                                                    <p>{data.Team.point}</p>
                                                    <div className='rank'>{data.Team.num}</div>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                {index < liveData.length - 1 && (
                                    <tr>
                                        <td colSpan="8">
                                            <div className="line"><img src={vector} alt="vector" /></div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
