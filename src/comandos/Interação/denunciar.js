const db = require('quick.db')
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
const url =
  "mongodb+srv://wyan:rahone13@cluster0.14di1.mongodb.net/cleosan?retryWrites=true&w=majority";
module.exports = {
  config: {
      name: "denunciar",
      aliases: ['denunciar', 'denúnciar', 'Denunciar', 'Denúnciar'],
      description: "Denúnciar um usuário a Equipe da Cleosan.",
      example: "!denunciar",
      usage: '!denunciar',
	  usado: 'Todos os usuários.'
  },
  run: async (bot, message, args) => {
      if(message.channel.id === '812804400250093588') {

      } else {
          message.delete()
          let msg = await message.reply('Este não é o lugar para isso. Você deve fazer a sua denúncia em <#812804400250093588>.')
          setTimeout(() => {
            msg.delete()
           }, 7000);
          return;
      }
	  if(db.get(`fazendo_denuncia_${message.author.id}`) == true){
		  message.delete()
          let msg = await message.reply('Você deve concluir a sua atual denúncia para realizar outra!')
          setTimeout(() => {
            msg.delete()
           }, 7000);
          return;
	  }
	  db.set(`fazendo_denuncia_${message.author.id}`, true)
      let pagina = 1
      let inicio = false
      let terminou = false
      let id_final;
      let provas_final;
      let motivo_final;

      let id2 = Math.floor((Math.random() * 99999) + 10000);

      const usuario = message.member
      let inicio2 = new Discord.MessageEmbed()
      .setAuthor('Você está prestes a denúnciar um usuário!', 'https://i.imgur.com/4cY3GMB.png')
      .setTitle('Denuncia de Usuário | Cleosan Company')
      .setDescription('*Antes de iniciar a denúncia, tenha certeza que você possuí:* \n > **O ID do Usuário ou o @usuario.** \n > **Provas. Prints, Videos do Youtube/Imgur ou Imagens do Imgur.** \n > **Boas palavras e argumentos para ser colocado nos motivos.** ')
      .addField('Possuí tudo isso?', 'Reaja com o emoji <:correto:819107748158898176> para iniciar.')
      .setFooter('Você terá 2 minutos para concluir o seu relátorio de denúncia.')
      .setThumbnail('https://i.imgur.com/II9wZrh.png')
      .setColor('#FF4A05')
     
      let embed_sucesso = new Discord.MessageEmbed()
      .setTitle('A sua denúncia foi relatada. Aguarde')
      .setDescription('Aguarde  até que a equipe do servidor revise sua denúncia e tome as decisões cabiveis. \n')
      .addField('ID da Denúncia', `#${id2}`)
      .setFooter('Obrigado(a) pela denúncia!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/II9wZrh.png')

      let id = new Discord.MessageEmbed()
      .setTitle('Fase 1 | Identificando o Usuário.')
      .setDescription('> Envie o **ID** usuário acusado ou mencione-o.')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/II9wZrh.png')

      let provas = new Discord.MessageEmbed()
      .setTitle('Fase 2 | Obtendo Provas.')
      .setDescription('> Envie suas provas. Pode ser **Arquivo.png**, **Link de Imagem** ou **Link de Video**.')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/II9wZrh.png')

      let motivo = new Discord.MessageEmbed()
      .setTitle('Fase 3 | Diga-nos o Motivo.')
      .setDescription('> A parte mais importante! Envie o **motivo** da sua denúncia. Seja bom nas palavras!')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/II9wZrh.png')

      let error_404 = new Discord.MessageEmbed()
	  .setTitle('Error | 404')
	  .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#ff5938')
      .setThumbnail('https://i.imgur.com/7hJoqQ2.png')
	  
      const msg = await message.channel.send(`<@${message.author.id}>`, inicio2);
      const emoji1 = ['819107748158898176', '819107784486027294'];
      message.delete()

          setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
            if(inicio === false){
			msg.delete()
							db.set(`fazendo_denuncia_${message.author.id}`, false)
            usuario.send('A sua denúncia foi cancelada pelo sistema pelo motivo: Tempo para iniciar expirou! Tente novamente, más dessa vez seja mais rápido!')
            return;
            }
            }, 40000) // tempo em milessegundos

            setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                if(terminou === false){
					msg.delete()
									db.set(`fazendo_denuncia_${message.author.id}`, false)
                usuario.send('A sua denúncia foi cancelada pelo sistema pelo motivo: Tempo para terminar expirou! Tente novamente, más dessa vez seja mais rápido!')
                return;
                }
                },           120000) // tempo em milessegundos
                
      msg.react('819107748158898176');
  
  
      const collector = msg.createReactionCollector((r, u) => emoji1.includes(r.emoji.id) && u.id === message.author.id);
  
      collector.on('collect', (r, u) => {
          r.users.remove(message.author.id);
  
          switch (r.emoji.id) {
              case "819107748158898176": // emoji correto ====================
              if(pagina === 2){
				  let usuario_acusado = message.guild.members.cache.get(id_final)
                let embed_canal_enviar = new Discord.MessageEmbed()
                .setAuthor('Em Ánalise', 'https://cdn.discordapp.com/emojis/790231351508860928.png?v=1')
                .setTitle('Denúncia de Usuário | Cleosan Company')
                .addField('Author:', message.member, true)
                .addField('Usuário Acusado(a)', `${usuario_acusado} (${usuario_acusado.id})`)
                .addField('Provas Emitidas', provas_final)
                .addField('Motivo da Denúncia', motivo_final)
                .setThumbnail('https://i.imgur.com/II9wZrh.png')
                .setColor('#FF4A05')
                .setFooter('#' + id2)

                terminou = true
                msg.reactions.removeAll()
                msg.edit(embed_sucesso)
                let canal = message.guild.channels.cache.find(channel => channel.id === '821871537330192404');
                const start1 = async function(denuncia_id) {
                let enviar = await canal.send(embed_canal_enviar)
                db.set(`denuncia_${denuncia_id}`, `{
                  "author": "${message.author.id}",
                  "acusado": "${id_final}",
                  "motivo": "${motivo_final}",
                  "provas": "${provas_final}",
                  "horario": "${Date.now()}",
                  "mensagem_id": "${enviar.id}",
                  "status": "em análise"
                }`)
				db.set(`fazendo_denuncia_${message.author.id}`, false)
                }
                start1(id2)
                setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.delete()
                    
                    },           12000) // tempo em milessegundos
              }
              if(pagina === 1){
                msg.reactions.removeAll()
                inicio = true
                msg.edit(id)
                
              pegar_id()
			  function pegar_id() {
				  const filter0 = m => m.author.id == message.author.id
              const collector0 = message.channel.createMessageCollector(filter0, {max: 1, time: 120000 });
              collector0.on('collect', m => {
				  if(!m.mentions.members.first()){
					  if(!m.guild.members.cache.get(m.content)){
						  m.delete()
				    error_404.setDescription('`' + m.content + '` não foi reconhecido como o de um usuário no servidor. Você pode mencionar o usuário ou útilizar o seu id')
					msg.edit(error_404)
					setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.edit(id)
					pegar_id()
                    },           5000) // tempo em milessegundos
					return
					  }
				}
				if(m.mentions.members.first()){
					let rola = m.mentions.members.first().id
					rola = rola.replace('<@', '')
										rola = rola.replace('>', '')
					id_final = rola
				} else {
					let rola = m.mentions.members.first().id
					rola = rola.replace('<@', '')
										rola = rola.replace('>', '')
					id_final = rola
				}
                m.delete()
                msg.edit(provas)

               
				pegar_imagem()
				function pegar_imagem() {
					console.log(id_final)
					const filter = m => m.author.id == message.author.id // filtro 2 ======= PROVAS
                const collector = message.channel.createMessageCollector(filter, {max: 1, time: 120000 });
                collector.on('collect', m => {
			     if(m.content.includes('https://')){
					 if(m.content.includes('youtube') || m.content.includes('imgur')){
						 provas_final = m.content
					 } else {
						 					 m.delete()
						 let embed_error = new Discord.MessageEmbed()
						 .setTitle('Error | Plataforma não aceita.')
						 .setDescription('Seu Video/Print deve ser hospedado em: Youtube, Imgur ou jogado aqui no chat!.')
						 .setThumbnail('https://i.imgur.com/FbnONZP.png')
						 .setFooter('Você tem 2 minutos para isso.')
						 .setColor('#ff5938')
						 msg.edit(embed_error)
						 setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.edit(provas)
					pegar_imagem()
                    },           5000) // tempo em milessegundos
										return;
					 }
				 } else {
				 if(m.attachments.size > 0){
				 } else {
					 m.delete()
					 let embed_error = new Discord.MessageEmbed()
						 .setTitle('Error | Plataforma não aceita.')
						 .setDescription('Seu Video/Print deve ser hospedado em: Youtube, Imgur ou jogado aqui no chat!.')
						 .setThumbnail('https://i.imgur.com/FbnONZP.png')
						 .setFooter('Você tem 2 minutos para isso.')
						 .setColor('#ff5938')
						 msg.edit(embed_error)
						 setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.edit(provas)
					pegar_imagem()
                    },           5000) // tempo em milessegundos
										return;

					
				 }
				 }
				 if(m.attachments.size > 0){
                    m.attachments.forEach(Attachment => {
                       let url = Attachment.url

                           const start = async function(url1) {
                            const attachment = new Discord.MessageAttachment(url);
                            let canal1 = message.guild.channels.cache.find(channel => channel.id === '821914855358726165');
                            let msge = await canal1.send(attachment);
                            msge.attachments.forEach(Attachment1 => {
                                provas_final = Attachment1.url
                            })
                           }
                           start(url)
                      
                    })
                  }
                  setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    m.delete()
                    
                    },           2000) // tempo em milessegundos
              
                  msg.edit(motivo)
                  
                  const filter = m => m.author.id == message.author.id // filtro 2 ======= PROVAS
                  const collector = message.channel.createMessageCollector(filter, {max: 1, time: 120000 });
                  
                  collector.on('collect', m => {
                    motivo_final = m.content
                    m.delete()
				  let usuario_acusado = message.guild.members.cache.get(id_final)

                    let embed_correto = new Discord.MessageEmbed()
                    .setTitle('Tudo Pronto! | Vamos revisar a sua denúncia.')
                    .setDescription('Veja a baixo tudo o que você nos forneceu para está denúncia.')
                    .addField('Usuário Acusado(a)', `${usuario_acusado} (${usuario_acusado.id})`)
                    .addField('Provas Emitidas', provas_final, false)
                    .addField('Motivo da Denúncia', motivo_final, false)
                    .addField('Está tudo certo?', 'Caso a sua denúncia esteja correta, reaja com <:correto:819107748158898176>, caso contrário, use <:errado:819107784486027294>.')
                    .setColor('#FF4A05')
                    .setThumbnail('https://i.imgur.com/II9wZrh.png')
                    msg.edit(embed_correto)
                    msg.react('819107748158898176');
                    msg.react('819107784486027294');

                    pagina = 2;
                  });

                });
			  }
              });
		  }}

              break;
              case "819107784486027294":
                  if(pagina === 2 ){
                      pagina = 1
                      msg.edit(inicio2)
                      msg.reactions.cache.get('819107784486027294').remove()
                  }

    }
})
}
}
