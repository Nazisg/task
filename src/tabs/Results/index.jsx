import { Segmented, Space } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import cancel from '../../assets/imgs/cancel.png';
import down from '../../assets/imgs/down.png';
import filter from '../../assets/imgs/filter.png';
import fe from '../../assets/imgs/floor-exercise.png';
import hb from '../../assets/imgs/horizontal-bar.png';
import pb from '../../assets/imgs/parallel-bars.png';
import ph from '../../assets/imgs/pommel-horse.png';
import rs from '../../assets/imgs/rings.png';
import up from '../../assets/imgs/up.png';
import vt from '../../assets/imgs/valut.png';
import vector from '../../assets/imgs/vector.png';
import styles from './Results.module.scss';

export default function Results() {
  const [resultData, setResultData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMoreClicked, setShowMoreClicked] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3000/resultsTable');
      setResultData(response.data);
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
    <div className={styles.results}>
      <Space size={[8, 16]} wrap className={styles.segment}>
        <Segmented options={['MAG', 'WAG']} />
        <Segmented options={['Qualification', 'Final']} />
        <Segmented options={['Apparatus', 'Team', 'All-around']} />
        <Segmented options={['Seniors', 'Juniors']} />
      </Space>
      <Space size={[30, 16]} wrap className={styles.imgs}>
        <img src={fe} alt='floor-exercise' />
        <img src={ph} alt='pommel-horse' />
        <img src={rs} alt='rings' />
        <img src={vt} alt='valut' />
        <img src={pb} alt='parallel-bars' />
        <img src={hb} alt='horizontal-bar' />
      </Space>
      <div className={styles.btnBox}> <button className={styles.filterBtn}><img src={filter} alt="filter-icon" /> Filter</button></div>
      <Space size={[8, 16]} wrap className={styles.tags}>
        <button className={styles.tag}><img src={cancel} />MAG</button>
        <button className={styles.tag}><img src={cancel} />Qualification</button>
        <button className={styles.tag}><img src={cancel} />Seniors</button>
        <button className={styles.tag}><img src={cancel} />Apparatus</button>
        <button className={styles.tag}><img src={cancel} />Floor exercise</button>
      </Space>
      {/*  Table */}
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
            {
              resultData.map((data, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td><div className="rank">{data.id}</div></td>
                    <td><div className="team"><img className='flag none' src={data.Flag} alt="flag" /><span>{data.Team}</span></div></td>
                    <td className='none'>{data.Bib}</td>
                    <td>{data.Name}</td>
                    {windowWidth < 850 && <td ><div className='team score jcenter'>{windowWidth < 850 && <div className='down' onClick={() => showMore(index)}>12.500<img src={showMoreClicked[index] ? up : down} /></div>}</div></td>}
                    <td className="center none">{
                      data.D.map(d => (
                        <p>{d}</p>
                      ))
                    }</td>
                    <td className="center none">{
                      data.E.map(e => (
                        <p>{e}</p>
                      ))
                    }</td>
                    <td className="center none">{
                      data.Pen.map(pen => (
                        <p>{pen}</p>
                      ))
                    }</td>
                    <td className="center none">{
                      data.Total.map((total, index) => (
                        <p className={` ${index === 2 || (index === 0 && data.id > 2) ? "yellow" : ""}`}>{total}{index}</p>
                      ))
                    }</td>
                  </tr>
                  {showMoreClicked[index] && (
                    <tr>
                      <td className='detail-top' colSpan="8">
                        <div className="detail">
                          <div className='dApp'>
                            <p>D</p>
                            <div className='team'>
                              {data.D.map(d => (
                                <p>{d}</p>
                              ))}
                            </div>
                          </div>
                          <div className='dApp'>
                            <p>E</p>
                            <div className='team'>
                              {data.E.map(e => (
                                <p>{e}</p>
                              ))}
                            </div>
                          </div>
                          <div className='dApp'>
                            <p>Total</p>
                            <div className='team wrap'>{
                              data.Total.map((total, index) => (
                                <p className={` ${index === 2 || (index === 0 && data.id > 2) ? "yellow" : ""}`}>{total}{index}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                  {index < resultData.length - 1 && (
                    <tr className='rowLine'>
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
    </div>
  )
}
