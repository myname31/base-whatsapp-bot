require('./config')
var {
    Client,
    CommandHandler
} = require('@nothKy/baileys');
var { Events } = require('@nothKy/baileys/dist/Constant')
var path = require('path');
//startClient
var conn = new Client({
    name: "NKY", //I don't know what this is for :v
    prefix: global.prefix,
    readIncommingMsg: true, //I don't know what this is for :v
    authDir: "./"+global.dirsesi, //DirSession, if you don't set this code, the default name is "./state"
    printQRInTerminal: true //printQrToTerminal
});
//readyToUse
conn.ev.once(Events.ClientReady, (m) => {
    console.log(`ready at ${m.user.id}`);
});
//QrReady
conn.ev.once(Events.QR, (qr) => {
    console.log("Qr ready, please scan to your WhatsApp!!!");
});
//plugins
var cmd = new CommandHandler(conn, path.resolve() + "/plugins");
cmd.load();
//launch
conn.launch();