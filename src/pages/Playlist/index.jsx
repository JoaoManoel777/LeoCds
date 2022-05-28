import React from 'react';

import cover from '../../assets/imgs/Capa.jpg';

import { song_list } from '../../components/context/song_list';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Playlist = () => {
  return (
    <>
        <section className='search-section all-widths'>
          <div className='search all-widths'>
              <span>Playlist</span>
          </div>
          <hr />
          <div className='album-container all-widths'>
        <div className='cover-img-container'>
          <img src={ cover } alt=''></img>
        </div>
        <div className='album-info'>
          <h2 className='album-title'>Trap Brasileiro 2K22</h2>
            <div className='album-size'>
              <span>Album Completo</span>
              <img src="" alt="" />
              <div className='album-megabytes'>90Mb</div>
            </div>
            <div className='artist-name'>
              <span>Matuê</span>
              <span>{ song_list.length } Músicas</span>
            </div>
        </div>
        </div>
          <hr />
          <div className='page-number'>
              
          </div>
      </section>
    </>
  )
}

export default Playlist