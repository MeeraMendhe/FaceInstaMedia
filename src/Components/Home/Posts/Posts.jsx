import React from 'react'
import Post from './Post/Post'
import './Posts.scss'

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: 'SMS',
      userId: 1,
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDjwLglfmaRz9xnZOu5D-lWeLoOUIGWfpGoP6bALI0EUWfi1AoFd0_R5my30rjXRY-JrY&usqp=CAU',
      desc:
        'A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon',
    },
    {
      id: 2,
      name: 'MM',
      userId: 2,
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
      profilePic:
        'https://res.cloudinary.com/interflora/f_auto,q_auto,t_blogimage/blogs/blue%20rose1569237015449.jpg',
      desc:
        'A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon',
    },
  ]
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}
