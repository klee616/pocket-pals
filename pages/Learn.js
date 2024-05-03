import style from '@/styles/CategorySelection.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import CategoryButton from '@/Components/CategoryButton';
import { useState, useEffect } from 'react'
import { useIntl } from "react-intl";
import { ArticleUntil } from '@/utils/ArticleUtil'
import Selector from '@/Components/Selector';

export default function Learn({ }) {
    const intl = useIntl();
    const { getCategoryList } = ArticleUntil();
    const [menuData, setMenuData] = useState(getCategoryList);
    const [categoryFilter, setCategoryFilter] = useState('all');

    const headTitle = intl.formatMessage({ id: "page.learn.head.title" });
    const headDescription = intl.formatMessage({ id: "page.learn.head.description" });
    const title = intl.formatMessage({id: "page.learn.title"});
    const description = intl.formatMessage({ id: "page.learn.description" });
    

    const filter = (item) => {
        if (item.category == categoryFilter || categoryFilter == "all") {
            return true;
        } else {
            return false;
        }
    }

    const changeFilter = (filter) => {
        setCategoryFilter(filter);
    }
    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div className={style.main}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Selector isNeedAddAllValue={true} value={categoryFilter} defaultValue={`all`} optionList={menuData} tabIndex={`10`} onChange={changeFilter} />
            {
                menuData.filter(filter).map((item, index) => {
                    return (<>
                        <CategoryButton key={index} name={item.name} category={item.region} image={item.image} href={{ pathname: '/AnimalArticle', query: { articleId: item.id } }} />
                    </>);
                })}
        </div>
        <Footer />
    </>);
}