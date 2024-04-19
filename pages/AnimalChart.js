import HeadArea from "@/Components/HeadArea";
import style from '@/styles/Chart.module.css';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Chart from "@/Components/Chart";

export default function AnimalChart({ dir }) {
  return (
    <>
      <HeadArea title="123" description="21" />
      <Header/>
      <main className={style.main} >
        <Chart />
      </main>
      <Footer/>
    </>
  );
}
