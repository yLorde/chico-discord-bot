const { SlashCommandBuilder, PermissionsBitField, MessageFlags } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('detalhar-chicos')
        .setDescription('Mostra os chicos do servidor')
        .setDefaultMemberPermissions(PermissionsBitField.Flags.Administrator),
    async execute(interaction) {
        try {
            const guild = interaction.guild;
            const chico = guild.roles.cache.find(role => role.id === process.env.CHICO_VERIFIED_ROLE_ID);

            let message = "# Lista detalhada de Chicos: \n\n```";

            chico.members.map((member) => {
                message += `${member.nickname}\n`;
            });

            message += "```";

            interaction.reply({
                content: message,
            });

        } catch (err) {
            console.log(err);
            interaction.reply({
                content: 'Ocorreu um erro ao executar o comando',
                flags: MessageFlags.Ephemeral
            });
        };
    },
}