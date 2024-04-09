import style from './Category.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Category({ imagePath, path, query, alt}) {
    return (<>
        <Link
        href={{
            pathname: path,
            query:query,
          }}
           >
            <Image
                src="/imagePath"
                width={396}
                height={128}
                alt={alt}
            />
        </Link>
    </>)

}