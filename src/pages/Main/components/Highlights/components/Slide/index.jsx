import Carousel from "./components/carousel"
import Preview from './components/preview'

import './style.scss'

const Slide = ({ albums }) => {
    return (
        <div className="slide_infinite">
            <Carousel albums={ albums }/>
            <Preview albums={ albums }/>
        </div>
    )
}

export default Slide
