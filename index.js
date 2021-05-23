const { Client, Collection } = require('discord.js');
const Discord = require('discord.js');
const { Db } = require('mongodb');
const db = require('quick.db')
require("./ExtendedMessage");
let token = "NzQyNzI3MzQwOTQwOTg0MzIw.XzKUvQ.Neaqkx8Rd4n78K34OXT7_9B-TPw"
let prefix = "!"
const bot = new Discord.Client({
	partials: ["MESSAGE", "USER", "REACTION"],
	allowedMentions: {
        // set repliedUser value to `false` to turn off the mention by default
        repliedUser: true
    }
	});
["commands", "aliases"].forEach(x => bot[x] = new Collection());
["comandos", "eventos"].forEach(x => require(`./src/handlers/${x}`)(bot));

  bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    

})

bot.on('guildMemberAdd', async newMember => {
	if(newMember.guild.id === "765611824619192401"){
	} else return;
    let usuario = newMember
    let aleatorio = Math.floor((Math.random() * 8) + 1);
  let tentativas = 5
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('reCaptcha - 5 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
  .setTitle('Vamos ver se você não é um robô!')
  .addField('Digite quantos emojis wampus <:wampus:841304852364787712> tem a baixo', "Se suas tentativas acabarem você será kickado!", true)
  .setFooter('Você tem 2 minutos para isso!')
  .setColor('#97ff5b')
  .setThumbnail('https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
  if(aleatorio == 1) {
	  embed.setImage('https://i.imgur.com/rur22KH.png')
  }
    if(aleatorio == 2) {
	  embed.setImage('https://i.imgur.com/Uq6W5cK.png')
  }
    if(aleatorio == 3) {
	  embed.setImage('https://i.imgur.com/44RgZGf.png')
  }
    if(aleatorio == 4) {
	  embed.setImage('https://i.imgur.com/bvVcBS4.png')
  }
    if(aleatorio == 5) {
	  embed.setImage('https://i.imgur.com/HsqzOH5.png')
  }
    if(aleatorio == 6) {
	  embed.setImage('https://i.imgur.com/xeejie5.png')
  }
    if(aleatorio == 7) {
	  embed.setImage('https://i.imgur.com/AYqPEsm.png')
  }
      if(aleatorio == 8) {
	  embed.setImage('https://i.imgur.com/SeqRuFm.png')
  }
  let enviar = await usuario.send(embed)
  
  pergunta()
  function pergunta() {
	  if(tentativas == 5){
		  tentativas = tentativas - 1
          embed.setAuthor('reCaptcha - 5 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
		  			enviar.edit(embed)
   
			   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  					  .setThumbnail('https://i.imgur.com/GF7a4KX.png')
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  usuario.roles.add('770446296314019840')
					  usuario.roles.add('840747305195274241')
					  usuario.send(embed2)
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
					  return;
	  } 
	  
	  if(tentativas == 4){
		  tentativas = tentativas - 1
		  embed.setAuthor('reCaptcha - 4 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
		  embed.setColor('#ffdd5b')
		  		enviar.edit(embed)

		  	   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setThumbnail('https://i.imgur.com/GF7a4KX.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  
					  usuario.roles.add('812804325557403709')
					  usuario.roles.add('819073975959158784')
					  usuario.roles.add('812804324747903007')
					  usuario.send(embed2)
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
	   					  return;

	  }
	  
	  if(tentativas == 3){
		tentativas = tentativas - 1
		embed.setAuthor('reCaptcha - 3 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
				enviar.edit(embed)

			   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  usuario.roles.add('812804325557403709')
					  usuario.roles.add('819073975959158784')
					  usuario.roles.add('812804324747903007')
					  usuario.send(embed2)
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
	   					  return;

	  }
	  
	  if(tentativas == 2){
	    tentativas = tentativas - 1
		embed.setAuthor('reCaptcha - 2 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
		embed.setColor('#ff7f5b')
				enviar.edit(embed)

			   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  					  .setThumbnail('https://i.imgur.com/GF7a4KX.png')
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  usuario.roles.add('812804325557403709')
					  usuario.roles.add('819073975959158784')
					  usuario.roles.add('812804324747903007')
					  usuario.send(embed2)
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
	   					  return;

	  }
	  
	  if(tentativas == 1){
	    tentativas = tentativas - 1
		embed.setAuthor('reCaptcha - 1 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
		embed.setColor('#ff5b5b')
		enviar.edit(embed)
			   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  					  .setThumbnail('https://i.imgur.com/GF7a4KX.png')
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  usuario.roles.add('812804325557403709')
					  usuario.roles.add('819073975959158784')
					  usuario.roles.add('812804324747903007')
					  usuario.send(embed2)
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
	   					  return;

	  }
	  
	  if(tentativas == 0){
	    tentativas = 'acabou'
		embed.setAuthor('reCaptcha - 0 Tentativas', 'https://pbs.twimg.com/profile_images/566388455265931264/dVHQiE0t.png')
		embed.setColor('#ff5b5b')
		enviar.edit(embed)
			   usuario.createDM().then(dmchannel => {
  const pergunta2 = m => m.author.id == usuario.id
  const pergunta_02 = dmchannel.createMessageCollector(pergunta2, {max: 1, time: 240000 });
              pergunta_02.on('collect', m => {
				  if(m.content == aleatorio){
					  let embed2 = new Discord.MessageEmbed()
					  					  .setThumbnail('https://i.imgur.com/GF7a4KX.png')
					  .setAuthor('Verificado(a)!', 'https://emoji.gg/assets/emoji/6817_Discord_Verified.png')
					  .setTitle('O Servidor Foi Liberado Para Você!')
					  .setDescription('Aproveite o servidor! Veja a baixo alguns canais e informações importantes:')
					  .addField('Regras', 'Leia as Regras em: <#765611825320427582>.', true)
					  .addField('Canal de Anúncios', 'Veja os principais anúncios em: <#812804393949986847>', true)
					  .addField('Suporte', 'Contate o Suporte em: <#812804400833101885>', true)
					  .addField('Seja Staff da Cleosan!', 'Sendo um staff você pode até mesmo receber recompensas e pagamentos por seus trabalhos! \nSaiba mais em: <#812804396572213289>')
					  .setColor('#794ff8')
					  .setFooter('Registre-se para liberar mais canais e beneficios!')
					  
					  usuario.send(embed2)
					  usuario.roles.add('812804325557403709')
					  usuario.roles.add('819073975959158784')
					  usuario.roles.add('812804324747903007')
				  } else {
					  pergunta()
					  return;
				  }
			  })
	   })
	   					  return;
	  }
	  
	  if(tentativas === "acabou"){
		  usuario.kick()
		  return;
	  }

  }
})

bot.on('message', async message => {
		if(message.content.includes('<@')){

		}
	if(message.content.includes('<@')){
		let tudo = message.content
		let mensagem = message.content
		if(mensagem.includes('<@')){
		mensagem = mensagem.replace('<@', '')
		if(mensagem.includes('<@')){
		mensagem = mensagem.replace('<@', '')
		if(mensagem.includes('<@')){
			message.delete()
			let usuario = message.member
			let canal_logs = bot.channels.cache.find(channel => channel.id === '834741158810484768');
			
			usuario.roles.add('834741677986021397')
			let embed = new Discord.MessageEmbed()
			.setAuthor('Sistema de Segurança')
			.setTitle('Temporariamente Mutado(a) <:mutadoCLEO:812805608654110751> | Anti Mass Menções')
			.setDescription(`O sistema detectou que <@${message.author.id}> tentou marcar em massa.`)
			.addField('Usuário', message.member, true)
			.addField('Mutado Por', 'Console', true)
			.addField('Tempo', '15 Minuntos', true)
			.addField('Motivo', 'Anti Marcação em Massa', false)
			.addField('Mensagem', tudo, false)
			.setFooter('Caso seja cometido novamente este usuário será permanentemente suspenso.')
			.setColor('#f46246')
			
			let embed2 = new Discord.MessageEmbed()
			.setTitle('Temporariamente Mutado(a) <:mutadoCLEO:812805608654110751>')
			.setDescription(`<@${message.author.id}> foi temporariamente mutado por tentar marcar em massa. Se cometer denovo receberá banimento.`)
			.setColor('#f46246')
			.addField('Mutado Por', 'Console', true)
			.addField('Tempo', '15 Minutos')
			
			canal_logs.send(embed)
			let enviar = await message.channel.send(embed2)
			setTimeout(function(){ 
			enviar.delete()
			}, 5000);
			
			setTimeout(function(){ 
			usuario.roles.remove('834741677986021397')
			let embed3 = new Discord.MessageEmbed()
			.setTitle('Desmutado(a)')
			.setDescription(message.member + ' foi desmutado por **Console**.')
			.setColor('#85e667')
			canal_logs.send(embed3)
			
			}, 900000);

	}
	}
	}
	}
	if(message.channel.id === "827402236837363733"){
		message.react('819107748158898176')
		message.react('819107784486027294')
	}
	if(message.content.includes('discord.gg/') || message.content.includes('https://') || message.content.includes('dc.gg/')){
		if(message.member.roles.cache.has('812804278963535892') || message.member.roles.cache.has('812804282800799785')){
		}
		else {
			message.delete()
			 message.member.roles.add('834741677986021397');
         let embed = await message.reply('Divulgações são proibidas neste servidor! Caso continue, você será permanentemente banido do servidor.')
         let embed_logs = new Discord.MessageEmbed()
		 .setTitle('Usuário Mutado (a) | Cleosan Company')
		 .addField('Usuário', message.member, true)
		 .addField('Moderador', 'Console', true)
		 .addField('Motivo', 'Anti-Divulgações', false)
		 .addField('Tempo Mutado(a)', '15 Minutos', false)
		 .setThumbnail('https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/mute-icon-14-256.png')
		 .setColor('#f46246')
		 		 .setTimestamp()

		 
		 let canal = bot.channels.cache.find(channel => channel.id === ("834741158810484768"));
		 canal.send(embed_logs)
			setTimeout(() => {
         embed.delete()
       }, 15000);
	   setTimeout(() => {
        			 message.member.roles.remove('834741677986021397');
					          let embed_logs2 = new Discord.MessageEmbed()
		 .setTitle('Usuário Desmutado (a) | Cleosan Company')
		 .addField('Usuário', message.member, true)
		 .addField('Moderador', 'Console', true)
		 .setTimestamp()
		 .setThumbnail('https://iconsplace.com/wp-content/uploads/_icons/ff0000/256/png/mute-icon-14-256.png')
		 .setColor('##88ff6f')
		 channel.send(embed_logs2)
       }, 900000);
		}
	}
  if(message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


});


bot.login(token);
