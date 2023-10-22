import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default function App() {
  const pageSize=6
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress,setProgress]=useState(0)
  return (
    <BrowserRouter>
      <Navbar/>
      <LoadingBar
        color="#f11946"
        progress={progress} 
        height={3}
        // onLoaderFinished={()=>setProgress(0)}
      />
      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="home" category=""/>}/>
        <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" category="general"/>}/>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" category="business"/>}/>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" category="entertainment"/>}/>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" category="health"/>}/>  
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" category="science"/>}/>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" category="sports"/>}/>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" category="technology"/>}/>
      </Routes>
    </BrowserRouter>
  )
}
