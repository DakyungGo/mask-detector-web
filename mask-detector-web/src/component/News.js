import React, { useEffect, useState } from 'react';
import {getNews} from '../function/NaverApi';

function News() {

    const [newsList, setNewsList] = useState();

    useEffect(()=>{
        getNews().then(data => {
            setNewsList(data.newslist.items);
        });
    },[])

    return (
    <div>
        <div>news</div>
    </div>)
}

export default News;