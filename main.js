'use strict'

const electron = require( 'electron' );
const { app, BrowserWindow } = electron;
const ipc = require( 'electron' ).ipc;

const path = require( 'path' );
const url = require( 'url' );

console.log( "main here yo!" );

let win = null;

app.on( 'ready', () => {
    let win = new BrowserWindow( {
        width: 1500,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    } );
    win.loadURL( `file://${__dirname}/index.html` );
    //  win.openDevTools();

    let contents = win.webContents

    win.on( 'closed', () => {
        console.log( "closing" );
        win = null;
    } );
} );

let onlineStatusWindow

exports.openWindow = () => {
    let win = new BrowserWindow( { width: 900, height: 800 } )
    win.loadURL( `file://${__dirname}/public/profile.html` );
    //  win.openDevTools();

};


app.on( 'window-all-closed', function () {
    app.quit()
    console.log( 'ciao' );
} );
