var {
    Client,
    CommandHandler
} = require('@kazedevid/whasapi');
var { Events } = require('@kazedevid/whasapi/dist/Constant')
var path = require('path');
//startClient
var conn = new Client({
    name: "NKY", //I don't know what this is for :v
    prefix: "!", //haven't made all the prefix yet, if you have any suggestions, please let me know...
    readIncommingMsg: true, //I don't know what this is for :v
    authDir: "./session", //DirSession, if you don't set this code, the default name is "./state"
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