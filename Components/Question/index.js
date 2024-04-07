import { useState } from "react";
import style from './Question.module.css';
import { useRouter } from 'next/router'

export default function Question({ data, callBack }) {
    const [option, setOption] = useState(null);
    const { locale } = useRouter();
    const [isEnable, setIsEnable] = useState(false);
    const [optionStyle, setOptionStyle] = useState([style.unselected, style.unselected, style.unselected, style.unselected]);


    const submitAnswer = () => {
        callBack(option);
        setIsEnable(false);
        setOption(null);
        resetStyle();
    }
    const changeAnswer = (item) => {
        console.log(data[locale]['choose'][item]);
        for (let i = 0; i < data[locale]['choose'].length; i++) {
            (i == item) ? optionStyle[i] = optionStyle[item] = style.selected : optionStyle[i] = style.unselected;
        }
        setOption(data[locale]['choose'][item]);
        setIsEnable(true);
    }
    const resetStyle = () => {
        setOptionStyle([style.unselected, style.unselected, style.unselected, style.unselected]);
    }

    return (
        <>
            {data && (<>
                <ul key="-1">
                    <li className={style.question}>{data[locale].question}</li>
                    <li className={style.li}>
                        <ul>
                            {data[locale] && data[locale].choose.map((item, inx) => {
                                return (<><li className={style.answer} key={inx}>
                                    <div className={optionStyle[inx]} onClick={() => changeAnswer(inx)}>{item}</div>
                                </li></>)
                            })}
                        </ul>
                    </li>
                    <li className={style.li}><button className={style.confirm} onClick={() => { submitAnswer() }} disabled={!isEnable} > Confirm </button></li>
                </ul>
            </>)}
        </>
    );
}