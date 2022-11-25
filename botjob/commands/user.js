const {SlashCommandBuilder} =require('discord.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Prover informação do usuário.'),
	async execute(interaction) {
	    await interaction.reply(`Este comando foi executado por ${interaction.user.username}, que entrou em ${interaction.member.joinedAt}.`);
	},
}