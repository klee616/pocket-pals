import Article from '@/Components/Article';
import Header from '@/Components/Header';
import HeadArea from '@/Components/HeadArea';
import Footer from '@/Components/Footer';
import style from '@/styles/Article.module.css';
import { useSearchParams } from 'next/navigation'
import { ArticleUntil } from '@/utils/ArticleUtil';

export default function AnimalArticle() {
    const searchParams = useSearchParams();
    const articleId = searchParams.get("articleId");
    const {getArticleById} = ArticleUntil();;
    const topic =  getArticleById(articleId);
    
    console.log(articleId)
    console.log(topic)
    return (<>
        <HeadArea title="" description="" />
        <Header />
        <div className={style.main}>
            {topic ? <>
            <Article article={topic} />
            </> :<>Article is not found.</>}
        </div>
        <Footer />
    </>);
}
