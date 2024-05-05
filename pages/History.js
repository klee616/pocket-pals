import style from '@/styles/History.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useState, useEffect } from 'react'
import Selector from '@/Components/Selector';
import { useIntl } from "react-intl";
import { getCookie } from 'cookies-next';
import { ArticleUntil } from '@/utils/ArticleUtil';


export default function History() {
    const intl = useIntl();
    const [categoryFilter, setCategoryFilter] = useState('all');
    const { getAllTopicList, getTopicNamebyId } = ArticleUntil();
    const [menuData, setMenuData] = useState(getAllTopicList);

    const headTitle = intl.formatMessage({ id: "page.history.head.title" });
    const headDescription = intl.formatMessage({ id: "page.history.head.description" });
    const title = intl.formatMessage({ id: "page.history.title" });
    const [cookiesValue, setCookiesValue] = useState(getCookie('historyRecord'));
    const [historyRecord, setHistoryRecord] = useState([]);


    const historyFilter = (item) => {
        if (item.topic == categoryFilter || categoryFilter == "all") {
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
    }, []);

    const changeFilter = (filter) => {
        setCategoryFilter(filter);
    }
    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div key="-12" className={style.main}>
            <h1>{title}</h1>

            <Selector isNeedAddAllValue={true} value={categoryFilter} defaultValue={`all`} optionList={menuData} tabIndex={`9`} onChange={changeFilter} />
            <table className={style.historyTable}>
                <thead>
                    <tr>
                        <th>{intl.formatMessage({ id: "page.history.name" })}</th>
                        <th>{intl.formatMessage({ id: "page.history.category" })}</th>
                        <th>{intl.formatMessage({ id: "page.history.scores" })}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyRecord && historyRecord.filter(historyFilter).sort((a, b) => b.scores - a.scores).map((item, index) => {
                            return (<>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{getTopicNamebyId(item.topic)}</td>
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