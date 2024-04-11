import { useRouter } from "next/router";
import Quiz from "@/Components/Quiz";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import style from '@/styles/QuizGame.module.css';

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
      <main >
        <h1 className={style.header}>Quiz - {category}</h1>
        <Quiz category={category} />
      </main>
    </>
  );
}
