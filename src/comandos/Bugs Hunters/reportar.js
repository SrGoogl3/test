const db = require('quick.db')
const Discord = require('discord.js');
// Replace the uri string with your MongoDB deployment's connection string.
const url =
  "mongodb+srv://wyan:rahone13@cluster0.14di1.mongodb.net/cleosan?retryWrites=true&w=majority";
module.exports = {
  config: {
      name: "reportar",
      aliases: ['reportar', 'report'],
      description: "Reportar uma falha em um de nossos produtos.",
      example: "!reportar",
      usage: '!reportar',
	  usado: 'Todos os usuários.'
  },
  run: async (bot, message, args) => {
	  				db.set(`fazendo_report_${message.author.id}`, false)
      if(message.channel.id === '820832577353941054') {

      } else {
          message.delete()
          let msg = await message.reply('Este não é o lugar para isso. Você deve reportar falhas em <#820832577353941054>.')
          setTimeout(() => {
            msg.delete()
           }, 7000);
          return;
      }
	  if(db.get(`fazendo_report_${message.author.id}`) == true){
		  message.delete()
          let msg = await message.reply('Você deve concluir o seu atual report de falha para realizar outra!')
          setTimeout(() => {
            msg.delete()
           }, 7000);
          return;
	  }
	  db.set(`fazendo_report_${message.author.id}`, true)
      let pagina = 1
      let inicio = false
      let terminou = false
      let id_final;
      let provas_final;
      let motivo_final;

      let id2 = Math.floor((Math.random() * 99999) + 10000);

      const usuario = message.member
      let inicio2 = new Discord.MessageEmbed()
      .setAuthor('Você está prestes a reportar uma falha!', 'https://i.imgur.com/4cY3GMB.png')
      .setTitle('Report de Falhas | Cleosan Company')
      .setDescription('*Antes de iniciar o seu report, tenha certeza que:* \n > **Se trata realmente de uma falha.** \n > **Se esta falha já não foi reportada em <#812804409599328327>.**')
      .addField('Tudo pronto?', 'Reaja com o emoji <:correto:819107748158898176> para iniciar.')
      .setFooter('Você terá 2 minutos para concluir o seu relátorio de falha.')
      .setThumbnail('https://i.imgur.com/Atyy9vG.png')
      .setColor('#FF4A05')
     
      let embed_sucesso = new Discord.MessageEmbed()
      .setTitle('O seu report de falha foi relatado. Aguarde')
      .setDescription('A equipe do servidor irá análisar em breve... \n')
      .addField('ID do Report', `#${id2}`)
	  .addField('Editando o Report', `Para editar a descrição, use **!report-edit ID descrição <Novo texto>**
	  Para editar aonde foi encontrado, use **!report-edit ID origem <Novo texto>**
	  Para editar os passos, use **!report-edit ID passos <Novo texto>**`)
      .setFooter('Obrigado(a) por seu report!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/Atyy9vG.png')

      let id = new Discord.MessageEmbed()
      .setTitle('Fase 1 | Identificando a Falha.')
      .setDescription('> Descreva exatamente como é esta falha.')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/Atyy9vG.png')

      let provas = new Discord.MessageEmbed()
      .setTitle('Fase 2 | Reproduzindo a Falha.')
      .setDescription('> Explique detalhadamente os passos para se **reproduz** a falha encontrada.')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/Atyy9vG.png')

      let motivo = new Discord.MessageEmbed()
      .setTitle('Fase 3 | Identificando o Produto.')
      .setDescription('> Em qual produto nosso você encontrou a falha? Bot, Comando de TempoCall/outro?')
      .setFooter('Não se esqueça que você tem 2 minutos para concluir!')
      .setColor('#FF4A05')
      .setThumbnail('https://i.imgur.com/Atyy9vG.png')

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
							db.set(`fazendo_report_${message.author.id}`, false)
            usuario.send('O seu report de falha foi cancelado pelo sistema pelo motivo: Tempo para iniciar expirou! Tente novamente, más dessa vez seja mais rápido!')
            return;
            }
            }, 40000) // tempo em milessegundos
            setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                if(terminou === false){
					msg.delete()
									db.set(`fazendo_report_${message.author.id}`, false)
                usuario.send('O seu report de falha foi cancelado pelo sistema pelo motivo: Tempo para terminar expirou! Tente novamente, más dessa vez seja mais rápido!')
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
                let embed_canal_enviar = new Discord.MessageEmbed()
                .setAuthor(`${message.author.username}#${message.author.discriminator} (${message.author.id})`, usuario.user.displayAvatarURL())
                .setTitle(id_final)
                .addField('Encontrado em', motivo_final, true)
                .addField('Passos Para Reproduzir', provas_final)
                .setThumbnail('https://i.imgur.com/Atyy9vG.png')
                .setColor('#FF4A05')
                .setFooter('#' + id2)

                terminou = true
                msg.reactions.removeAll()
                msg.edit(embed_sucesso)
				usuario.send(embed_sucesso)
                let canal = message.guild.channels.cache.find(channel => channel.id === '812804409599328327');
                const start1 = async function(denuncia_id) {
                let enviar = await canal.send(embed_canal_enviar)
				let db_tudo = `{
                  "author": "${message.author.id}",
                  "encontrado_em": "${motivo_final}",
                  "passos": "${provas_final}",
                  "descrição": "${id_final}",
				  "reproduz": "false",
				  "não_reproduz": "false",
				  "aprovado": "false",
				  "negado": "false",
				  "mensagem_id": "${enviar.id}"
                }`
                db.set(`report_${denuncia_id}`, db_tudo)
				db.set(`fazendo_report_${message.author.id}`, false)
                }
                start1(id2)
                setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                    msg.delete()
                    
                    },           18000) // tempo em milessegundos
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
                id_final = m				  
                m.delete()
                msg.edit(provas)

               
				pegar_imagem()
				function pegar_imagem() {
					const filter = m => m.author.id == message.author.id // filtro 2 ======= PROVAS
                const collector = message.channel.createMessageCollector(filter, {max: 1, time: 120000 });
                collector.on('collect', m => { 
                 provas_final = m
                 m.delete()
                  msg.edit(motivo)
                  
                  const filter = m => m.author.id == message.author.id // filtro 2 ======= PROVAS
                  const collector = message.channel.createMessageCollector(filter, {max: 1, time: 120000 });
                  
                  collector.on('collect', m => {
                    motivo_final = m.content
                    m.delete()

                    let embed_correto = new Discord.MessageEmbed()
                    .setTitle('Tudo Pronto! | Vamos revisar o seu relátorio.')
                    .setDescription('Veja a baixo tudo o que você nos forneceu para este report.')
                    .addField('Descrição da falha', id_final)
                .addField('Encontrado em', motivo_final, true)
                .addField('Passos Para Reproduzir', provas_final)
                    .addField('Está tudo certo?', 'Caso a sua falha esteja correta, reaja com <:correto:819107748158898176>, caso contrário, use <:errado:819107784486027294>.')
                    .setColor('#FF4A05')
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
