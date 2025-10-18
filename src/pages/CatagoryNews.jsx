import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/homelayout/NewsCard";

const CatagoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [CatagoryNews, setCatagoryNews] = useState([]);

  useEffect(() => {
    if(id== "0"){
        setCatagoryNews(data);
    } else if (id == "1") {
        const filterNews = data.filter((news) => news.others.is_today_pick == true);
        setCatagoryNews(filterNews);

    }else {
        const filterNews =data.filter ((news) => news.category_id == id);
        setCatagoryNews(filterNews);
    }
      
  },[id,data]);


  // console.log(id, data);
  useEffect(() => {
    if (id == "0") {
      setCatagoryNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCatagoryNews(filterNews);
      return;
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(filterNews);
      setCatagoryNews(filterNews);
    }

    const filterNews = data.filter((news) => news.category_id == id);
    console.log(filterNews);
    setCatagoryNews(filterNews);
  }, [data, id]);
  return <div>
    <h2>Total {CatagoryNews.length} News Found</h2>
    <div className="grid grid-cols-1 gap-5">
  {
    CatagoryNews.map (news => <NewsCard news={news} key={news.id}></NewsCard>)
  }
    </div>
  </div>;
};

export default CatagoryNews;
