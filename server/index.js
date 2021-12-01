import express from 'express';
import App from '../client/component/app';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router';
import { ChunkExtractor } from '@loadable/server';
import path  from 'path';
const app=express();
const statsFile = path.resolve('build/client/loadable-stats-dev.json');
const extractor = new ChunkExtractor({ statsFile });
app.use(express.static('build/client'));
app.get('*',(req,res)=>{
   const sheet = new ServerStyleSheet()
    const component=renderToString(extractor.collectChunks(sheet.collectStyles(<StaticRouter context={{}} location={req.path}><App/></StaticRouter>)));
    //const component=renderToString(sheet.collectStyles(<StaticRouter context={{}} location={req.path}><App/></StaticRouter>));
    const script=extractor.getScriptTags().replace(/async/g, 'defer');
    console.log(script)
    // console.log(script);
    const styles = sheet.getStyleTags()
    // console.log(styles)
    const html=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        ${styles}
    </head>
    <body>
        <div id="root">${component}<div>
    </body>
    ${script}
    </html>
`
    res.send(html);
})
// <script src="bundle.js"></script>
app.listen(3000,()=>{
    console.log("server started!!");
})