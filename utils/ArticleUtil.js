import articleData from '@/data/article.json';
import { useState, useEffect } from 'react'
import { useRouter } from "next/router";

export function ArticleUntil() {
    const { locale } = useRouter();
    const [data, setData] = useState([...articleData]);

    const getTopicNamebyId = (topicId) => {
        console.log(topicId);
        let name = '';
        data.map((item) => {
            if (item.id == topicId)
                name = item[locale].name;
        });
        return name;
    }

    const getCategoryList = () => {
        let categoryList = [];

        data.map((item) => {
            let cate = {
                category: item.category,
                image: item.categoryMenuImage,
                name: item[locale].name,
                region: item[locale].category_title,
                value: item.category,
                displayValue: item[locale].category_title,
                id: item.id
            };
            categoryList.push(cate)
        });
        return categoryList;
    }

    const getAllTopicList = () => {
        let topicList = [];
        data.map((item) => {
            let topic = {
                category: item.category,
                image: item.categoryMenuImage,
                name: item[locale].name,
                region: item[locale].category_title,
                value: item.id,
                displayValue: item[locale].name,
                id: item.id
            };
            topicList.push(topic)
        });
        return topicList;
    }

    const getArticleById = (articleId) => {
        console.log(articleId);
        return articleData.filter((item) => item.id == articleId)[0];
    }
    return { getCategoryList, getArticleById, getAllTopicList, getTopicNamebyId}
}