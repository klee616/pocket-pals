import styles from "@/styles/TopicMenu.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";
import Image from "next/image";

export default function Article({ dir }) {
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
            Select Your Article
          </h1>
          <p className={styles.subtitle}>Choice a Topic to Learn</p>
        </div>

        <div className={styles.filterContainer}>
          <button className={styles.filter}><img src="./image/Filter_alt.svg" width={30} height={30} /></button>
        </div>

        <div className={styles.topicContainer}>
          <button className={styles.topic}>
            <img src="./image/Topics/Marmots.svg" width={300} height={110} />
          </button >

          <button className={styles.topic}>
            <img src="./image/Topics/Bear.svg" width={300} height={110} />
          </button >

          <button className={styles.topic}><img src="./image/Topics/Hamster.svg" width={300} height={110} /></button >

          <button className={styles.topic}><img src="./image/Topics/Panda.svg" width={300} height={110} /></button >

          <button className={styles.topic}><img src="./image/Topics/Numbat.svg" width={300} height={110} /></button >

          <button className={styles.topic}><img src="./image/Topics/Dog.svg" width={300} height={110} /></button >
          
          <button className={styles.topic}><img src="./image/Topics/Penguin.svg" width={300} height={110} /></button >

        </div>
      </main>
      <Footer />
    </>
  );
}