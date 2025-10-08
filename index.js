const { App } = require('@slack/bolt');
const responses = require('./data/responses');

// change this to configVars if running locally
const AlanisBot = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
});

const IRONY_REGEXP = /(irony|ironic|alanis)/ig;

const checkForIrony = (text) => {
	if (text) {
		return IRONY_REGEXP.test(text);
	}
	return false;
};

const getResponse = (type) => {
	const responsesOfType = responses()[type];
	const pluckResponse = Math.floor(Math.random() * responsesOfType.length);
	return responsesOfType[pluckResponse];
};

AlanisBot.message(async ({ message, say }) => {
	if (checkForIrony(message.text)) {
		// console.log('found IRONY');
		const alanisResponse = getResponse('irony');
		await say(alanisResponse);
	}
});



console.log('Starting AlanisBot...');
AlanisBot.start(3001);
