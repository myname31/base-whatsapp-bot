var { delay } = require('baileys')
module.exports = {
    name: 'owner',
    aliases: ['owner', 'creator'],
    code: async (owner) => {
var vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:'+global.ownerName+'\n' // full name
            + 'ORG:By-myname31;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid='+global.owner+':'+global.ownerSplit+'\n' // WhatsApp ID + phone number
            + 'END:VCARD'
await owner.reply({ contacts: { displayName: global.ownerName, contacts: [{ vcard }] }});
await delay(1500)
owner.reply({ text: "Those are my owner's contacts!!" })
},
};