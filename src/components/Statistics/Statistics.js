import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
  } from "recharts";

  

const Charts = () => {
    const quizData = useLoaderData();
    const data = quizData.data;
    return (
       <div className='bg-yellow-300 p-11 mx-auto'>
            <LineChart width={500}  height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
       </div>
    );
};

export default Charts;