import { Badge, Tabs } from 'antd';
import React from 'react';
import Results from '../../tabs/Results';

const items = [
    {
        key: '1',
        label: (
            <span>
                <Badge color="red" /> Live
            </span>
        ),
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Startlist',
    },
    {
        key: '3',
        label: 'Schedule',
    },
    {
        key: '4',
        label: 'Results',
        children: <Results />,
    },
    {
        key: '5',
        label: 'Medals',
    }
];
export default function Tab() {
    return (
        <Tabs defaultActiveKey="1" items={items} />)
}
