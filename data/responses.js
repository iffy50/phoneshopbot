const ironyResponse = [
  'An old man turned ninety-eight. He won the lottery and died the next day.',
  'It’s a black fly in your Chardonnay.',
  'It’s a death row pardon two minutes too late.',
  'It’s like rain on your wedding day.',
  'It’s a free ride when you’ve already paid.',
  'It’s the good advice that you just didn’t take.',
  'A traffic jam when you’re already late.',
  'A "No Smoking" sign on your cigarette break.',
  'It’s like ten thousand spoons when all you need is a knife.',
  'It’s meeting the man of my dreams and then meeting his beautiful wife.',
];

const responses = {
  ironyResponse,
};

function buildResponses() {
  const allResponses = [];

  allResponses.irony = [];
  responses.ironyResponse.forEach((ironyResp) => {
    allResponses.irony.push(ironyResp);
  });

  // console.dir(allResponses);
  return allResponses;
}

module.exports = function () {
  const responses = buildResponses();
  return responses;
}
