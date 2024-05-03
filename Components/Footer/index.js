import style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link';

export default function Footer(){
 return (<>
 <div className={style.block}>
  <Link  href={`/Learn`}>
 <Image
      src="/image/Buttons/ArticleFooter.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.menu}
    />
    </Link>

    <Link href={`/HomeMenu`}>
    <Image
      src="/image/Buttons/Home.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.logo}
    />
    </Link>
     <Link href={`/Quiz`}>
    <Image
      src="/image/Buttons/Game.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.menu}
    />
    </Link>
 </div>
 </>);   
}