import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  const dataPointValues=props.dataPoints.map((datapoint)=>(datapoint.value));
  const totalMaximum=Math.max(...dataPointValues);
  return (
    <div className='chart'>
        {
            props.dataPoints.map((datapoint)=>(
            <ChartBar 
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
            />
            ))
        }
    </div>
  )
}

export default Chart