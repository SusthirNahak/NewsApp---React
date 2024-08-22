
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios'
import api from './data/config'
import Footer from './components/Footer/Footer';

function App() {

const [category,setCategory] =useState("general");
const [newsArray,setNewsArray]=useState([]);
const [newsResults,setNewsResults]=useState();
const [loadmore,setLoadmore]=useState(12)

const newsapi = async ()=>{
  try{
   const news= await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}&category=${category}&pageSize=${loadmore}`);
    //console.log(news.data);
   setNewsArray(news.data.articles)
   setNewsResults(news.data.totalResults)
  }
  catch(error){
    console.log(error);
  }
}

useEffect (()=>{
  newsapi();
  
},[newsResults,category,loadmore])

  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
      <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={newsArray} newsResults={newsResults} />
      <Footer/>
    </div>
  );
}

export default App;
