import style from './SideMenuBar.module.css'
import Link from 'next/link';
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";

export default function SideMenuBar({ setIsShowSideMenuBar }) {

    const { locale } = useRouter();
    const intl = useIntl();
    const closeSideMenuBar = (e) => {
        console.log(e.target);
        const topLevelChild = document.getElementById('menu_container');
        console.log(!topLevelChild.contains(e.target));
        if (!topLevelChild.contains(e.target)) {
            setIsShowSideMenuBar(false);
        }
    }
    const handleClick = (e) => {
        e.preventDefault();
        setIsShowSideMenuBar(false);
    }

    return (<>
        <div id='overlap' className={style.overlap} onClick={closeSideMenuBar}>
            <div id='menu_container' className={style.sideMenubarContainer}>
                <ul className={style.sideMenu}>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/Setting" locale={locale}>{intl.formatMessage({ id: "side.menu.setting" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/Developer" locale={locale}>{intl.formatMessage({ id: "side.menu.developer" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/History" locale={locale}>{intl.formatMessage({ id: "side.menu.history" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/CallAPI" locale={locale}>Call API</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/AnimalChart" locale={locale}>Chart</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/" onClick={handleClick}>{intl.formatMessage({ id: "side.menu.close" })}</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}