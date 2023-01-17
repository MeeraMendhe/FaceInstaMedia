import React from 'react'
import './Home.scss'
import Posts from './Posts/Posts'
import Stories from './Stories/Stories'

const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}

export default Home
