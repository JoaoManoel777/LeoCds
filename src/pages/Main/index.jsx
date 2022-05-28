import React from 'react'
import { useSelector } from 'react-redux'

import Background from './components/Background'
import Highlights from './components/Highlights'
import Instagram from './components/Instagram'
import NewCds from './components/NewCds'
import Recommended from './components/Recommended'
import Tops from './components/Tops'
import Slide from './components/slide'

import img1 from '../../assets/imgs/Img-1.jpg'
import img2 from '../../assets/imgs/Img-2.jpg'
import img3 from '../../assets/imgs/Img-3.jpg'

const Main = () => {
  const admin = useSelector( state => state.admin.data )
  
  return (
    <main id='main'>
      <Background />
      <Highlights />
      <Slide albums={[{
        image: img1,
        title: 'pastel',
        id: 2
      },
      {
        image: img2,
        title: 'pastel',
        id: 4
      },
      {
        image: img3,
        title: 'pastel',
        id: 3
      },]} isMobile={ true }/>
      <Tops />
      <Instagram />
      <Recommended />
      <NewCds />
    </main>
  )
}

export default Main