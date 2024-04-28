import style from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react'
import SideMenuBar from '@/Components/SideMenuBar'
import { FormattedMessage, useIntl } from "react-intl";

export default function Header() {
    const [isShowSideMenuBar, setIsShowSideMenuBar] = useState(false);
    return (<>
        {
            isShowSideMenuBar &&
            <SideMenuBar setIsShowSideMenuBar={setIsShowSideMenuBar} />
        }
        <div className={style.bar}>
            <Image
                src="/image/Ellipse.svg"
                alt="Logo"
                width={55}
                height={55}
                className={style.logo}
            />
            
            <form className={style.bars}>
          <label className= {style.searchBar}></label>
          <input
            type="text"
          />
          <Image
                src="/image/Searchicons.png"
                alt="Search Icon"
                width={20}
                height={20}
                className={style.Search}
            />
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