import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
export default class App extends Component {
  pageSize=15
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes basepath="/newsapp">
          <Route exact path='/newsapp' element={<News pageSize={this.pageSize} key="home" category=""/>}/>
          <Route exact path='/newsapp/general' element={<News pageSize={this.pageSize} key="general" category="general"/>}/>
          <Route exact path='/newsapp/business' element={<News pageSize={this.pageSize} key="business" category="business"/>}/>
          <Route exact path='/newsapp/entertainment' element={<News pageSize={this.pageSize} key="entertainment" category="entertainment"/>}/>
          <Route exact path='/newsapp/health' element={<News pageSize={this.pageSize} key="health" category="health"/>}/>  
          <Route exact path='/newsapp/science' element={<News pageSize={this.pageSize} key="science" category="science"/>}/>
          <Route exact path='/newsapp/sports' element={<News pageSize={this.pageSize} key="sports" category="sports"/>}/>
          <Route exact path='/newsapp/technology' element={<News pageSize={this.pageSize} key="technology" category="technology"/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
