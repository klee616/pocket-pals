
import { useRouter } from "next/router";
import HeadArea from "@/Components/HeadArea";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {  useIntl } from "react-intl";
import Image from "next/image";
import Button from "@/Components/Button";
import style from '@/styles/QuizGameIntroduction.module.css'

export default function Home() {
  const intl = useIntl();

  const metatitle = intl.formatMessage({ id: "page.quiz.game.introduction.head.title" });
  const metaDescription = intl.formatMessage({ id: "page.quiz.game.introduction.head.description" });
  const title = intl.formatMessage({ id: "page.quiz.game.introduction.title" });

  const router = useRouter();
  return (
    <>

      <HeadArea title={metatitle} description={metaDescription} />
      <Header />
      <div className={style.main}>
      <Image src="/image/pocketpalsgame.svg" width={300} height={150}/>
        <h1>{title}</h1>
        <div className={style.content}>
      
          <ul className={style.listed}>
            <li className={style.list}>You have to answer four questions.</li>
            <li className={style.list}>Each question has four answers but only one is right.</li>
            <li className={style.list}>Show how smart you are by getting all four questions correct!</li>
          </ul>
        </div>
        <Button name='Start' onClick={() => router.push({ pathname: "QuizGame", query: router.query })} />

      </div>
      <Footer />
    </>
  );
}
