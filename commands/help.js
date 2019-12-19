const Discord = require("discord.js");
const config = require("../storage/config.json");

module.exports = {
  name: "help",
  execute: async (message, args) => {
    var color = config.color;
    var prefix = config.prefix;

    let embed = new Discord.RichEmbed()
      .setColor(config.color)
      .setTitle(`        :tickets:\  Ticket Help Menu  :tickets:`)
      .addField(`Commands`, `**${prefix}new** » Opens a ticket`);

    if (
      message.member.roles.some(r =>
        ["Director", "Support Team", "Support Manager", "Dev"].includes(r.name)
      ) ||
      message.author.id === "260668078369538048"
    ) {
      embed.addField(
        `Support Team Commands`,
        `**${prefix}new @user** » Opens a ticket for the mentioned user \n**${prefix}rename** » Renames the ticket\n**${prefix}close** » closes the current ticket \n**${prefix}add @user #channel** » adds a user to the mentioned ticket`
      );
    }

    if (
      message.member.roles.some(r =>
        ["Support Manager", "Dev"].includes(r.name)
      ) ||
      message.author.id === "202563982349959168"
    ) {
      embed.addField(
        `Support Manager Commands`,
        `**${prefix}blacklist @user** » Bans a user from making tickets\n**${prefix}unblacklist @user** » Unbans a user from making tickets\n**${prefix}blacklisted** » See a list of blacklisted people from tickets\n**${prefix}pmove** » Moves to the Procced Category`
      );
    }

    return message.channel.send({ embed: embed });
  }
};
