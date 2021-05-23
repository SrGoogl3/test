const db = require('quick.db');
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
module.exports = {
  config: {
      name: "não_reproduz",
      aliases: ['não_reproduz', 'nao_reproduz'],
      description: "Dar um report de falha como não reproduz.",
      example: "!não_reproduz",
      usage: '!não_reproduz ID <comentário>',
	  usado: 'Staffs da Cleosan ou Caçadores de Bugs.'
  },
  run: async (bot, message, args) => {
	  if(message.member.roles.cache.has('812804308029669407') || message.member.roles.cache.has('812804319409340459')){
	  } else return message.delete()
	  
	  if(message.channel.id === "812804409599328327") {
  } else return message.reply('você deve fazer isso em <#812804409599328327>.').then(msg => {
                msg.delete({ timeout: 7000 });
            })
                let canal = message.guild.channels.cache.find(channel => channel.id === '812804409599328327');
	  
	  if(!args[0]){
		  		  message.delete()
		  message.reply('adicione o id do report!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return;
	  }
	  if(db.get(`report_${args[0]}`) === null){
		  		  message.delete()
		 message.reply('não existe nenhum report para o id `' + args[0] + '`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  if(!args[1]){
		  message.delete()
		  message.reply('digite o seu comentário. Exemplo: !não_reproduz 00000 Não reproduz na versão mais recente.').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return
	  }
	  
	  let database_report = JSON.parse(db.get(`report_${args[0]}`))
	  
	  if(database_report.negado === "false") {
	  } else {
		  		  message.delete()
		  message.reply('você não pode mais atualizar este report pois ele já foi finalizado como `negado`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  if(database_report.aprovado === "false"){
	  } else {
		  		  message.delete()
		  message.reply('você não pode mais atualizar este report pois ele já foi finalizado como `aprovado`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  
	  let usuario = message.guild.members.cache.get(database_report.author)
	  let descrição = database_report.descrição
	  let encontrado_em = database_report.encontrado_em
	  let passos = database_report.passos
	  let reproduz = database_report.reproduz
	  let não_reproduz = database_report.não_reproduz
	  let mensagem_id = database_report.mensagem_id
	  let aprovado = database_report.aprovado
	  let negado = database_report.negado
	  
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  if(reproduz.includes('linha')) reproduz = reproduz.replace('linha', '\n')
	  



	  if(não_reproduz == 'false') {
	  não_reproduz = não_reproduz = `<a:No_Reproduz_cleosan:812805555055755285> **${usuario.user.username}** | ${args.slice(1).join(" ")}`
	  } else {
		  não_reproduz = não_reproduz += `linha <a:No_Reproduz_cleosan:812805555055755285> **${usuario.user.username}** | ${args.slice(1).join(" ")}`
	  }
	  let db_tudo = `{
                  "author": "${usuario.id}",
                  "encontrado_em": "${encontrado_em}",
                  "passos": "${passos}",
                  "descrição": "${descrição}",
				  "reproduz": "${reproduz}",
				  "não_reproduz": "${não_reproduz}",
				  "aprovado": "${aprovado}",
				  "negado": "${negado}",
				  "mensagem_id": "${mensagem_id}"
                }`
  db.set(`report_${args[0]}`, db_tudo)
  
	  	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
	  	  if(não_reproduz.includes('linha')) não_reproduz = não_reproduz.replace('linha', '\n')
		  
	  let embed = new Discord.MessageEmbed()
	  .setAuthor(`${usuario.user.username}#${usuario.user.discriminator} (${usuario.id})`, usuario.user.displayAvatarURL())
      .setTitle(descrição)
      .addField('Encontrado em', encontrado_em, true)
      .addField('Passos Para Reproduzir', passos)
      .setColor('#3691c7')
      .setFooter('#' + args[0])
	  if(reproduz === "false"){
	  } else {
		  embed.addField('Reproduz', reproduz)
	  }
	  embed.addField('Não Reproduz', não_reproduz)
	 canal.messages.fetch(mensagem_id)
  .then(message => {
	  const mensagem = message;
  mensagem.edit(embed)
  });
  

  
  
  message.delete()
  message.reply('o report `' + args[0] + '` foi dado como **não reproduz**').then(msg => {
                msg.delete({ timeout: 7000 });
            })

	  
}
}
