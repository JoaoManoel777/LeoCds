import { useRef } from 'react'

import './style.scss'

const Carousel = ({ albums, isMobile }) => {
    const slideRef = useRef()

    let isNext = true
    let hasClick = true
    let time = 0

    const next = () => {
        const slide = slideRef.current

        if( !isNext ) {
            slide.prepend( slide.lastElementChild )

            isNext = true
        }

        slide.style.justifyContent = 'flex-start'
        slide.style.transform = `translate(-500px)`

        time =0
    }
    const before = () => {
        const slide = slideRef.current

        if( isNext ) {
            slide.appendChild( slide.firstElementChild )
            isNext = false
        }

        slide.style.justifyContent = 'flex-end'
        slide.style.transform = `translate(500px)`

        time = 0
    }

    const handleTimeClick = func => {
        if( hasClick ) {
            func()

            hasClick = false

            setTimeout( () => {
                hasClick = true
            }, 1500 )
        }
    }

    const imgs = albums.map( ({ image, title, id }) => {
        return <img src={ image } alt={ title } key={ id }/>
    })

    const handleTransitionEnd = () => {
        const slide = slideRef.current

        if( isNext ) {
            slide.appendChild( slide.firstElementChild )
        }else {
            slide.prepend( slide.lastElementChild )
        }
    
        slide.style.transition = 'none'
        slide.style.transform = `translate(0)`
    
        setTimeout( () => {
            slide.style.transition = '1.5s ease-in-out all'
        }, 50)
    }

    setInterval( () => {
        time += 1

        if( time === 5 ) {
            handleTimeClick( next )
        }
    }, 1500)

    return (
        <div id="carousel">
            <button onClick={ () => handleTimeClick( before ) } className="button--carousel before">
                {"<"}
            </button>
            <div id="slide--carousel" ref={slideRef} onTransitionEnd={ handleTransitionEnd }>
                { imgs.length > 0 ? imgs : null }
            </div>
            <button onClick={ () => handleTimeClick( next ) } className="button--carousel next">
                {">"}
            </button>
        </div>
    )
}

export default Carousel
