import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from '../../../../services/api'

import Title from '../Title'

const NewCds = () => {
  const [ mostDownloaded, setMostDownloaded ] = useState(false)
  const [ newCds, setNewCds ] = useState(false)

  const navigate = useNavigate()

  if( !mostDownloaded ) {
    api.getAlbumMostDownloaded()
      .then(
        ({ data }) => {
          setMostDownloaded( data )
        }
      )
  }

  if( !newCds ) {
    api.getAlbumByType( 'newCds' )
      .then(
        ({ data }) => {
          setNewCds( data )
        }
      )
  }

  const handleAlbum = id => {
    navigate(`/album/${id}`)
  }

  const treatAlbums = ({ image, title, id }) => {
    return (
     <div key={ id } className='itens' onClick={() => handleAlbum( id )}>
       <img src={ image } alt={ title } />
     </div>
    )
 }

  return (
    <section className='all-widths new-cds-section'>
          <div id='new-cds'>
            <Title text={'NOVOS CDS'} />
            <div className='container'>
              <div className='itens-contain'>
                { newCds.length > 0 ? newCds.map( treatAlbums ) : null}
              </div>
            </div>
          </div>
          <div id='most-downloaded'>
            <Title text={'MAIS BAIXADOS'} />
            <div className='container'>
              { mostDownloaded.length > 0 ? mostDownloaded.map( treatAlbums ) : null }
            </div>
          </div>
    </section>
  )
}

export default NewCds