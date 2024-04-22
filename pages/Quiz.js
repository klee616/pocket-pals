import style from '@/styles/Quiz.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import CategoryButton from '@/Components/CategoryButton';
import articleData from '@/data/article.json';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export default function Quiz({ }) {
    const { locale } = useRouter();
    const intl = useIntl();

    const [data, setData] = useState([...articleData])
    const [menuData, setMenuData] = useState([]);

    const headTitle = intl.formatMessage({ id: "page.quiz.head.title" });
    const headDescription = intl.formatMessage({ id: "page.quiz.head.description" });
    const title = intl.formatMessage({id: "page.quiz.title"});
    const description = intl.formatMessage({ id: "page.quiz.description" });
    useEffect(() => {
        let menuList = [];
        data.map((item) => {
            let cate = {
                category: item.category,
                image: item.categoryMenuImage,
                name: item[locale].name,
                region: item[locale].category_title
            };
            menuList.push(cate)
        });

        setMenuData(menuList);
    }, []);
    
    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div className={style.main}>
            <h1>{title}</h1>
            <p>{description}</p>
            {
                menuData.map((item, index) => {
                    return (<>
                        <CategoryButton key={index} name={item.name} category={item.category} image={item.image} href={{ pathname: '/QuizGameIntroduction', query: { category: item.category } }} />
                    </>);
                })}
        </div>
        <Footer />
    </>);
}