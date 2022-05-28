import React from 'react'
import searchIcon from '../../assets/svg/Search.svg'

const Header = () => {
  return (
    <header>
        <div className='header-wallpaper'>
            <div className='container'>
                <div className='logo-container'>
                    <a href="/">
                        <span>LOGO</span>
                    </a>
                </div>
                <div className='search-container'>
                    <input type="search" />
                    <img src={ searchIcon } alt="" />
                </div>
            </div>
        </div>
        <div className='navigation-wallpaper'>
            <nav>
                <ul>
                    <li><a href="tops">Tops</a></li>
                    <li><a href="playlist">Playlist</a></li>
                    <li><a href="novo-cds">Novos cds</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header