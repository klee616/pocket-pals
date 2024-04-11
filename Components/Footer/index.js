import style from './Footer.module.css'
import Image from 'next/image'

export default function Footer(){
 return (<>
 <div className={style.block}>
 <Image
      src="/image/numbat.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.menu}
    />
    <Image
      src="/image/beaver.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.logo}
    />
    <Image
      src="/image/dog.svg"
      alt="Picture of the author"
      width={70}
      height={70}
      className={style.menu}
    />
 </div>
 </>);   
}