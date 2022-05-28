import { createStore  } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers'

const store = createStore(reducers)

const MainComponent = ({ children }) => {
    return (
        <Provider store={ store }>
            {children}
        </Provider>
    )
}

export default MainComponent
