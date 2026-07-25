const { SlashCommandBuilder, PermissionFlagsBits, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quantidade-de-membros')
        .setDescription('Mostra os membros do servidor')
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
    async execute(interaction) {
        try {
            const guild = interaction.guild;

            interaction.reply({
                content: `No servidor possui um total de **${guild.members.cache.size}** Membros.`,
            });
        } catch (err) {
            console.log(err);
            interaction.reply({
                content: "Ocorreu um erro ao executar esse comando.",
                flags: MessageFlags.Ephemeral,
            });
        };
    },
};