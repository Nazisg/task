import axios from 'axios';
import React, { useEffect, useState } from 'react';
import down from '../../assets/imgs/down.png';
import up from '../../assets/imgs/up.png';
import vector from '../../assets/imgs/vector.png';

export default function Live() {
    const [liveData, setLiveData] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [showMoreClicked, setShowMoreClicked] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3000/liveTable');
            setLiveData(response.data);
        };
        fetchData();

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const showMore = (id) => {
        setShowMoreClicked(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

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
                    {liveData.map((data, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td className={data.status ? "td-status" : "td-nostatus"}>
                                    <div className={data.status ? 'status' : ''}>
                                        {/* {data.status && <p>{data.status}</p>} */}
                                        <img className='apparat' src={data.Apparatus} alt="apparatus" />
                                    </div>
                                </td>
                                <td><div className="team"><img className='flag none' src={data.Flag} alt="flag" /><span>{data.Country}</span></div></td>
                                <td className='none'>{data.Bib}</td>
                                <td>{data.Name}</td>
                                <td>
                                    <div className='team score jcenter'>
                                        {typeof data.Score === "string" ? (
                                            <button className={data.Score === "Wait" ? 'wait' : "go"}>{data.Score}</button>
                                        ) : (
                                            <>
                                                {windowWidth < 850 && <div className='down' onClick={() => showMore(index)}>12.500<img src={showMoreClicked[index] ? up : down} /></div>}
                                                {windowWidth >= 850 && data.Score.map((score, idx) => (
                                                    <React.Fragment key={idx}>    <span className='none'>{score}</span></React.Fragment>
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className="center none">
                                    <div className='team app'>
                                        {data.App && (
                                            <>
                                                <p>{data.App.point}</p>
                                                <div className='rank'>{data.App.num}</div>
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className="center none">
                                    <div className='team app'>
                                        {data.AA && (
                                            <>
                                                <p>{data.AA.point}</p>
                                                <div className='rank'>{data.AA.num}</div>
                                            </>
                                        )}
                                    </div>
                                </td>
                                <td className="center none">
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
                            {showMoreClicked[index] && (
                                <tr>
                                    <td className='detail-top' colSpan="8">
                                        <div className="detail">
                                            <div className='dScore'>
                                                {data.Score.map((score, idx) => (
                                                    <React.Fragment key={idx}>
                                                        <p >{score}</p></React.Fragment>
                                                ))}</div>
                                            {data.App && (
                                                <div className='dApp'>
                                                    <p>App</p>
                                                    <div className='team'> <p>{data.App.point}</p>
                                                        <div className='rank'>{data.App.num}</div>
                                                    </div>
                                                </div>
                                            )}
                                            {data.AA && (
                                                <div className='dApp'>
                                                    <p>AA</p>
                                                    <div className='team'> <p>{data.AA.point}</p>
                                                        <div className='rank'>{data.AA.num}</div>
                                                    </div>
                                                </div>
                                            )}
                                            {data.Team && (
                                                <div className='dApp'>
                                                    <p>Team</p>
                                                    <div className='team'> <p>{data.Team.point}</p>
                                                        <div className='rank'>{data.Team.num}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )}
                            {index < liveData.length - 1 && (
                                <tr className='rowLine'>
                                    <td colSpan="8">
                                        <div className="line"><img src={vector} alt="vector" /></div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
