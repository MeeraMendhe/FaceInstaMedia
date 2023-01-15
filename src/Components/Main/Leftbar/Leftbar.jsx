import React from 'react'
import Friends from '../../../../src/Assets/1.png'
import Group from '../../../../src/Assets/2.png'
import Market from '../../../../src/Assets/3.png'
import Watch from '../../../../src/Assets/4.png'
import Memories from '../../../../src/Assets/5.png'
import Event from '../../../../src/Assets/6.png'
import Gaming from '../../../../src/Assets/7.png'
import Gallery from '../../../../src/Assets/img.png'
import Videos from '../../../../src/Assets/4.png'
import Messages from '../../../../src/Assets/10.png'
import Tutorials from '../../../../src/Assets/11.png'
import Courses from '../../../../src/Assets/12.png'
import Funds from '../../../../src/Assets/13.png'
import './Leftbar.scss'
const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://media.istockphoto.com/id/1314920164/photo/low-angle-shot-of-a-diverse-group-of-businesspeople-joining-their-heads-together-in-a-huddle.jpg?s=612x612&w=0&k=20&c=nm2X1TzmK-os8W4UZoa9IdVmEYEgQVgjjzFnlfF7AIQ="
              alt="profile pic of user"
            />
            <span>Meera Mendhe</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Group} alt="" />
            <span>Group</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Market Place</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
          <hr />
          <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
              <img src={Event} alt="" />
              <span>Event</span>
            </div>
            <div className="item">
              <img src={Gaming} alt="" />
              <span>Gaming</span>
            </div>
            <div className="item">
              <img src={Gallery} alt="" />
              <span>Gallery</span>
            </div>
            <div className="item">
              <img src={Videos} alt="" />
              <span>Videos</span>
            </div>
            <div className="item">
              <img src={Messages} alt="" />
              <span>Messages</span>
            </div>
          </div>
          <hr />
          <div className="menu">
            <span>Others</span>
            <div className="item">
              <img src={Tutorials} alt="" />
              <span>Tutorials</span>
            </div>
            <div className="item">
              <img src={Courses} alt="" />
              <span>Courses</span>
            </div>
            <div className="item">
              <img src={Funds} alt="" />
              <span>Funds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
