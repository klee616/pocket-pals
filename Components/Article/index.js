import style from './Article.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Selector from '@/Components/Selector';
import Image from 'next/image';
import Button from '../Button';
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Article({ article }) {
    const { locale } = useRouter();
    const intl = useIntl();
    const router = useRouter();
    const { speak, cancel, speaking, supported, voices } = useSpeechSynthesis();

    const [displayObj, setDisplayObj] = useState(article[locale]);
    const [filter, setFilter] = useState("all");
    const [sections, setSections] = useState([]);
    const filterObj = (item) => {
        if (item.section == filter) return true;
        if (filter == "all") return true;
        return false;
    }

    const [speechValue, setSpeechValue] = useState('');

    const defaultValueLabel = intl.formatMessage({ id: "page.article.label" });
    const buttonLabel = intl.formatMessage({ id: "page.article.button1" });

    useEffect(() => {


        let tempSection = [{ value: "all", displayValue: defaultValueLabel }];
        displayObj.article.map((sectionList, index) => {
            tempSection.push({ value: sectionList.section, displayValue: sectionList.section })
        });
        setSections(tempSection);
        resetSpeectValue();
    }, []);

    const changeFilter = (filter) => {
        setFilter(filter);
        cancel();
        resetSpeectValue();
    }

    const resetSpeectValue = () => {
        let text = "";
        displayObj.article.filter(filterObj).map((sectionList) => {
            text = text + sectionList.section;
            sectionList.content.map(content => { text = `${text} <br /> ${content}` });
        });
        setSpeechValue(text);
    }

    useEffect(() => {
        const handleRouteChange = (url) => {
            cancel();
        }
        router.events.on('routeChangeStart', handleRouteChange);
    }, [router]);
    return (<>
        <Image src={article.cover_images} width={366} height={243.05} alt={`This is an image of ${displayObj.name}.`} className={style.articleImage} />
        <h1 className={`title-font-style  ${style.title}`}>{displayObj.name}</h1>
        <div className={style.controlList}>
            <Selector value={filter} defaultValue={`all`} optionList={sections} tabIndex={`2`} onChange={changeFilter} />
            <div className={style.iconList}>
            <button onClick={() => speak({ text: speechValue })} style={{ background: 'none', border: '0px' }} ><Image src="/icon/Hearing.png" height={20} width={20} alt={`speech to text`} /></button>
            <button onClick={cancel} style={{ background: 'none', border: '0px' }} ><Image src="/icon/Hearing_disabled.png" height={20} width={20} alt={`speech to text`} /></button>
            </div>
        </div>
        {
            displayObj.article.filter(filterObj).map((sectionList, index) => {
                return (<>
                    <div key={index} className={`label-font-style  ${style.section}`}>{sectionList.section} </div>
                    {
                        sectionList.content.map((content, contentIndex) => {
                            return <> <div index={contentIndex} className={`article-content-font-style ${style.content}`} >{content}</div></>
                        })
                    }
                </>)
            })
        }
        <Button name={buttonLabel} onClick={() => router.push({
            pathname: `/QuizGameIntroduction`,
            query: { articleId: article.id },
        })} />
    </>)
}