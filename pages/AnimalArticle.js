import Article from '@/Components/Article';
import Header from '@/Components/Header';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import style from '@/styles/Article.module.css';
import articleData from '@/data/article.json';
import { useState, useEffect, use } from 'react';
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import { useSearchParams } from 'next/navigation'

export default function AnimalArticle() {
    const { locale } = useRouter();
    const intl = useIntl();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = router.query;
    const category = searchParams.get("category");
    const [topic, setTopic] = useState(articleData.filter((item) => item.category == category)[0]);
    
    useEffect( 
        ()=>{
            let article = articleData.filter((item) => item.category == category)[0];
            setTopic(article);
            console.log(article);
        }
        ,[])
    return (<>
        <HeadArea title="" description="" />
        <Header />
        <div className={style.main}>
            {topic ? <>
            <Article article={topic} />
            </> :<>Article is not found.</>}
        </div>
        <Footer />
    </>);
}
