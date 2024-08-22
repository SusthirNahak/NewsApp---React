import React from 'react'
import './NewsContent.css'
import { Container } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'
const NewsContent = ({newsArray,newsResults,setLoadmore,loadmore}) => {
  return (
    <Container maxWidth="md">
        {newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadmore <= newsResults && (
             <>
             <hr />
             <div className="centerbox">
             <button className='loadmore' onClick={()=>setLoadmore(loadmore+12)}>Load more </button>
             </div>
             </>
        )
        }
        
        
    </Container>
  )
}

export default NewsContent