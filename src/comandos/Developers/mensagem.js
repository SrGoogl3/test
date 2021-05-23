const db = require('quick.db');
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
module.exports = {
  config: {
      name: "mensagem",
      aliases: ['mensagem', 'suporte', 'm'],
      description: "Enviar uma mensagem direta para a Equipe da Cleosan de forma privada.",
      example: "!mensagem",
      usage: '!mensagem <sua mensagem>',
	  usado: 'Todos os usuários.'
  },
  run: async (bot, message, args) => {
	  message.delete()
      if(!args[0]) return message.reply('você deve deixar a sua mensagem. Use: `!mensagem <Sua Mensagem>` para contatar diretamente a Equipe da Cleosan com privacidade total!').then(msg => {
                msg.delete({ timeout: 7000 });
            })
	let id2 = Math.floor((Math.random() * 9999) + 1000);		
	let mensagem = args.slice(0).join(" ")
	let usuario = message.member
	
	let embed_certeza = new Discord.MessageEmbed()
	.setAuthor(`${usuario.user.username}#${usuario.user.discriminator} (${usuario.id})`, usuario.user.displayAvatarURL())
	.setTitle('Você está prestes a enviar sua mensagem.')
	.setDescription('Veja se a sua mensagem está correta e reaja com o emoji <a:Reproduz:812805434548158524> para enviar.')
	.addField('Mensagem:', mensagem + '\n\n**[!]** *Iremos análisar a sua mensagem o mais breve possível. **Deixe o seu DM aberto** para que quando responder-mos a resposta ela seja enviada para você.*')
	.setFooter('Envio de Mensagens')
	.setColor('#f2f2f2')

	let embed = new Discord.MessageEmbed()
	.setAuthor(`${usuario.user.username}#${usuario.user.discriminator} (${usuario.id})`, usuario.user.displayAvatarURL())
	.setTitle('Sistema de Mensagens | Developers')
	.setDescription('Um usuário decidiu por contatar diretamente a equipe da Cleosan. Use `' + '!responder ' + id2 + ' <resposta>` para responder a esta mensagem.')
	.addField('Usuário', usuario)
	.addField('Mensagem', mensagem)
	.setFooter('#' + id2 + ' | Envio de Mensagens | Esta mensagem ainda não foi respondida.', 'https://cdn.discordapp.com/emojis/812805555055755285.gif?v=1')
	.setColor('#f2f2f2')
	
	var msg = await message.channel.send(embed_certeza)
	const emoji1 = ['812805434548158524', '812805555055755285'];
	
	msg.react('812805434548158524')
	msg.react('812805555055755285')      
        
            const collector = msg.createReactionCollector((r, u) => emoji1.includes(r.emoji.id) && u.id === message.author.id);
        
            collector.on('collect', (r, u) => {
                r.users.remove(message.author.id);
        
                switch (r.emoji.id) {
                    case "812805434548158524":
					start()
					async function start() {
				     let canal = message.guild.channels.cache.find(channel => channel.id === '817057611073323079');
					 
					 var teste = await canal.send(embed)
					 msg.delete()
					 usuario.send(`Olá <@${usuario.id}>, \n\nSua mensagem **#${id2}** foi enviada para a Equipe da Cleosan. Responderemos o mais breve possível. \n\n- Equipe de Suporte ao Usuário da Cleosan.`).catch(() => {
						 message.reply("Sua mensagem foi enviada, porém pedimos para que abra o seu **dm** durante o periódo para que a nossa resposta seja enviada.").then(msg => {
                msg.delete({ timeout: 7000 });
            })
					 })
					 db.set(`mensagem_${id2}`, `{
						 "author": "${message.author.id}",
						 "msg_id": "${teste.id}",
						 "mensagem": "${mensagem}"
					 }`)
					}

					break;
					case '812805555055755285':
					msg.delete()
			}})
}
}
