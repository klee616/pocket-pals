import style from '@/styles/History.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useState, useEffect } from 'react'
import { useIntl } from "react-intl";
import { getCookie } from 'cookies-next';


export default function History2() {
    const intl = useIntl();

    const headTitle = intl.formatMessage({ id: "page.history2.head.title" });
    const headDescription = intl.formatMessage({ id: "page.history2.head.description" });
    const title = intl.formatMessage({ id: "page.history2.title" });
    const [cookiesValue, setCookiesValue] = useState(getCookie('mixMatchhistoryRecord'));
    const [historyRecord, setHistoryRecord] = useState([]);


    const readCookies = async () => {
        setCookiesValue(await getCookie('mixMatchhistoryRecord'));
        let arr = JSON.parse(cookiesValue);
        setHistoryRecord(arr);
    }
    useEffect(() => {
        readCookies();
    }, []);

    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div key="-12" className={style.main}>
            <h1>{title}</h1>

            <table className={style.historyTable}>
                <thead>
                    <tr>
                        <th>{intl.formatMessage({ id: "page.history2.name" })}</th>
                        <th>{intl.formatMessage({ id: "page.history2.move" })}</th>
                        <th>{intl.formatMessage({ id: "page.history2.time" })}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        historyRecord && historyRecord.sort((a, b) => b.move == a.move? a.time - b.time : b.move - a.move).slice(0, 10).map((item, index) => {
                            return (<>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.move}</td>
                                    <td>{item.time}</td>
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