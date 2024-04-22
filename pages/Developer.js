import style from '@/styles/Developer.module.css';
import developerData from '@/data/developer.json';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import CategoryButton from '@/Components/CategoryButton';
import articleData from '@/data/article.json';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Image from 'next/image';

export default function Developer() {
    const [data, setData] = useState([...developerData]);
    const { locale } = useRouter();
    const intl = useIntl();

    const headTitle = intl.formatMessage({ id: "page.developer.head.title" });
    const headDescription = intl.formatMessage({ id: "page.developer.head.description" });
    const title = intl.formatMessage({ id: "page.developer.title" });
    const description = intl.formatMessage({ id: "page.developer.description" });
    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div className={style.main}>
            <h1>{title}</h1>
            {data.map((item, key) => {
                return <>
                    <div>
                        <Image src={`/${item.images}`} width={313} height={168} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                </>

            })}

        </div>
        <Footer />
    </>);
}