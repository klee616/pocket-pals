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
            Play
          </h1>
          <p className={styles.subtitle}>Quiz Yourself Or Mix and Match!</p>
        </div>
        <div className={styles.options}>
          <Link href={`/Quiz`}>
            <Image src="/image/Buttons/Quiz.svg" width={200} height={200} className={styles.button} alt='Quiz' />
          </Link>
          <Link href={`/MixMatchIntroduction`}>
            <Image src="/image/Buttons/MixMatch.svg" width={200} height={200} className={styles.button} alt='MixMatch' />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}