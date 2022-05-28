import { useRef } from 'react'

import './style.scss'

const Preview = ({ albums, isMobile }) => {

    const albumSize = albums.length - 1,
        itens = [ albums[ albumSize ], ...albums.slice(0, albumSize ) ]

    const slideRef = useRef()

    let isNext = true
    let hasClick = true
    let time = 0

    const next = () => {
        const slide = slideRef.current

        slide.style.transform = `translate(${ isMobile ? "255px, 0px" : "0px, 183px" })`

        isNext = false
        time = 0
    }
    const before = () => {
        const slide = slideRef.current

        slide.style.transform = `translate(${ isMobile ? "-255px, 0px" : "0px, -183px"})`

        isNext = true
        time = 0
    }

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

    const handleTimeClick = func => {
        if( hasClick ) {
            func()
            
            hasClick = false

            setTimeout(() => {
                hasClick = true
            }, 1500)
        }
    }

    const imgs = itens.map( ({ image, title, id }) => {
        return <img src={ image } alt={ title } key={ id }/>
    })

    setInterval(() => {
        time += 1

        if( time === 5 ) {
            handleTimeClick( before )
        }
    }, 1500)

    return (
        <div id={ isMobile ? 'preview--mobile' : 'preview'} >
            <button onClick={ () => handleTimeClick( next ) } className="button--preview next--preview">{"<"}</button>
            <div id="slide--preview" ref={ slideRef } onTransitionEnd={ handleTransitionEnd }>
                { imgs.length > 0 ? imgs : null }
            </div>
            <button onClick={ () => handleTimeClick( before ) } className="button--preview before--preview">{isMobile ? ">" : "<"}</button>
        </div>
    )
}

export default Preview
