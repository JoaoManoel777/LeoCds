import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Title from '../Title'

import api from '../../../../services/api'

const Tops = () => {
  const [ tops, setTops ] = useState(false)

  const navigate = useNavigate()

  const handleClick = ( id ) => {
    navigate(`/album/${id}`)
  }
  const treatAlbum = ({ image, id, title }) => {
    return <img src={ image } alt={ title } onClick={ () => handleClick( id )}/>
  }

  if( !tops ) {
    api.getAlbumByType('tops')
      .then( ({ data }) => {
        setTops(data)
      })
  }

  return (
    <section className='all-widths piseiro-tops-section'>
          <Title text={'TOPS DO PISEIRO'} />
          <div id='container-imgs'>
            { tops.length > 0 ? tops.map( treatAlbum ) : null }
          </div>
    </section>
  )
}

export default Tops