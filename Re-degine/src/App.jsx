import { useEffect, useState } from 'react'
// import { NewsAppContext } from './store/news-app-store'
import './App.css'
import LatestNews from './components/LatestNews'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {

 const [articles, setArticles] = useState([])

 async function getNews(news) {
  const response = await fetch(
    `${import.meta.env.VITE_APP_URL}${news}&apiKey=${
      import.meta.env.VITE_APP_API_KEY
    }`
  );
  const data = await response.json();   
  setArticles(data.articles)
  
  }
  
useEffect(() =>{
  getNews('India');
},[])


  return (
    <>
      <Navbar/>
      <LatestNews/>
      <News articles={articles}/>
      </> 
  )
}

export default App
