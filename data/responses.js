const tingsResponse = [
  'Manaman’s a wagamama man every day famalam.',
  'A owl!',
  'A hour!',
  'Do you like the films of Jude Law?',
  'You go tell Dr Dre dat, man will fuck you up innit!',
  'Oh my giddy giddy gosh!',
  'Fuck off Nan. Go on, do one',
  'Nose bone up in your brain and shit',
  'Welcome to Club Cheddar',
  'Gentlemens! Welcome to the Elite Selling Crew!',
  'Cos this shit be patent',
  'We don’t run on the high street. We run the high street.',
  'If man say him a ting, then him a ting',
  'Mans operating on less money than Kerry Katona right now',
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

const responses = {
  tingsResponse,
  owlResponse,
  hourResponse,
  ballsResponse,
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

  // console.dir(allResponses);
  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  return responses;
}


