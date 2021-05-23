
module.exports = async (bot, ready) => {

  console.log('Logado como ' + bot.user.tag);

  const status = [
    "dnd"
  ]

  const atividades = [
    [`Tropa da Cleosan`, "PLAYING"],
    [`MANUTENÇÃO TEMPORÁRIA`, "PLAYING"],
    [`Arquivos recém adicionados: não_reproduz, reproduz`, "PLAYING"],
    [`Versão 1.0.6 [STABLE]`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 4000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 2500)


}
