import { useRouter } from "next/router";
import Quiz from "@/Components/Quiz";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import Category from "@/Components/Category";

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
        <h1>Select an Animal Quiz Topic</h1>

        <Category path="./QuizGameIntroduction" alt="North American" query={{category:"NorthAmerican"}} />

      </main>
    </>
  );
}
