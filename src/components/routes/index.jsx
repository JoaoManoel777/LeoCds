import {
    Routes,
    Route
} from 'react-router-dom'

import Main from '../../pages/Main'
import Tops from '../../pages/Tops'
import NewCds from '../../pages/New_Cds'
import Search from '../../pages/Search'
import Login from '../../pages/Login'
import Playlist from '../../pages/Playlist'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Main />}/>
            <Route path="/tops" element={<Tops />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/novo-cds" element={<NewCds />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/playlist" element={<Playlist />}/>
        </Routes>
    )
}

export default MainRoutes
