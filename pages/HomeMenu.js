import styles from "@/styles/HomeMenu.module.css";
import MenuButton from "@/Components/MenuButton/";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";
import { FormattedMessage, useIntl } from "react-intl";

export default function HomeMenu({ dir }) {
  const intl = useIntl();

  const headTitle = intl.formatMessage({ id: "page.home.head.title" });
  const headDescription = intl.formatMessage({ id: "page.home.head.description" });
  const title = intl.formatMessage({ id: "page.home.title" });
  const description = intl.formatMessage({ id: "page.home.description" });
  return (
    <>

      <HeadArea title={headTitle} description={headDescription} />
      <Header />
      <div className={styles.main}>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{description}</p>

        <div className={styles.options}>
          <MenuButton name={intl.formatMessage({id: "page.selection.screen.quiz"})} image="/image/Topics/Panda.png" href="/Quiz" />
          <MenuButton name={intl.formatMessage({id: "page.selection.screen.mix.and.match"})} image="/image/Topics/Hamster.png" href="/MixMatchIntroduction" />
          <MenuButton name={intl.formatMessage({id: "page.selection.screen.learn"})} image="/image/Topics/Bear.png" href="/Learn" />
          <MenuButton name={intl.formatMessage({id: "side.menu.setting"})} image="/image/Topics/numbat.png" href="/Setting" />
        </div>
      </div>
      <Footer />
    </>
  );
}