import {app, BrowserWindow, globalShortcut} from "electron"
import * as path from "path"
import * as url from "url"

let win: Electron.BrowserWindow
function createWindow() {
    win = new BrowserWindow({width: 800, height: 600})
    win.loadURL(url.format({
        pathname: path.join(__dirname, "./view/htmls/index.html"),
        protocol: "file:",
        slashes: true
    }))
    // win.webContents.openDevTools()
    win.on("closed", () => {
        win = null
    })
    globalShortcut.register('CommandOrControl+D', () => {
        if (win.webContents.isDevToolsOpened()) {
            win.webContents.closeDevTools()
        } else {
            win.webContents.openDevTools()
        }
    })
}

app.on("ready", createWindow)
app.on("window-all-closed", () => {
    if (process.platform != "darwin") {
        app.quit();
    }
})
app.on("activate", () => {
    if (win == null) {
        createWindow()
    }
})
app.on("will-quit", () => {
    globalShortcut.unregisterAll()
})
