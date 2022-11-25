const {SlashCommandBuilder} =require('discord.js')



module.exports={
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Te respondi com Pong'),

    async execute(interaction){
        await interaction.reply('pong')
    }
}