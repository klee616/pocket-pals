import style from "./MatchifyResult.module.css";
import {  useIntl } from "react-intl";
import { useEffect, useRef, } from "react";

export default function MatchifyResult({ result }) {
    const intl = useIntl();
    const successSoundEffect = useRef();
    const playSuccess = () => {
        if (successSoundEffect.current) {
            successSoundEffect.current.play();
        }
    }
    
    useEffect(()=>{
        playSuccess();
    },[]);
    return (<>
        {result && (<>
            <h1 className={`header_font ${style.header}`}>{intl.formatMessage({ id: "page.quiz.result" })}</h1>
            <div>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.player" })} </span> {result.name} </p>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.time" })}  </span> {result.time} </p>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.move" })}  </span> {result.move}     </p>
            </div>
            <audio ref={successSoundEffect} src='/sound/success.mp3' /> 
        </>)
        }

    </>)

}