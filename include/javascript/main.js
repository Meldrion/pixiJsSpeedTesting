/**
 * Created by fabien on 17.06.16.
 */

(function(){

    var application = require('app'),
        BrowserWindow = require('browser-window');

    application.on('ready', function() {

        var mainWindow = new BrowserWindow({width:800, height:600});
        mainWindow.loadUrl('file://' + __dirname + '/index.html');
        mainWindow.on('closed', function() {
            mainWindow = null;
        });

    });

})();