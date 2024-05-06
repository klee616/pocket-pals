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
                <li className={`menu-font-style ${style.menuClose}`}>
                        <Link href="/" onClick={handleClick}  tabIndex={9}>x</Link> 
                    </li>

                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/Setting" locale={locale}  tabIndex={4}>{intl.formatMessage({ id: "side.menu.setting" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/Developer" locale={locale}  tabIndex={5}>{intl.formatMessage({ id: "side.menu.developer" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/History" locale={locale}  tabIndex={6}>{intl.formatMessage({ id: "side.menu.history" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/History2" locale={locale}  tabIndex={6}>{intl.formatMessage({ id: "side.menu.history2" })}</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/CallApi" locale={locale} tabIndex={7}>Call API</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/AnimalChart" locale={locale} tabIndex={8}>Chart</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </>)
}