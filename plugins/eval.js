module.exports = {
  name: ">",
  nonPrefixed: true,
  code: async (nky) => {
    if (nky.isOwner() == false) return
    if (nky.args.join(" ").length < 1) return nky.reply({text: `Masukan Text String`})
    try {
      var evaled = await eval(nky.args.join(" "));
      nky.reply({ text: require("util").inspect(evaled, { depth: 0 }) })
    } catch (err) {
      return nky.reply({ text: `${err}!` });
  }
 }
}