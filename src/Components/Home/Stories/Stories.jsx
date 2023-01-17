import React, { useContext } from 'react'
import './Stories.scss'
import { AuthContext } from '../../../Context/AuthContext'

export default function Stories() {
  const { currentUser } = useContext(AuthContext)
  //TEMP DATA
  const stories = [
    {
      name: 'Sanjay1',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      id: 1,
    },
    {
      name: 'Sanjay2',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      id: 2,
    },
    {
      name: 'Sanjay3',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      id: 3,
    },
    {
      name: 'Sanjay4',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      id: 4,
    },
  ]
  return (
    <div className="stories">
      <div className="story" key={currentUser.id}>
        <img src={currentUser.profile} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
