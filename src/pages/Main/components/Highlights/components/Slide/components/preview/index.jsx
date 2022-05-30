import { useRef } from 'react'

import "./style.scss"

const Preview = ({ albums }) => {
    const slideRef = useRef()

    const lastItem = albums.length - 1,
        newAlbums = [ albums[ lastItem ], ...albums.slice( 0, lastItem )]

    let isNext = true
    let time = 0
    let hasClick = true
    let viewIsMobile = window.innerWidth <= 1024

    const handleAlbums = ({ image, title, id }) => {
        return <img src={ image } alt={ title } key={ id }/>
    }
    const handleTransitionEnd = () => {
        const slide = slideRef.current

        if( isNext ) {
            slide.prepend( slide.lastElementChild )
        }else {
            slide.appendChild( slide.firstElementChild )
        }

        slide.style.transition = 'none'
        slide.style.transform = 'translate(0)'

        setTimeout( () => {
            slide.style.transition = 'all ease-in-out 1s'

            hasClick = true
        })
    }
    const handleHasClick = func => {
        if( hasClick ) {
            func()

            hasClick = false
        }
    }

    const next = () => {
        const slide  = slideRef.current
        const styleImage = window.getComputedStyle(slide.firstElementChild)
        const imageSize = +(/(\d+)px/.exec(styleImage.width)[1]) + 20

        slide.style.transition = 'none'
        slide.style.top = viewIsMobile ? "0px" : '-185px'
        slide.style.justifyContent = viewIsMobile ? 'flex-end' : 'none'

        if( !isNext ) {
            slide.prepend( slide.lastElementChild )
        }
        
        setTimeout( () => {
            slide.style.transform = viewIsMobile ? `translate( ${imageSize}px, 0px)` : "translate( 0px, 185px)"
            slide.style.transition = 'all ease-in-out 1s'
        }, 5)

        isNext = true
        time = 0
    }
    const before = () => {
        const slide  = slideRef.current
        const styleImage = window.getComputedStyle(slide.firstElementChild)
        const imageSize = +(/(\d+)px/.exec(styleImage.width)[1]) + 20

        slide.style.top = '0px'
        slide.style.transition = 'none'
        slide.style.justifyContent = viewIsMobile ? 'flex-start' : 'none'

        if( isNext ) {
            slide.appendChild( slide.firstElementChild )
        }

        setTimeout( () => {
            slide.style.transform = viewIsMobile ? `translate( -${imageSize}px, 0px)` : 'translate( 0px, -185px)'
            slide.style.transition = 'all ease-in-out 1s'
        }, 5)

        isNext = false
        time = 0
    }

    setInterval( () => {
        time++

        if( time === 5 ) {
            handleHasClick( before )
        }
    }, 1000)

    const images = newAlbums.map( handleAlbums )
    return (
        <div className="preview">
            <button className={ viewIsMobile ? "button_before_mobile--preview" : "button_before--preview"} onClick={ () => handleHasClick(next) }>{"<"}</button>
            <div className="slide--preview" ref={ slideRef } onTransitionEnd={ handleTransitionEnd }>
                { images }
            </div>
            <button className={ viewIsMobile ? "button_next_mobile--preview" : "button_next--preview"} onClick={ () => handleHasClick(before) }>{">"}</button>
        </div>
    )
}

export default Preview
