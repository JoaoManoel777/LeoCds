import React from 'react'
import Title from '../Title'
import Capa from '../../../../assets/imgs/Capa.jpg'

const Highlights = () => {
  return (
    <section className='all-widths highlights-section'>
          <Title text={'DESTAQUES'} />
          <div id='slide'>
            <div id='main-slide-img'>
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
            </div>
            <div id='slide-imgs'>
              <div id='img-container-1'>
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
              </div>
              <div id='img-container-2'>
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
                <img src={ Capa } alt="" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Highlights