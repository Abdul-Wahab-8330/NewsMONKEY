import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from 'react-router-dom';
// import from react loading bar
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 100;
  const [progress, setProgress] = useState(0);
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Routes>
          <Route exact path='/' element={<News  setProgress={setProgress} page_size={pageSize}  category="general" />} />
          <Route exact path='/business' element={<News  setProgress={setProgress} key='business' page_size={pageSize}  category="business" />} />
          <Route exact path='/entertainment' element={<News  setProgress={setProgress} key='entertainment' page_size={pageSize}  category="entertainment" />} />
          <Route exact path='/general' element={<News  setProgress={setProgress} key='general' page_size={pageSize}  category="general" />} />
          <Route exact path='/health' element={<News  setProgress={setProgress} key='health' page_size={pageSize}  category="health" />} />
          <Route exact path='/science' element={<News  setProgress={setProgress} key='science' page_size={pageSize}  category="science" />} />
          <Route exact path='/sports' element={<News  setProgress={setProgress} key='sports' page_size={pageSize}  category="sports" />} />
          <Route exact path='/technology' element={<News  setProgress={setProgress} key='technology' page_size={pageSize}  category="technology" />} />
        </Routes>
      </div>
    )
}

export default App