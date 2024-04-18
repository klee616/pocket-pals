import style from './Header.module.css'
import Image from 'next/image'
import { useState } from 'react'
import SideMenuBar from '@/Components/SideMenuBar'

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
                alt="Picture of the author"
                width={55}
                height={55}
                className={style.logo}
            />
            
            <Image
                src="/image/Searchbar.svg"
                alt="Search Icon"
                width={200}
                height={30}
                className={style.search}
            />
            

            <Image
                src="/image/BurgerMenu.svg"
                alt="Picture of the author"
                width={40}
                height={40}
                className={style.menu}
                onClick={() => setIsShowSideMenuBar(true)}
            />


        </div>

    </>
    )
}