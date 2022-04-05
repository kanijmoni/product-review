import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div>
            <div>
                <h3>Investment Vs Revenue</h3>
                <LineChart width={600} height={400} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div>
                <h3>Investment Vs Revenue</h3>
                <BarChart width={800} height={400} data={data}>
                    <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                    <XAxis dataKey={'investment'}></XAxis>
                    <XAxis dataKey={'revenue'}></XAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey={'sell'} fill="#8884d8" ></Bar>
                    <Bar dataKey={'month'} fill="#82ca9d" ></Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;