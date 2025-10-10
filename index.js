const { App } = require('@slack/bolt');
const responses = require('./data/responses');

// change this to configVars if running locally
const PhoneshopBot = new App({
	token: process.env.SLACK_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	appToken: process.env.SLACK_APP_TOKEN,
	socketMode: true,
});

const TINGS_REGEXP = /(phone|iphone|mobile|handy|shop|contract|ashley|lance|jerwayne|janine|christopher|new man|newms|sutton|croydon|wagamamas)/ig;
const OWL_REGEXP = /owl/ig;
const HOUR_REGEXP = /hour/ig;
const BALLS_REGEXP = /(balls|bollocks|gonads|testicles)/ig;

const checkForOwl = (text) => {
	if (text) {
		return OWL_REGEXP.test(text);
	}
	return false;
};

const checkForHour = (text) => {
	if (text) {
		return HOUR_REGEXP.test(text);
	}
	return false;
};

const checkForTings = (text) => {
	if (text) {
		return TINGS_REGEXP.test(text);
	}
	return false;
};

const checkForBalls = (text) => {
	if (text) {
		return BALLS_REGEXP.test(text);
	}
	return false;
};

const getResponse = (type) => {
	const responsesOfType = responses()[type];
	const pluckResponse = Math.floor(Math.random() * responsesOfType.length);
	return responsesOfType[pluckResponse];
};

PhoneshopBot.message(async ({ message, say }) => {
	if (checkForOwl(message.text)) {
		const owlResponse = getResponse('owl');
		await say(owlResponse);
	}
	else if (checkForHour(message.text)) {
		const hourResponse = getResponse('hour');
		await say(hourResponse);
	}
	else if (checkForTings(message.text)) {
		const tingsResponse = getResponse('tings');
		await say(tingsResponse);
	}
	else if (checkForBalls(message.text)) {
		const ballsResponse = getResponse('balls');
		await say(ballsResponse);
	}
});



console.log('Starting PhoneshopBot...');
PhoneshopBot.start(3002);
