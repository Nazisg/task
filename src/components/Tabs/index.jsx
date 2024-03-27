import { Tabs } from 'antd';
import React from 'react'
const items = [
    {
        key: '1',
        label: 'Live',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Startlist',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Schedule',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '4',
        label: 'Results',
        children: 'Content of Tab Pane 3',
    },
    {
        key: '5',
        label: 'Medals',
        children: 'Content of Tab Pane 3',
    }
];
export default function Tab() {
    return (
        <Tabs  defaultActiveKey="1" items={items}  />)
}
