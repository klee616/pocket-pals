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

    const submitAnswer = () => {console.log(data);

        callBack(option);
        setIsEnable(false);
        setOption(null);
        OnFocusOut();
    }

    const OnFocusOut = () => {
        const nextfield = document.querySelector(`#questionanswer0`)
        if (nextfield !== null) {
            nextfield.focus();
        }

    }
    const changeAnswer = (item) => {
        setOption(item);
        setIsEnable(true);
    }

    return (
        <>
            {(<>
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