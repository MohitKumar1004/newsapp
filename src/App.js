import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize=5
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress:0,
  }
  setProgress = (progress) => {
    this.setState({progress: progress});
  }
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress} 
          height={3}
          // onLoaderFinished={()=>setProgress(0)}
        />
        <Routes basepath="/newsapp">
          <Route exact path='/newsapp' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="home" category=""/>}/>
          <Route exact path='/newsapp/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" category="general"/>}/>
          <Route exact path='/newsapp/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" category="business"/>}/>
          <Route exact path='/newsapp/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" category="entertainment"/>}/>
          <Route exact path='/newsapp/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" category="health"/>}/>  
          <Route exact path='/newsapp/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" category="science"/>}/>
          <Route exact path='/newsapp/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" category="sports"/>}/>
          <Route exact path='/newsapp/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" category="technology"/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
