import style from '@/styles/History.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import articleData from '@/data/article.json';
import Selector from '@/Components/Selector';
import { FormattedMessage, useIntl } from "react-intl";
import { setCookie, getCookie, hasCookie, deleteCookie } from 'cookies-next';


export default function History() {
    const { locale } = useRouter();
    const intl = useIntl();
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [data, setData] = useState([...articleData])

    const headTitle = intl.formatMessage({ id: "page.history.head.title" });
    const headDescription = intl.formatMessage({ id: "page.history.head.description" });
    const title = intl.formatMessage({ id: "page.history.title" });
    const [cookiesValue, setCookiesValue] = useState(getCookie('historyRecord'));
    const [historyRecord, setHistoryRecord] = useState([]);
    const [menuData, setMenuData] = useState([]);


    const historyFilter = (item) => {
        if (item.category == categoryFilter || categoryFilter == "all") {
            return true;
        } else {
            return false;
        }
    }

    const readCookies = async () => {
        setCookiesValue(await getCookie('historyRecord'));
        let arr = JSON.parse(cookiesValue);
        setHistoryRecord(arr);
    }
    useEffect(() => {
        readCookies();
        setupMenuData();
    }, []);

    const setupMenuData = () => {

        let menuList = [{
            value: "all",
            displayValue: "All"}];
        data.map((item) => {
            let cate = {
                value: item.category,
                displayValue: item[locale].category_title
            };
            menuList.push(cate)
        });
        setMenuData(menuList);
    }


    const changeFilter = (filter) => {
        setCategoryFilter(filter);
    }
    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div key="-12" className={style.main}>
            <h1>{title}</h1>

            <Selector value={categoryFilter} defaultValue={`all`} optionList={menuData} tabIndex={`2`} onChange={changeFilter} />
            <table className={style.historyTable}>
                <thead>
                    <tr>
                        <th>{intl.formatMessage({ id: "page.history.name" })}</th>
                        <th>{intl.formatMessage({ id: "page.history.category" })}</th>
                        <th>{intl.formatMessage({ id: "page.history.date" })}</th>
                        <th>{intl.formatMessage({ id: "page.history.scores" })}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyRecord && historyRecord.filter(historyFilter).sort((a, b) => b.scores - a.scores).map((item, index) => {
                            return (<>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.date.substring(0, 10)}</td>
                                    <td>{item.scores}</td>
                                </tr>
                            </>)
                        })
                    }
                </tbody>
            </table>

        </div>
        <Footer />
    </>);
}