import style from './Header.module.css'
import Image from 'next/image'

export default function Header(){
    return (<>
    <div className={style.bar}>
    <Image
      src="/image/Ellipse.svg"
      alt="Picture of the author"
      width={55}
      height={55}
      className={style.logo}
    />
    <Image
      src="/image/BurgerMenu.svg"
      alt="Picture of the author"
      width={40}
      height={40}
      className={style.menu}
    />
    
    </div>

    </>)
}