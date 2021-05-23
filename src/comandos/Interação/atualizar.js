const db = require('quick.db');
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
const url =
  "mongodb+srv://wyan:rahone13@cluster0.14di1.mongodb.net/cleosan?retryWrites=true&w=majority";

module.exports = {
  config: {
      name: "atualizar",
      aliases: ['atualizar'],
      description: "Atualizar o status de uma denúncia de usuário.",
      example: "!atualizar",
      usage: '!atualizar ID',
	  usado: 'Somente por Staffs da Cleosan.'
  },
  run: async (bot, message, args) => {
	  if(message.member.roles.cache.has('812804308029669407')){
	  } return message.delete();
	  if(!args[0]){
		  message.reply('Selecione algo a ser atualizado!')
		  return;
	  }
if(args[0] === "denuncia" || args[0] === "denúncia" || args[0] === "Denúncia" || args[0] === "Denuncia"){
	
} else {
	let msg = await message.channel.send('`' + args[0] + '` não é reconhecido como algo a ser atualizado!')
	setTimeout(() => {
          msg.delete()
         }, 7000);
	return;
}
if(args[0] === "denuncia" || args[0] === "denúncia" || args[0] === "Denúncia" || args[0] === "Denuncia"){
    if(message.channel.id === '821871537330192404') {

    } else {
        message.delete()
        let msg = await message.reply('Este não é o lugar para isso. Você deve atualizar denúncias em <#821871537330192404>.')
        setTimeout(() => {
          msg.delete()
         }, 7000);
        return;
    }
    let id = args[1]
    if(!id) return message.reply('Adicione o id da denúncia!')

    let db_denuncia = db.get(`denuncia_${id}`)
    console.log(db_denuncia + id) 
    if(db_denuncia === null) return message.reply('Este ID não existe!')
    var obj = JSON.parse(db_denuncia)

    if(obj.status === "negado finalizado") return message.reply('Esta denúncia já foi finalizada! Status: Está denúncia foi finalizada como negada!')
    if(obj.status === "aceito finalizado") return message.reply('Esta denúncia já foi finalizada! Status: Está denúncia foi finalizada como aceita!')
    message.delete()
    let embed = new Discord.MessageEmbed()
    .setAuthor(obj.author)
    .setTitle('Denúncia de Usuário | Cleosan Company')
    .setDescription('Reaja conforme a sua escolha. Lembre-se que caso for dado como finalizado, será impossivel reverter a ação!')
    .addField('Adicionar Status:', '<a:1_:812805916058976306> - Denúncia Aceita - Finalizada \n <a:2__cleosan:812805935893708830> - Denúncia Negada - Finalizada')
    .setFooter(id)
    .setColor('#FF4A05')

    let canal = message.guild.channels.cache.find(channel => channel.id === '821871537330192404');
    const msg = await message.channel.send(`<@${message.author.id}>`, embed);
      const emoji1 = ['812805916058976306', '812805935893708830'];                
      msg.react('812805916058976306');
      msg.react('812805935893708830');
  
  
      const collector = msg.createReactionCollector((r, u) => emoji1.includes(r.emoji.id) && u.id === message.author.id);
  
      collector.on('collect', (r, u) => {
          r.users.remove(message.author.id);
  
          switch (r.emoji.id) {
              case "812805916058976306": // emoji correto ====================

              db.set(`denuncia_${id}`, `{
                "author": "${obj.author}",
                "acusado": "${obj.acusado}",
                "motivo": "${obj.motivo}",
                "provas": "${obj.provas}",
                "horario": "${Date.now()}",
                "mensagem_id": "${obj.mensagem_id}",
                "status": "aceito finalizado"
              }`)

              console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa' + obj.mensagem_id)
              let embed1 = new Discord.MessageEmbed()
              .setAuthor('Denúncia Aceita - Finalizado', 'https://cdn.discordapp.com/emojis/804758190029275177.gif?v=1')
                .setTitle('Denuncia de Usuário | Cleosan Company')
                .addField('Author:', `<@${obj.author}>`, true)
                .addField('Moderador Responsável', message.member, true)
                .addField('Usuário Acusado(a)', `<@${obj.acusado}> (${obj.acusado})`)
                .addField('Provas Emitidas', obj.provas)
                .addField('Motivo da Denúncia', obj.motivo)
                .setThumbnail('https://i.imgur.com/II9wZrh.png')
                .setColor('#59de3d')
                .setFooter(id)

                msg.reactions.removeAll()
                msg.edit('A denúncia ' + id + ' foi dada como Aceita!')

                setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.delete()
                    }, 5000) // tempo em milessegundos

              canal.messages.fetch(obj.mensagem_id)
              .then(message => message.edit(embed1))
              .catch(console.error);
            
              break;
              case "812805935893708830":
                db.set(`denuncia_${id}`, `{
                    "author": "${obj.author}",
                    "acusado": "${obj.acusado}",
                    "motivo": "${obj.motivo}",
                    "provas": "${obj.provas}",
                    "horario": "${Date.now()}",
                    "mensagem_id": "${obj.mensagem_id}",
                    "status": "negado finalizado"
                  }`)
    
                  let embed2 = new Discord.MessageEmbed()
                  .setAuthor('Denúncia Negada - Finalizado', 'https://cdn.discordapp.com/emojis/812805555055755285.gif?v=1')
                    .setTitle('Denuncia de Usuário | Cleosan Company')
                    .addField('Author:', `<@${obj.author}>`, true)
                    .addField('Moderador Responsável', message.member, true)
                    .addField('Usuário Acusado(a)', `<@${obj.acusado}> (${obj.acusado})`)
                    .addField('Provas Emitidas', obj.provas)
                    .addField('Motivo da Denúncia', obj.motivo)
                    .setThumbnail('https://i.imgur.com/II9wZrh.png')
                    .setColor('#de3d3d')
                    .setFooter(id)

                    msg.reactions.removeAll()
                    msg.edit('A denúncia ' + id + ' foi dada como Finalizada!')
                    setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                        msg.delete()
                        }, 5000) // tempo em milessegundos
                  canal.messages.fetch(obj.mensagem_id)
                  .then(message => message.edit(embed2))
                  .catch(console.error);

          }
          })
}
}
}
