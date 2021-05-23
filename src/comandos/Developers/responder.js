const db = require('quick.db');
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
module.exports = {
  config: {
      name: "responder",
      aliases: ['responder'],
      description: "Responder a uma mensagem direta privada.",
      example: "!responder",
      usage: '!responder @usuario',
	  usado: 'Somente por Staffs da Cleosan.'
  },
  run: async (bot, message, args) => {
	  let canal = message.guild.channels.cache.find(channel => channel.id === '817057611073323079');
	  message.delete()
	  let id = args[0]
	  if(!id) return message.reply('você deve adicionar o **ID** da pergunta.' )
      if(!args[1]) return message.reply('você deve deixar a sua resposta. Use: `!resposta <Sua Resposta>` para responder a uma mensagem.').then(msg => {
                msg.delete({ timeout: 7000 });
            })
			
	if(db.get(`mensagem_${args[0]}`) === null) return message.reply('não foi encontrado nenhuma mensagem para o id `#' + id + '`. Isso pode ser motivado por: 1; O ID é inválido e não existe. 2; O pedido já foi respondido.').then(msg => {
                msg.delete({ timeout: 7000 });
            })
	
	let database = JSON.parse(db.get(`mensagem_${args[0]}`))
	console.log(database)
	let resposta = args.slice(1).join(" ")
	let usuario = message.guild.members.cache.get(database.author)
	
	message.reply('você respondeu á mensagem de <@' + usuario.id + '> com sucesso!').then(msg => {
                msg.delete({ timeout: 7000 });
            })

	let embed = new Discord.MessageEmbed()
	.setAuthor(`${usuario.user.username}#${usuario.user.discriminator} (${usuario.id})`, usuario.user.displayAvatarURL())
	.setTitle('Sistema de Mensagens | Developers')
	.setDescription('Um usuário decidiu por contatar diretamente a equipe da Cleosan. Use `' + '!responder ' + id + ' <resposta>` para responder a esta mensagem.')
	.addField('Usuário', usuario)
	.addField('Mensagem', database.mensagem)
	.setFooter('#' + id + ' | Envio de Mensagens | Esta mensagem já foi respondida por ' + message.author.username, 'https://cdn.discordapp.com/emojis/812805434548158524.gif?v=1')
	.setColor('#f2f2f2')
	
	let embed_usuario = new Discord.MessageEmbed()
	.setTitle('Sua mensagem #' + id +' foi respondida.')
	.addField('Resposta', resposta)
	.addField('Moderador', message.member)
	.setImage('https://media.discordapp.net/attachments/828076475113930763/828078383941681152/dev_00000.png?width=768&height=210')
		.setColor('#f2f2f2')
		
		usuario.send(embed_usuario)
	db.delete(`mensagem_${args[0]}`)
	
	canal.messages.fetch(database.msg_id)
  .then(message => {
	  const mensagem = message;
  mensagem.edit(embed)
  });
}
}
