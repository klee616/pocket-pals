import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import Image from 'next/image';
import { useState } from "react";
import Button from "@/Components/Button";

export default function Home({ dir }) {
  const { locale } = useRouter();
  const { locales } = useRouter();
  const intl = useIntl();
  const router = useRouter();

  const [nickname, setNickname] = useState("");
  const handleFormSubmit = (e) => {
    window.sessionStorage.setItem("nickname", nickname);
    e.preventDefault();
    router.push(locale + "/SelectionScreen");
  };

  const headTitle = intl.formatMessage({ id: "page.home.head.title" });
  const headDescription = intl.formatMessage({ id: "page.home.head.description" });
  const title = intl.formatMessage({id: "page.home.title"});
  const description = intl.formatMessage({ id: "page.home.description" });


  return (
    <>
      <HeadArea title={headTitle} description={headDescription} />
      <main className={`${styles.main}`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subtitleContainer}>
            <p className={`description-font-styles ${styles.subtitle}`}>{description}</p>
          </div>
        </div>

         <form className={styles.formContainer} onSubmit={handleFormSubmit}>
          <label className={`label-font-style ${styles.label}`} for="nickName">{intl.formatMessage({id:"page.home.label.nickname"})}</label>
          <input
            id="nickName"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Button name={intl.formatMessage({id: "page.home.submit"})} onClick={() => { }} />
        </form>
        <Image className={styles.mascot} src="./image/Mascot.svg" width={500} height={400} />


      </main>
    </>
  );
}
