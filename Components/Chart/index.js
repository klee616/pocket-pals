import style from './Chart.module.css';
import questionData from '@/data/aza_mle_2018.json';
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

export default function Chart({ }) {
    const [dataSet, setDataSet] = useState([...questionData]); 
    const [chartData, setChartData] = useState({ datasets: [] })
    const [chartOptions, setChartOptions] = useState({});

    ChartJs.register(
        CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
    )

    useEffect(() => {
        // data perpare
        const groupByData = Object.groupBy(dataSet, (data) => data['TaxonClass']);
        let label = [];
        let avgTotalOverAllSizeList = [];
        let avgFemaleOverAllSizeList = [];
        let avgMaleOverAllSieList = [];
        for (const obj in groupByData) {
            const arr = groupByData[obj];
            const totalOverallSize = arr.reduce((total, num) => total + num['Overall Sample Size'], 0);
            const totalFemaleSize = arr.reduce((total, num) => total + num['Female Sample Size'], 0);
            const totalMaleSize = arr.reduce((total, num) => total + num['Male Sample Size'], 0);
            const avgTotalOverAllSize = (totalOverallSize / arr.length).toFixed(2);
            const avgFemaleOverAllSize = (totalFemaleSize / arr.length).toFixed(2);
            const avgMaleOverAllSize = (totalMaleSize / arr.length).toFixed(2);

            label.push(obj);
            avgFemaleOverAllSizeList.push(avgFemaleOverAllSize);
            avgTotalOverAllSizeList.push(avgTotalOverAllSize);
            avgMaleOverAllSieList.push(avgMaleOverAllSize);
        }

        setChartData({
            labels: label,
            datasets: [
                {
                    label: "Female Over All Size",
                    data: avgFemaleOverAllSizeList,
                    borderColor: 'rgb(19, 100, 77)',
                    backgroundColor: 'rgb(19, 100, 77,0.9)'
                },
                {
                    label: "Total Over All Size",
                    data: avgTotalOverAllSizeList,
                    borderColor: 'rgb(255, 197, 58)',
                    backgroundColor: 'rgb(255, 197, 58, 0.8)'
                },
                {
                    label: "Male Over All Size",
                    data: avgMaleOverAllSieList,
                    borderColor: 'rgb(228, 109, 5)',
                    backgroundColor: 'rgb(228, 109, 5, 0.9)'
                }
            ]
        });

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Average Sizes"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, []);

    return (<>
    
    <div className={style.Container}>
    <h2 className={style.text}>Charts</h2>
    <div className={style.chart}>
        <Bar data={chartData} options={chartOptions} style={{ width: '80%', height: '500px' }} />
        </div>
        </div>
    </>)
}
