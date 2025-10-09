const { App } = require('@slack/bolt');
const responses = require('./data/responses');

// change this to configVars if running locally
const PhoneshopBot = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
});

const IRONY_REGEXP = /(phone|iphone|mobile|handy|shop|contract|ashley|lance|jerwayne|sutton|croydon|owl|hour|wagamamas)/ig;

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

PhoneshopBot.message(async ({ message, say }) => {
	if (checkForIrony(message.text)) {
		// console.log('found IRONY');
		const tingsResponse = getResponse('tings');
		await say(tingsResponse);
	}
});



console.log('Starting PhoneshopBot...');
PhoneshopBot.start(3001);
