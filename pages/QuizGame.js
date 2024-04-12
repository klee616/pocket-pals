import { useRouter } from "next/router";
import Quiz from "@/Components/Quiz";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import style from '@/styles/QuizGame.module.css';
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const metaDescription = intl.formatMessage({ id: "page.home.head.meta.description" });

  const router = useRouter();
  const category = router.query.category;
  return (
    <>
    
      <HeadArea title={title} description={metaDescription} />
      <Header/>
      <main className={style.main} >
        <Quiz category={category} />
      </main>
      <Footer/>
    </>
  );
}
