import React from 'react'
import styles from './Results.module.scss'
import { Segmented, Space } from 'antd';
import fe from '../../assets/imgs/floor-exercise.png'
import hb from '../../assets/imgs/horizontal-bar.png'
import pb from '../../assets/imgs/parallel-bars.png'
import ph from '../../assets/imgs/pommel-horse.png'
import rs from '../../assets/imgs/rings.png'
import vt from '../../assets/imgs/valut.png'
import Table from '../../components/Table';
export default function Results() {
  return (
    <div className={styles.results}>
      <Space size={[8, 16]} wrap>
        <Segmented options={['MAG', 'WAG']} />
        <Segmented options={['Qualification', 'Final']} />
        <Segmented options={['Apparatus', 'Team', 'All-around']} />
        <Segmented options={['Seniors', 'Juniors']} />
      </Space>
      <Space size={[30, 16]} wrap>
        <img src={fe} alt='floor-exercise'/>
        <img src={ph} alt='pommel-horse'/>
        <img src={rs} alt='rings'/>
        <img src={vt} alt='valut'/>
        <img src={pb} alt='parallel-bars'/>
        <img src={hb} alt='horizontal-bar'/>
      </Space>
      <Table/>
    </div>
  )
}
