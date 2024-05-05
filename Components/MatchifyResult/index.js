import style from "./MatchifyResult.module.css";
import { useIntl } from "react-intl";

export default function MatchifyResult({ result }) {
    const intl = useIntl();
    console.log(result);
    return (<>
        {result && (<>
            <h1 className={`header_font ${style.header}`}>{intl.formatMessage({ id: "page.quiz.result" })}</h1>
            <div>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.player" })} </span> {result.name} </p>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.time" })}  </span> {result.time} </p>
                <p><span className='label-font-style'>{intl.formatMessage({ id: "page.mix.match.introduction.game.result.move" })}  </span> {result.move}     </p>
            </div>

        </>)
        }

    </>)

}