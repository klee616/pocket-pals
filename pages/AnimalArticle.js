import Article from '@/Components/Article';
import Header from '@/Components/Header';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import style from '@/styles/Article.module.css';
import articleData from '@/data/article.json';
import { useState, useEffect, use } from 'react';
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export default function AnimalArticle() {
    const { locale } = useRouter();
    const intl = useIntl();
    const router = useRouter();
    const category =  router.query.category;
    const [topic, setTopic] = useState();

    useEffect(() => {
        console.log(category);
        let articleTopic = articleData.filter((item) => item.category == category)[0];
        console.log(articleTopic);
        setTopic(articleTopic);
    }, [])

    return (<>
        <HeadArea title="" description="" />
        <Header />
        <div className={style.main}>
            <Article article={topic} /> 
        </div>
        <Footer />
    </>);
}
