import styles from "@/styles/SelectionScreen.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import HeadArea from "@/Components/HeadArea";
import Image from 'next/image';
import { useState, useEffect } from "react";
import Button from "@/Components/Button";

export default function SelectionScreen({ dir }) {
  const { locale } = useRouter();
  const intl = useIntl();
  const router = useRouter();
  

  const headTitle = intl.formatMessage({ id: "page.selection.screen.head.title" });
  const headDescription = intl.formatMessage({ id: "page.selection.screen.head.description" });
  const title = intl.formatMessage({id: "page.selection.screen.title"});
  const description = intl.formatMessage({ id: "page.selection.screen.description" });

 
  const buttonSubmit = (target)=>{
    router.push(locale + target);
  }
  const [ nickName, setNickName ] = useState("");
  useEffect(() => {
    setNickName(window.sessionStorage.getItem("nickname"));
  }, [])
  return (
    <>
      <HeadArea title={headTitle} description={headDescription} />
      <main className={`${styles.main}`}>
        <div className={styles.heading}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.subtitleContainer}>
            <p className={`description-font-styles ${styles.subtitle}`}>{description} <br />{intl.formatMessage({id: "page.selection.screen.welcome"})} {nickName} !</p>
          </div>
        </div>
        <Image src="/image/Mascot.svg" className={styles.mascot} width={300} height={400} alt="Logo" />

        <div className={styles.buttonContainer}>
        
          <Button name={intl.formatMessage({id: "page.selection.screen.learn"})} onClick={()=>buttonSubmit('/Learn')} />
          <Button name={intl.formatMessage({id: "page.selection.screen.games"})} onClick={()=>buttonSubmit('/Quiz')} />
          <Button className={styles.button} name={intl.formatMessage({id: "page.selection.screen.home.menu"})} onClick={()=>buttonSubmit('/HomeMenu')} />

        </div>
      </main>
    </>
  );
}
