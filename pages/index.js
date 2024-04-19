import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import Link from "next/link";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import Image from 'next/image';
import { useState } from "react";

export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const router = useRouter();

  const [nickname, setNickname] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push("./SelectionScreen");
  };

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head. description" });

  
  return (
    <>
      <HeadArea title={title} description={description} />
      <header>
        <div>
          <Header/>
         
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>

      <main className={`${styles.main}`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Create Nickname</h1>

          <form className={styles.subtitleContainer} onSubmit={handleFormSubmit}>
            <input type="text"
              className={`${styles.subtitle}`}
              value={nickname}
              onChange={(e) => setNickname(e.target.value)} 
            />
            <button className={`button-font-style-1 ${styles.button}`} type="submit">Confirm!</button>
          </form>
        </div>

        <Image className={styles.mascot} src="./image/Mascot.svg" width={500} height={400} />
      </main>
    </>
  );
}
