
import { useRouter } from "next/router";
import HeadArea from "@/Components/HeadArea";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { FormattedMessage, useIntl } from "react-intl";
import Image from "next/image";
import Button from "@/Components/Button";
import style from '@/styles/QuizGameIntroduction.module.css'

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const metatitle = intl.formatMessage({ id: "page.quiz.game.introduction.head.title" });
  const metaDescription = intl.formatMessage({ id: "page.quiz.game.introduction.head.description" });
  const title = intl.formatMessage({ id: "page.quiz.game.introduction.title" });
  const description = intl.formatMessage({ id: "page.quiz.game.introduction.description" });

  const router = useRouter();
  const category = router.query.category;
  return (
    <>

      <HeadArea title={metatitle} description={metaDescription} />
      <Header />
      <div className={style.main}>
        <h1>{title}</h1>
        <Image />
        <div>
          <ul>
            <li>A. adsf</li>
            <li>A. adsf</li>
            <li>A. adsf</li>
            <li>A. adsf</li>
            <li>A. adsf</li>
          </ul>
        </div>
        <Button name='Start' onClick={() => router.push({ pathname: "QuizGame", query: router.query })} />

      </div>
      <Footer />
    </>
  );
}
