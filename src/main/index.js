const{mainWindow}=require('./main')
const{app}=require('electron')

app.whenReady().then(mainWindow) 