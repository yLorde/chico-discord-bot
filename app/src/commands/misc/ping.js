const { SlashCommandBuilder, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!'),
    async execute(interaction) {
        try {
            interaction.reply({
                content: "Pong!",
                flags: MessageFlags.Ephemeral
            });
        } catch (err) {
            console.log(err);
            interaction.reply({
                content: 'Ocorreu um erro ao executar o comando',
                flags: MessageFlags.Ephemeral
            });
        };
    },
};