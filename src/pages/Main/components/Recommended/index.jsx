import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Capa from '../../../../assets/imgs/Capa.jpg'

import api from '../../../../services/api'

const Recommended = () => {
  const [ recommendedCds, setRecommendedCds ] = useState(false)

  const navigate = useNavigate()

  if( !recommendedCds ) {
    api.getAlbumByType('recommendedCds')
      .then( ({ data }) => {
        setRecommendedCds(data)
      })
  }

  const handleClick = ( id ) => {
    navigate(`/album/${id}`)
  }

  const treatAlbum = ({ image, title, id }) => {
    return <img src={ Capa } alt="" onClick={ () => handleClick(id) }/>
  }
  
  return (
    <section className='all-widths recommended-cds-section'>
          <div id='recommended-cds'>
            { recommendedCds.length > 0 ? recommendedCds.map( treatAlbum ) : null }
          </div>
          <div id='youtube-channel'>
            <img src={ Capa } alt="" />
          </div>
    </section> )
}

export default Recommended