const tingsResponse = [
  'Yes, blud. Manaman’s a wagamama man every day.',
  'A owl!',
  'A hour!',
  'Do you like the films of Jude Law?',
  'You go tell Dr Dre dat, man will fuck you up innit!',
  'Oh my giddy giddy gosh!',
  'Fuck off Nan. Go on, do one',
  'Nose bone up in your brain and shit',
  'Welcome to Club Cheddar',
  'Gentlemens! Welcome to the Elite Selling Crew!',
  'Cos this shit be paaaaaatent',
  'We don’t run on the high street. We run the high street.',
  'If man say him a ting, then him a ting',
  'Man’s operating on less money than Kerry Katona right now',
  'Senseless waste',
  'Grease up ma dry foot with da caw caw butta',
  'French Connecky Becky',
  'Do you know why Claire’s Accessories dropped the accessories?',
  'Very, very naughty gear.',
  'Look at me! Look at me! DONT LOOK AT ME!',
  'Apple don’t grapple the Mapple rudeboy',
  'A fire, a fight or a pregnancy before 10.00pm or your money back.',
  'Anyone for a White Malcolm?',
  'Expect the unexpected',
  'Keep it on the keep it on the keep it on the looooowwwwww',
  'Mi wan tya-bal, fer tree.',
  'Chicken and tits fer 3 quid!',
  'When you buy a 30 grand car for 3 grand there’s gonna be trouble',
  'I once saw a dog knock over a whole jug of apple tango with his erection.\nI’ve not genuinely enjoyed a picnic since.',
  'That’s why they call man Lance, innit',
  'Hold tight for the rewind no hats no trainers!',
  'OH my DAYS! Is that sangwidges?',
  'Bruv, Man’s on a value ting here, yeah. I’m tasting the difference in reverse.',
  'What? You ain’t getting your tings?',
  'Anybody made a joke about being a new man yet? Na? I’ll take a slice of that action.',
  'Mmmm ...malty',
  'Is she high street?',
  'He’s so jealous, he once blinded a man outside QFC with a side of barbeque beans.',
  'Is that Ross Kemp weeing on people in a skip?\nHe only wets on the bad gangs, Christopher.',
  'Yeah. I’m smashing that all over the fucking shop. As well as smashing others all over other shops all the fucking time.',
  'What? Black man Graham?',
  'If the girl has to wear a polo shirt to work, no matter how fit she is, I can’t move to that.',
  'WHAT? I’m a complex man.',
  'NEVER point your fist at a black man, I’m ashamed of you!',
  'Do the moosic.',
];

const owlResponse = [
  'A owl?',
  'A owl!',
  'A OWL??',
  'A OWL!!',
];

const hourResponse = [
  'A hour?',
  'A hour!',
  'A HOUR??',
  'A HOUR!!',
];

const ballsResponse = [
  'RAZZ PRINCE AIN’T GOT NO BALLS LEFT!',
];

const inAndOfResponse = [
  'In and of itself?',
];

const responses = {
  tingsResponse,
  owlResponse,
  hourResponse,
  ballsResponse,
  inAndOfResponse,
};

function buildResponses() {
  const allResponses = [];

  allResponses.tings = [];
  responses.tingsResponse.forEach((tingsResp) => {
    allResponses.tings.push(tingsResp);
  });
  allResponses.owl = [];
  responses.owlResponse.forEach((owlResp) => {
    allResponses.owl.push(owlResp);
  });
  allResponses.hour = [];
  responses.hourResponse.forEach((hourResp) => {
    allResponses.hour.push(hourResp);
  });
  allResponses.balls = [];
  responses.ballsResponse.forEach((ballsResp) => {
    allResponses.balls.push(ballsResp);
  });
  allResponses.inAndOf = [];
  responses.inAndOfResponse.forEach((inAndOfResp) => {
    allResponses.inAndOf.push(inAndOfResp);
  });

  // console.dir(allResponses);
  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  return responses;
}


