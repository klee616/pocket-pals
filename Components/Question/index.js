import { useState, useEffect } from "react";
import style from './Question.module.css';
import { useRouter } from 'next/router';
import { Patrick_Hand } from 'next/font/google';
import { Sarabun } from "next/font/google";
import QuestionSelection from "../QuestionSelection";
import Button from "@/Components/Button";
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
        setOption(item);
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
                <div className={`content-font-style ${style.question}`}>{data[locale].question}</div>
                <form onSubmit={(e) => { e.preventDefault()}} id="quizForm" className={style.questionForm}>
                    {data[locale].choose.map((item, inx) => {
                        return (
                            <>
                                <QuestionSelection
                                    key={inx}
                                    id={`answer${inx}`}
                                    item={item}
                                    checked={item == option}
                                    callback={() => changeAnswer(item)}
                                    tabIndex={1}
                                />
                            </>
                        )
                    })
                    }
                </form>
                    <Button name="Next !" onClick={submitAnswer} disabled={!isEnable} />
            </>)}

        </>
    );
}