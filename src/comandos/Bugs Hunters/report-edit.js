const db = require('quick.db');
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
module.exports = {
  config: {
      name: "report-edit",
      aliases: ['report-edit', 'report-editar', 'editar-report', 'edit-report'],
      description: "Editar um report de falha.",
      example: "/report-edit",
      usage: '!report-edit ID passos/descrição/origem <novo texto>',
	  usado: 'Author do report ou Staffs da Cleosan.'
  },
  run: async (bot, message, args) => {
	  		  message.delete()
	  if(message.channel.id === "820832577353941054"){
	  } else {
		  message.reply('você deve fazer isso em <#820832577353941054>.').then(msg => {
                msg.delete({ timeout: 7000 });
	  })
	  	  return;
}
                let canal = message.guild.channels.cache.find(channel => channel.id === '812804409599328327');
	  
	  if(!args[0]){
		  message.reply('adicione o id do report!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return;
	  }
	  if(db.get(`report_${args[0]}`) === null){
		 message.reply('não existe nenhum report para o id `' + args[0] + '`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  	  let database_report = JSON.parse(db.get(`report_${args[0]}`))

	  if(database_report.author == message.author.id || message.member.roles.cache.has('812804308029669407')){
	  } else {
		  message.reply('este report só pode ser editado pelo author ou pela Equipe da Cleosan!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  let tipo;
	  if(!args[1]){
		  message.reply('digite o que deve ser editado. Use `!report-edit ID descrição/passos/origem <Novo texto>.`').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return
	  } else tipo = args[1]
	  
	  if(tipo === "passos" || tipo === 'origem' || tipo === "descrição"){
	  } else {
		  message.reply('`' + args[1] + '` não é reconhecido como algo a ser editado. Use `!report-edit ID descrição/passos/origem <Novo texto>.`').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return
	  }
	  
	  if(!args[2]) {
		  message.reply('você deve adicionar um novo texto. Use `!report-edit ID descrição/passos/origem <Novo texto>.`').then(msg => {
                msg.delete({ timeout: 7000 });
            })
		  return 
	  }
	  
	  
	  
	  if(database_report.negado === "false") {
	  } else {
		  message.reply('você não pode mais atualizar este report pois ele já foi finalizado como `negado`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  if(database_report.aprovado === "false"){
	  } else {
		  message.reply('você não pode mais atualizar este report pois ele já foi finalizado como `aprovado`!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  
	  if(database_report.reproduz === "false"){
	  } else {
		  message.reply('você não pode mais atualizar este report pois ele já foi atualizado pela Equipe da Cleosan.').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			return;
	  }
	  
	  if(database_report.não_reproduz === "false"){
	  } else {
		  message.reply('você não pode mais atualizar este report pois ele já foi atualizado pela Equipe da Cleosan.').then(msg => {
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

	  if(tipo === "passos") passos = args.slice(2).join(" ")
	  if(tipo === 'origem') encontrado_em = args.slice(2).join(" ")
	  if(tipo === "descrição") descrição = args.slice(2).join(" ")
	  
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

	  let embed = new Discord.MessageEmbed()
	  .setAuthor(`${usuario.user.username}#${usuario.user.discriminator} (${usuario.id})`, usuario.user.displayAvatarURL())
      .setTitle(descrição)
      .addField('Encontrado em', encontrado_em, true)
      .addField('Passos Para Reproduzir', passos)
      .setColor('#3691c7')
      .setFooter('#' + args[0])
	 canal.messages.fetch(mensagem_id)
  .then(message => {
	  const mensagem = message;
  mensagem.edit(embed)
  });
  

  
  
  message.delete()
  message.reply('o report `' + args[0] + '` foi atualizado!').then(msg => {
                msg.delete({ timeout: 7000 });
            })

	  
}
}
