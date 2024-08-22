import React from 'react'
import './NewsCard.css'
const NewsCard = ({newsItem}) => {
    console.log(newsItem);
  return (
    <div className='newscard'>
        <img alt={newsItem.title} src={
            newsItem.urlToImage ? newsItem.urlToImage:"https://www.goabadminton.com/sites/default/files/default_images/default-news.jpg"
        }   className='newsImage'/>
        <div className='newsText'>
            <div>
                <span className='title'>
                    {newsItem.title}
                </span>
                <span className='author'>
                    <a href={newsItem.url}> Short </a>
                    <span className='muted'>
                    by Author 
                    {newsItem.author ? newsItem.author :"susthir"}
                    </span>
                    
                </span>
                <div className="lowertext">
                    <div className="description">
                        {newsItem.description}
                    </div>
                    <span className='readmore'>
                        read more at {" "}
                        <a href={newsItem.url} >
                            <b>{newsItem.source.name}</b>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard