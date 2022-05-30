import React from 'react'

import Title from '../Title'
import Slide from './components/Slide'

import image1 from '../../../../assets/imgs/café.jpg'
import image2 from '../../../../assets/imgs/cafeitaria.jpg'
import image3 from '../../../../assets/imgs/hora_do_café.jpg'

const Highlights = () => {
  return (
    <section className='all-widths highlights-section'>
          <Title text={'DESTAQUES'} />
          <Slide albums={
            [
              {
                image: image1,
                title: 'undefined',
                id: 1
              },
              {
                image: image2,
                title: 'undefined',
                id: 2
              },
              {
                image: image3,
                title: 'undefined',
                id: 3
              }
            ]
          }/>
        </section>
  )
}

export default Highlights