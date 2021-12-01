import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';

loadableReady(()=>{ReactDom.hydrate(
<BrowserRouter>
<App/>
</BrowserRouter>
,document.getElementById('root'))
});