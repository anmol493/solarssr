import React from 'react';
import { renderRoutes } from 'react-router-config';
import routes from '../../routes'
import GlobalStyle from '../styled/globalStyle';

const App=()=>{
    return(
        <>
            <GlobalStyle />
            {renderRoutes(routes)}
        </>
    )
}

export default App;