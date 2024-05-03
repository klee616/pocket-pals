import { useState, useEffect } from "react";
import style from './Question.module.css';
import { useRouter } from 'next/router';
import QuestionSelection from "../QuestionSelection";
import Button from "@/Components/Button";
import { useIntl } from "react-intl";

export default function Question({ data, callBack }) {
    const intl = useIntl();
    const [option, setOption] = useState(null);
    const { locale } = useRouter();
    const [isEnable, setIsEnable] = useState(false);

    const submitAnswer = () => {
        callBack(option);
        setIsEnable(false);
        setOption(null);

    }

    const OnFocusOut = () => {
        let currentElement = $get(currentElementId); // ID set by OnFocusIn 
        let currentIndex = currentElement.tabIndex;
        let setIndex = currentIndex - 1;
        let tabbables = document.querySelectorAll(".tabable");
        for(let i=0; i<tabbables.length; i++) { //loop through each element
            if(tabbables[i].tabIndex == (setIndex)) { //check the tabindex to see if it's the element we want
                tabbables[i].focus(); //if it's the one we want, focus it and exit the loop
                break;
            }
        }
    }
    const changeAnswer = (item) => {
        setOption(item);
        setIsEnable(true);
    }

    return (
        <>
            { (<>
                <div className={`content-font-style ${style.question}`}>{data[locale].question}</div>
                <form onSubmit={(e) => { e.preventDefault() }} id="quizForm" className={style.questionForm}>
                    {data[locale].choose.map((item, inx) => {
                        return (
                            <>
                                <QuestionSelection
                                    key={inx}
                                    id={`answer${inx}`}
                                    item={item}
                                    checked={item == option}
                                    callback={changeAnswer}
                                    tabIndex={9}
                                />
                            </>
                        )
                    })
                    }
                </form>
                <Button name={intl.formatMessage({ id: "page.quiz.next" })} onClick={submitAnswer} disabled={!isEnable} />
            </>)}

        </>
    );
}