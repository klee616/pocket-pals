import styles from "@/styles/SelectionScreen.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import Link from "next/link";
import Image from 'next/image';

export default function SelectionScreen({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head. description" });
  return (
    <>
      <HeadArea title={title} description={description} />
      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>

      <main className={`${styles.main}`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Pocket Pals</h1>
          <div className={styles.subtitleContainer}>
            <p className={`description-font-styles ${styles.subtitle}`}>An Animal Learning App for Kids!</p>
          </div>
        </div>

        <Image src="./image/Mascot.svg" width={500} height={400} />

        <div className={styles.buttonContainer}>
          <button className={`button-font-style-1 ${styles.button}`}><Link href="/TopicMenuArticle">Learn!</Link></button>
          <button className={`button-font-style-1 ${styles.button}`}><Link href="/TopicMenuQuiz">Quiz!</Link></button>
          <button className={`button-font-style-1 ${styles.button}`}><Link href="/TopicMenuMixMatch">Mix and Match!</Link></button>
        </div>
      </main>
    </>
  );
}
