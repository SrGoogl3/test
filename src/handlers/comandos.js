const {
    readdirSync
} = require('fs');
const chalk = require('chalk')

module.exports = (client) => {

    const load = dirs => {
		
        const commands = readdirSync(`./src/comandos/${dirs}/`).filter(d => d.endsWith('.js'));
		readdirSync(`./src/comandos/${dirs}/`).filter(d => {
			d.endsWith('.js')
			console.log(chalk.yellow('[CONSOLE] > ') + chalk.green('Carregado: ') + d)
		})
        for (let file of commands) {
            const comando = require(`../comandos/${dirs}/${file}`);
            client.commands.set(comando.config.name, comando);

            if (comando.config.aliases) comando.config.aliases.forEach(a => client.aliases.set(a, comando.config.name));
        };
    };
    readdirSync(`./src/comandos/`).forEach(x => load(x));
}
