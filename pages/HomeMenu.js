import styles from "@/styles/HomeMenu.module.css";
import { useRouter } from "next/router";
import MenuButton from "@/Components/MenuButton/";
import Footer from "@/Components/Footer/"
import Header from "@/Components/Header/"
import HeadArea from "@/Components/HeadArea";

export default function HomeMenu({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();
  const router = useRouter()

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
          <MenuButton name="Setting" image="/image/numbat.png" href="/Setting" />



          {/* <button className={styles.button} onClick={() => router.push('/Quiz')} >
              <Image src="/image/Panda.png" width={180} height={200}  alt="Quiz"/>
          </button>
          <button className={styles.button} onClick={() => router.push('/HomeMenu')} >
            <Image src="/image/Panda.png" width={180} height={200}   alt="Mix and Match"/>
          </button>
          <button className={styles.button} onClick={() => router.push('/Learn')} >
            <Image src="/image/Buttons/Article.svg" width={180} height={200}   alt="Learn"/>
          </button>
          <button className={styles.button} onClick={() => router.push('/Setting')} >
            <Image src="/image/Buttons/Settings.svg" width={180} height={200} alt="Setting"/>
          </button> */}
        </div>
      </div>
      <Footer />
    </>
  );
}