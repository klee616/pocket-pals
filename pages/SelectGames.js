import styles from "@/styles/HomeMenu.module.css";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";
import Image from "next/image";
import MenuButton from "@/Components/MenuButton";

export default function HomeMenu({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const headTitle = intl.formatMessage({ id: "page.select.game.head.title" });
  const headDescription = intl.formatMessage({ id: "page.select.game.head.description" });
  const title = intl.formatMessage({ id: "page.select.game.title" });
  const description = intl.formatMessage({ id: "page.select.game.description" });
  return (
    <>
    <HeadArea title={headTitle} description={headDescription} />
      <Header />
      <main className={`${styles.main}`}>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.options}>
          <MenuButton name={intl.formatMessage({id: "page.selection.screen.quiz"})} image="/image/Topics/Panda.png" href="/Quiz" />
          <MenuButton name={intl.formatMessage({id: "page.selection.screen.mix.and.match"})} image="/image/Topics/Hamster.png" href="/MixMatchIntroduction" />
        </div>
      </main>
      <Footer />
    </>
  );
}