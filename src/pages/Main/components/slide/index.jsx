import Carousel from './components/carousel'
import Preview from './components/preview'

import './style.scss'

const Slide = ({ albums, isMobile }) => {
    return (
        <div id="slide--infinite" className={isMobile ? "slide--mobile" : ""}>
         <Carousel albums={ albums } isMobile={ isMobile }/>
         <Preview albums={ albums } isMobile={ isMobile }/>
        </div>
    )
}

export default Slide
