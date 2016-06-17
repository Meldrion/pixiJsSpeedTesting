/**
 * Created by fabien on 17.06.16.
 */

//(function(){

    /*
    //var application = require('app'),
    //    BrowserWindow = require('browser-window');
    const application = require('electron')
    const BrowserWindow = require('electron')
    */



    const {app} = require('electron');
    const {BrowserWindow} = require('electron');



    app.on('ready', function () {

        var mainWindow = new BrowserWindow({width:800, height:600,icon: __dirname + '../../../resource/icon/ignis.png'});
        console.log('file://' + __dirname + '/index.html');
        mainWindow.loadURL('file://' + __dirname + '../../../index.html');
        app.on('window-all-closed', () => {
            app.quit();
        });
    });
    /*
    application.on('ready', function() {

        var mainWindow = new BrowserWindow({width:800, height:600});
        //mainWindow.loadUrl('file://' + __dirname + '/index.html');
        mainWindow.on('closed', function() {
            mainWindow = null;
        });

    });

})();*/