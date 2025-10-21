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
  'Look at me! Look at me! DON’T LOOK AT ME!',
  'Apple don’t grapple the Mapple rudeboy',
  'A fire, a fight or a pregnancy before 10.00pm or your money back.',
  'Anyone for a White Malcolm?',
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
  'Mmmm... malty',
  'Is she high street?',
  'He’s so jealous, he once blinded a man outside QFC with a side of barbeque beans.',
  'Is that Ross Kemp weeing on people in a skip?\nHe only wets on the bad gangs, Christopher.',
  'Yeah. I’m smashing that all over the fucking shop. As well as smashing others all over other shops all the fucking time.',
  'What? Black man Graham?',
  'When is there ever a black man called Graham?',
  'We roll out this kind of jester shit, like all day long son, you’ll get used to it.',
  'Don’t run, he’ll outpace you. Sit down!\nDon’t sit down he’ll view it a sign of weakness.',
  'Our greatest fear is that we are powerful beyond measure. Who said that?',
  'When you’ve got the fire of the entrepreneur in your belly, the question is what is it you’re not going to da? Yeah?',
  'So you told her to keep her shoes on? Nice!\nYeah, I don’t wanna see her dry foot, innit?',
  'Only, it wasn’t empty, yeah. It was full. Full of ganj.\nWeed?\nNo, Jerwayne. Ganj.',
  'Have you boys heard of the skunk?',
  'I been baaakin’',
  'What baaakin’ a barm cake, like a big bloody bugger?',
  'Muffins. Skunky muffins. Skuffins.',
  'It got et.\nIt got et?\nIt got et.',
  'Bruv, shut you mout. When us mans were youts, yeah? Man’d blaze a quartz a day, standard.',
  'If the girl has to wear a polo shirt to work, no matter how fit she is, I can’t move to that.',
  'WHAT? I’m a complex man.',
  'NEVER point your fist at a black man, I’m ashamed of you!',
  'Do the moosic.',
  'We went ice skating once and we had to leave after ten minutes because you had a premonition someone was going to get stabbed during the under-17s free-skate session.',
  'Have a nice time enjoying the rest of your day today please sir. Safe.',
  'It’s like living with a dirty Cato.',
  'Fuck off Sandra.',
  'You been on the Haribo, innit? You got Haribosis, innit?',
  'I’ve got a head full of dreams... anna arm fulla holes, Lance.',
  'What you sayin’ now, rudeboy? My yoot’s gone mute.',
  'Free balloon and goody bag? Yes please. Free glass of wine and shake hands with over-sized mascot? Yes please. Free after hours tour of the stock room and complimentary finger buffet? Yes. PLEASE.',
  'I... am your dad.\nI thought you said Lance was my dad?\n...\nI’m your *real* dad.',
  'That bredda better not step to me again today, bruv, trust me I’ll go RAGGO.',
  'Ooh, cava...\nYeah, it’s French for champagne.',
  'YOU WANKER!\nShe didn’t mean that\nCUT PRICE CUNT!\nShe did mean that',
  'Pollo con pesto for the lady... spicy sausage penne for DA MAN',
  'Man a waste man.',
  'What, a shit and run?',
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
  'I BEEN SHOT IN MY BAWS',
  'ONE OF MY BAWS HAS COME OFF',
  'RAZZ PRINCE AIN’T GOT NO BAWS LEFT!',
];

const inAndOfResponse = [
  'In and of itself?',
];

const expectResponse = [
  'https://media.tenor.com/_d0P3yFI1XAAAAAM/expect-the-unexpected-unexpected.gif',
  'Expect the unexpected',
];

const responses = {
  tingsResponse,
  owlResponse,
  hourResponse,
  ballsResponse,
  inAndOfResponse,
  expectResponse,
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
  allResponses.expect = [];
  responses.expectResponse.forEach((expectResp) => {
    allResponses.expect.push(expectResp);
  });


  // console.dir(allResponses);
  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  return responses;
}


