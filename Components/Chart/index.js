import styel from './Chart.module.css';
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
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                },
                {
                    label: "Total Over All Size",
                    data: avgTotalOverAllSizeList,
                    borderColor: 'rgb(103, 162, 235)',
                    backgroundColor: 'rgba(103, 162, 235, 0.4)'
                },
                {
                    label: "Male Over All Size",
                    data: avgMaleOverAllSieList,
                    borderColor: 'rgb(153, 162, 235)',
                    backgroundColor: 'rgba(153, 162, 235, 0.4)'
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
                    text: "The avg"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, []);

    return (<>
        <Bar data={chartData} options={chartOptions} style={{ width: '80%', height: '100%' }} />
    </>)
}