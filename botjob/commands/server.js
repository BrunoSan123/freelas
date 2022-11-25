const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Prover informações do servidor.'),
	async execute(interaction) {
		await interaction.reply(`Este server é ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`);
	},
};
