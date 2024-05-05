import style from '@/styles/Quiz.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import {  useIntl } from "react-intl";
import Matchify from '@/Components/Matchify';

export default function MixMatch({ }) {
    const intl = useIntl();

    const headTitle = intl.formatMessage({ id: "page.quiz.head.title" });
    const headDescription = intl.formatMessage({ id: "page.quiz.head.description" });
    const title = intl.formatMessage({ id: "page.quiz.title" });
    const description = intl.formatMessage({ id: "page.quiz.description" });

    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div className={style.main}>
            <Matchify />
        </div>
        <Footer />
    </>);
}