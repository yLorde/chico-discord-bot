const { SlashCommandBuilder, PermissionsBitField, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quantidade-de-chicos')
        .setDescription('Mostra os chicos do servidor')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    async execute(interaction) {
        try {
            const guild = interaction.guild;
            const chico = guild.roles.cache.find(role => role.id === process.env.CHICO_VERIFIED_ROLE_ID);

            interaction.reply({
                content: `No servidor possui um total de **${chico.members.size}** Chicos verificados`,
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