import { useRef } from 'react'

import "./style.scss"

const Carousel = ({ albums }) => {

    const slideRef = useRef()

    let isNext = true
    let time = 0
    let hasClick = true

    const handleAlbums = ({ image, title, id }) => {
        return <img src={image} alt={ title } key={ id } /> 
    }
    const handleTransitionEnd = () => {
        const slide = slideRef.current

        if( isNext ) {
            slide.appendChild( slide.firstElementChild )
        }else {
            slide.prepend( slide.lastElementChild )
        }

        slide.style.transition = 'none'
        slide.style.transform = "translate(0)"

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
        const slide = slideRef.current

        if( !isNext ) {
            slide.prepend( slide.lastElementChild )
        }

        slide.style.transform = `translate( -618px, 0px )`
        slide.style.justifyContent = "flex-start"

        isNext = true
        time = 0
    }
    const before = () => {
        const slide = slideRef.current

        if( isNext ) {
            slide.appendChild( slide.firstElementChild )
        }

        slide.style.transform = `translate( 618px, 0px )`
        slide.style.justifyContent = `flex-end`

        isNext = false
        time = 0
    }

    setInterval( () => {
        time++

        if( time === 5 ) {
            handleHasClick( next )
        }
    }, 1000)

    const images = albums.map( handleAlbums )
    return (
        <div className='carousel'>
            <button className="button_before--carousel" onClick={ () => handleHasClick(before) }>{"<"}</button>
            <div ref={ slideRef } className="slide--carousel" onTransitionEnd={ handleTransitionEnd }>
                { images }
            </div>
            <button className="button_next--carousel" onClick={ () => handleHasClick(next) }>{">"}</button>
        </div>
    )
}

export default Carousel
