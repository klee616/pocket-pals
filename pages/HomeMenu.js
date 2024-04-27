import styles from "@/styles/HomeMenu.module.css";
import MenuButton from "@/Components/MenuButton/";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";

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
        <p>{description}</p>

        <div className={styles.options}>
          <MenuButton name="Quiz" image="/image/Panda.png" href="/Quiz" />
          <MenuButton name="Mix and Match" image="/image/Hamster.png" href="/HomeMenu" />
          <MenuButton name="Learn" image="/image/Bear.png" href="/Learn" />
          <MenuButton name="Setting" image="/image/numbat.png" href="/Setting" />sss
        </div>
      </div>
      <Footer />
    </>
  );
}