import styles from "@/styles/HomeMenu.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";
import Image from "next/image";

export default function HomeMenu({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head. description" });
  return (
    <>
      <HeadArea title={title} description={description} />
      <Header />
      <main className={`${styles.main}`}>
        <div className={styles.headingContainer}>
          <h1 className={styles.title}>
            Home Page
          </h1>
          <p className={styles.subtitle}>Read or Play!</p>
        </div>

        <div className={styles.options}>
          <button className={styles.button} >
            <Link href={"/TopicMenuQuiz"}>
              <img src="./image/Buttons/Quiz.svg" width={180} height={200} />
            </Link>
          </button>
          <button className={styles.button} >
            <Link href={"/TopicMenuMixMatch"}>
            <img src="./image/Buttons/MixMatch.svg" width={180} height={200} />
            </Link>
          </button>
          <button className={styles.button} >
            <Link href={"/TopicMenuArticle"}>
            <img src="./image/Buttons/Article.svg" width={180} height={200} />
            </Link>
          </button>
          <button className={styles.button} >
            <img src="./image/Buttons/Settings.svg" width={180} height={200} />
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}