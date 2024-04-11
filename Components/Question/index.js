import { useState, useEffect } from "react";
import style from './Question.module.css';
import { useRouter } from 'next/router';
import { Patrick_Hand } from 'next/font/google';
import { Sarabun } from "next/font/google";
import QuestionSelection from "../QuestionSelection";

const patrickHand = Patrick_Hand({
    weight: '400',
    subsets: ['latin'],
});

const sarabun = Sarabun({
    weight: '400',
    subsets: ['latin'],
});

export default function Question({ data, callBack }) {
    const [option, setOption] = useState(null);
    const { locale } = useRouter();
    const [isEnable, setIsEnable] = useState(false);
    const [optionStyle, setOptionStyle] = useState([style.unselected, style.unselected, style.unselected, style.unselected]);
    const [answer, setAnswer] = useState("");


    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Enter" && isEnable) {
                submitAnswer();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isEnable]);

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
    const handleQuestionSelection = (event, index) => {
        if (event.key === "Enter") {
            changeAnswer(index);
        }
    }

    return (
        <>
            {data && (<>
                <form onSubmit={(e) => { e.preventDefault }}>
                    <ul key="-1">
                        <li className={`${style.question} ${sarabun.className}`}>{data[locale].question}</li>
                        <li className={style.li}>
                            <ul>
                                {data[locale].choose.map((item, inx) => {
                                    return (
                                        <>
                                            <QuestionSelection
                                                key={inx}
                                                id={`answer${inx}`}
                                                item={item}
                                                callback={() => changeAnswer(inx)}
                                                tabIndex={1} 
                                            />
                                        </>
                                    )
                                })
                                }
                            </ul>
                        </li>
                        <li className={style.li}>
                            <div className="confirmContainer">
                                <button className={`${style.confirm} ${patrickHand.className}`} onClick={submitAnswer} disabled={!isEnable} tabIndex="2"> Confirm </button>
                            </div>
                        </li>
                    </ul>
                </form>
            </>)}

        </>
    );
}