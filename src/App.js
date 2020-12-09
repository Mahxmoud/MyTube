import React from 'react'
import './App.css';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem'

class App extends React.Component {

  render() {
    return (
      <div className='wall'>
        <VideoItem/>
        <VideoList/>
      </div>
    )
  }
}

export default App;
