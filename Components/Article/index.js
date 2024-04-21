import style from './Article.module.css'
import { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Selector from '@/Components/Selector';
import Image from 'next/image';
import Button from '../Button';
//  import { useSpeechSynthesis } from 'react-speech-kit';
export default function Article({ article }) {
    const { locale } = useRouter();
    const intl = useIntl();
    const router = useRouter();
    //  const {speak} = useSpeechSynthesis();

    const [displayObj, setDisplayObj] = useState(article[locale]);
    const [filter, setFilter] = useState("all");
    const [sections, setSections] = useState([]);
    const filterObj = (item) => {
        if (item.section == filter) return true;
        if (filter == "all") return true;
        return false;
    }

    //  const [speechValue, setSpeechValue] = useState('testing');

    const defaultValueLabel = intl.formatMessage({ id: "page.article.label" });
    const buttonLabel = intl.formatMessage({ id: "page.article.button1" });

    useEffect(() => {
        let tempSection = [{ value: "all", displayValue: defaultValueLabel }];
        displayObj.article.map((sectionList, index) => {
            tempSection.push({ value: sectionList.section, displayValue: sectionList.section })
        });
        setSections(tempSection);
    }, []);

    const buttonSubmit = (target) => {
        router.push(locale + target);
    }

    return (<>
        <Image src={article.cover_images} width={366} height={243.05} alt={`This is an image of ${displayObj.name}.`} />
        <h1 className={`title-font-style  ${style.title}`}>{displayObj.name}</h1>
        <Selector value={filter} defaultValue={`all`} optionList={sections} tabIndex={`2`} onChange={setFilter} />
        {/* <button onClick={()=> speak({text: speechValue})} >Speech</button> */}
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
        <Button name={buttonLabel} onClick={() => buttonSubmit('/')} />
    </>)
}