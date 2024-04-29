import style from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react'
import SideMenuBar from '@/Components/SideMenuBar'
import { FormattedMessage, useIntl } from "react-intl";
import Link from 'next/link';

export default function Header() {
    const [isShowSideMenuBar, setIsShowSideMenuBar] = useState(false);
    return (<>
        {
            isShowSideMenuBar &&
            <SideMenuBar setIsShowSideMenuBar={setIsShowSideMenuBar} />
        }
        <div className={style.bar}>
            <Link href="/HomeMenu">
            <Image
                src="/image/Ellipse.svg"
                alt="Logo"
                width={55}
                height={55}
                className={style.logo}
            />
            </Link>
            <form className={style.bars}>
          <input type="text" name='search' id='search' className={style.searchInputBox}/>
          
          </form>

            <Image
                src="/image/BurgerMenu.svg"
                alt="Menu"
                width={40}
                height={40}
                className={style.menu}
                onClick={() => setIsShowSideMenuBar(true)}
            />


        </div>

    </>
    )
}