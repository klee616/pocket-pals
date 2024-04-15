import React, { useState } from 'react';
import style from './Header.module.css';
import Image from 'next/image';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className={style.bar}>
                <Image
                    src="/image/Ellipse.svg"
                    alt="Logo"
                    width={55}
                    height={55}
                    className={style.logo}
                />
                <div className={style.menu} onClick={toggleMenu}>
                    <Image
                        src="/image/BurgerMenu.svg"
                        alt="Burger Menu"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            {showMenu && (
                <div className={style.sideMenu}>
                    <ul className={style.texts}>
                        <li>
                            <a href="/settings" className={style.menus}>Settings</a>
                        </li>
                        <li>
                            <a href="/about" className={style.menus}>About</a>
                        </li>
                        <li>
                            <a href="/developer" className={style.menus}>Developer</a>
                        </li>
                        <li>
                            <a href="/history" className={style.menus}>History</a>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}