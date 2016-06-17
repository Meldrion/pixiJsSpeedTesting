/**
 * Created by fabien on 17.06.16.
 */

const {app} = require('electron');
const {BrowserWindow} = require('electron');


app.on('ready', function () {

    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        icon: 'file://' +  __dirname + '../../../resource/icon/ignis.png'
    });
    mainWindow.loadURL('file://' + __dirname + '../../../index.html');
    app.on('window-all-closed', () => {
        app.quit();
    });
});
