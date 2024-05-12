import style from '@/styles/Setting.module.css';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Selector from '@/Components/Selector';
import Button from '@/Components/Button';

export default function Quiz({ }) {
    const { locale } = useRouter();
    const { locales } = useRouter();
    const intl = useIntl();
    const router = useRouter();
    const headTitle = intl.formatMessage({ id: "page.setting.head.title" });
    const headDescription = intl.formatMessage({ id: "page.setting.head.description" });
    const title = intl.formatMessage({ id: "page.setting.title" });

    const [settingLocale, setSettingLocale] = useState(locale);
    const [fontSize, setFontSize] = useState();
    const [soundEffect, setSoundEffect] = useState(true);
    const [sound, setSound] = useState(true);

    useEffect(() => {
        setFontSize(window.sessionStorage.getItem("fontSize") ? window.sessionStorage.getItem("fontSize") : 'middleFontSize');
        setSoundEffect(window.sessionStorage.getItem("soundEffect"));
        setSound(window.sessionStorage.getItem("sound"));
        console.log(window.sessionStorage.getItem("soundEffect"));
        console.log(window.sessionStorage.getItem("sound"));
    }, [])

    const changeSetting = () => {
        window.sessionStorage.setItem("fontSize", fontSize);
        window.sessionStorage.setItem("soundEffect", soundEffect);
        window.sessionStorage.setItem("sound", sound);
        console.log(fontSize);
        console.log(soundEffect);
        console.log(sound);
        router.push(`${router.asPath}`, `${router.asPath}`, { locale: settingLocale })
    }

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setFontSize(value);
    };

    return (<>
        <HeadArea title={headTitle} description={headDescription} />
        <Header />
        <div className={style.main}>
            <h1 className={style.title}>{title}</h1>
            <form className={style.appForm} action={`/`} onSubmit={(e) => e.preventDefault()}>


                <label for="volume" className={style.text}>{intl.formatMessage({ id: "page.setting.volume" })}
                    <div className={style.switchVol}>{sound}
                        <input type='checkbox' id='volume' name='volume' value='volume' checked={sound} onClick={(e) => { setSound(e.target.checked) }} tabIndex={10} />
                        <span className={style.slider}></span>
                    </div>
                </label>


                <div>

                    <label for="soundEffect" className={style.text}>{intl.formatMessage({ id: "page.setting.sound.effect" })}
                        <div className={style.switchSound}>{soundEffect}
                            <input type='checkbox' id='soundEffect' name='soundEffect' value='soundEffect' checked={soundEffect} onClick={(e) => { setSoundEffect(e.target.checked) }} tabIndex={11} />
                            <span className={style.slider}></span>
                        </div>
                    </label>
                </div>
                <div>
                    <label className={style.head}>{intl.formatMessage({ id: "page.setting.font.size" })}</label>
                    <div className={style.fonts}>
                        <label className={style.biggerFontSize} for="biggerFontSize">
                            {intl.formatMessage({ id: "page.setting.big" })}
                            <h2>A</h2>
                            <input type='radio' id='biggerFontSize' name='fontSize' value='biggerFontSize' checked={fontSize === "biggerFontSize"} onClick={handleOptionChange} tabIndex={12} />
                        </label>
                        <label className={style.middleFontSize} for="middleFontSize">
                            {intl.formatMessage({ id: "page.setting.middle" })}
                            <h2>A</h2>
                            <input type='radio' id='middleFontSize' name='fontSize' value='middleFontSize' checked={fontSize === "middleFontSize"} onClick={handleOptionChange} tabIndex={13} />
                        </label>
                        <label className={style.smallFontSize} for="smallFontSize">
                            {intl.formatMessage({ id: "page.setting.small" })}
                            <h2>A</h2>
                            <input type='radio' id='smallFontSize' name='fontSize' value='smallFontSize' checked={fontSize === "smallFontSize"} onClick={handleOptionChange} tabIndex={14} />
                        </label>
                    </div>
                </div>
                <div className={style.langContainer}>
                    <label className={style.head} for="language"> {intl.formatMessage({ id: "page.setting.language" })}</label>
                    <div className={style.button} style={{ width: "100%" }}>
                        <Selector value={settingLocale} defaultValue={locale} optionList={[{ value: "en", displayValue: "English" }, { value: "zh", displayValue: "繁體中文" }]} tabIndex={`15`} onChange={setSettingLocale} />
                    </div>
                </div>
                <Button name={intl.formatMessage({ id: "button.confirm" })} onClick={changeSetting} className={style.confirm} tabIndex={16} />
            </form>
        </div>
        <Footer />
    </>);
}