import HeadArea from "@/Components/HeadArea";
import style from '@/styles/AnimalChart.module.css';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Chart from "@/Components/Chart";
import {  useIntl } from "react-intl";

export default function AnimalChart() {
  const intl = useIntl();

  const headTitle = intl.formatMessage({ id: "page.chart.head.title" });
  const headDescription = intl.formatMessage({ id: "page.chart.head.description" });
  const title = intl.formatMessage({ id: "page.chart.title" });

  return (
    <>
      <HeadArea title={headTitle} description={headDescription} />
    <Header />
    <div className={style.main}>
        <Chart title={title} />
      </div>
      <Footer/>
    </>
  );
}
