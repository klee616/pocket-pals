import style from './MenuButton.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuButton({ name, image, href }) {
    return (
        <>
            <Link href={href} className={style.menuLink}>
                <Image src={image}
                    height={120}
                    width={136}
                    className={style.categoryImage}
                />
                <div className={style.information}>
                    <div className={`button-font-style-1  ${style.name}`}>{name}</div>
                </div>
            </Link>
        </>
    )
}