import style from './SideMenuBar.module.css'
import Link from 'next/link';

export default function SideMenuBar({ setIsShowSideMenuBar }) {

    const closeSideMenuBar = (e) => {
        console.log(e.target);
        const topLevelChild = document.getElementById('menu_container');
        console.log(!topLevelChild.contains(e.target));
        if (!topLevelChild.contains(e.target)) {
            setIsShowSideMenuBar(false);
        }
    }
const handleClick = (e)=>{
    e.preventDefault();
    setIsShowSideMenuBar(false);
}

    return (<>
        <div id='overlap' className={style.overlap} onClick={closeSideMenuBar}>
            <div id='menu_container' className={style.sideMenubarContainer}>
                <ul className={style.sideMenu}>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/">Settings</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/">About</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/">Developer</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/">History</Link>
                    </li>
                    <li className={`menu-font-style ${style.menu}`}>
                        <Link href="/" onClick={handleClick}>Close</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}