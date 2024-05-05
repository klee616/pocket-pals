import style from './CategoryButton.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function ({ category, name, image, href }) {
    return (<>
        <Link href={href} className={style.category_link}>
            <Image src={image}
                height={120}
                width={136}
                className={style.categoryImage}
                alt={name}
            />
            <div className={style.information}>
                <div className={`button-font-style-2 ${style.category}`}>{category}</div>
                <div className={`button-font-style-1  ${style.name}`}>{name}</div>
            </div>
        </Link>
    </>)
}