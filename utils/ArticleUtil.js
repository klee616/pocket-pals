import articleData from '@/data/article.json';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

export function ArticleUntil( ){
    const { locale } = useRouter();

    const [data, setData] = useState([...articleData]);

    const getCategoryList = () =>{
        let categoryList = [];

        data.map((item) => {
            let cate = {
                category: item.category,
                image: item.categoryMenuImage,
                name: item[locale].name,
                region: item[locale].category_title,
                value: item.category,
                displayValue:  item[locale].category_title
            };
            categoryList.push(cate)
        });
        return categoryList;
    }

    return {getCategoryList}
    
}