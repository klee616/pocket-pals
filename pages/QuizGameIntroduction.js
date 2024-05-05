
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
        <div className={style.imageDiv}><Image src="/image/pocketpalsgame.svg" width={300} height={150} alt="pocket pals game"/></div>
        <h1>{title}</h1>
        <div className={style.content}>
      
          <ul className={style.listed}>
            <li className={style.list}>{intl.formatMessage({ id: "page.quiz.game.rule.1" })}</li>
            <li className={style.list}>{intl.formatMessage({ id: "page.quiz.game.rule.2" })}</li>
            <li className={style.list}>{intl.formatMessage({ id: "page.quiz.game.rule.3" })}</li>
          </ul>
        </div>
        <Button name='Start' onClick={() => router.push({ pathname: "QuizGame", query: router.query })} />

      </div>
      <Footer />
    </>
  );
}
