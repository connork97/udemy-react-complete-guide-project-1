import ChartBar from "./ChartBar"

import './Chart.css'

const Chart = ({ chartDataPoints }) => {

    const chartDataValues = chartDataPoints.map((dataPoint) => dataPoint.value)

    console.log(chartDataValues)

    const maxChartValue = Math.max(...chartDataValues)

    console.log("max", maxChartValue)

    const renderChartBars = chartDataPoints.map((dataPoint) => {
        return(
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maxChartValue}
                label={dataPoint.label}
            />
        )
    })

    return (
        <div className='chart'>
            {renderChartBars}
        </div>
    )
}

export default Chart