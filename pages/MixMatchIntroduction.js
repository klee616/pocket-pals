
import { useRouter } from "next/router";
import HeadArea from "@/Components/HeadArea";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {  useIntl } from "react-intl";
import Image from "next/image";
import Button from "@/Components/Button";
import style from '@/styles/MixMatchIntroduction.module.css'

export default function MixMatchIntroduction() {
  const intl = useIntl();

  const metatitle = intl.formatMessage({ id: "page.mix.match.introduction.game.introduction.head.title" });
  const metaDescription = intl.formatMessage({ id: "page.mix.match.introduction.game.introduction.head.description" });
  const title = intl.formatMessage({ id: "page.mix.match.introduction.game.introduction.title" });

  const router = useRouter();
  return (
    <>

      <HeadArea title={metatitle} description={metaDescription} />
      <Header />
      <div className={style.main}>
        <h1>{title}</h1>
        <div className={style.content}>
        <Image />
          <ul className={style.listed}>
            <li className={style.list}>MixMatchIntroduction </li>
            <li className={style.list}>MixMatchIntroduction</li>
            <li className={style.list}>MixMatchIntroduction</li>
          </ul>
        </div>
        <Button name='Start' onClick={() => router.push({ pathname: "MixMatch", query: router.query })} />

      </div>
      <Footer />
    </>
  );
}
