var { Cooldown } = require('@nothKy/baileys')
module.exports = {
    name: "cek", //name cmd
    aliases: ["cek", "tes", "test"], //alias
    code: async (nky) => { //code
    //example cooldown cmd
        var cd = new Cooldown(nky, 5000); //5s maybe?
        if (cd.onCooldown) return nky.reply({ text: `slow down... wait ${cd.timeleft}ms` })
        /* I don't think it's suitable to add this
        cd.on("end", () => {
            nky.reply({ text: "cd timeout!, please use again..." });
        });
        */
        //
        nky.reply({ text: "On Cuy!" });
    },
};