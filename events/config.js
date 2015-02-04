module.exports = {
  meetupParams: {
    key: process.env.MEETUP_API_KEY,
    country: 'SG',
    state: 'SG',
    city: 'Singapore',
    category_id: 34, //Tech category
    page: 500,
    fields: 'next_event'
  },
  blacklistGroups: [
    9319232,
    13903282,
    15867652,
    15237742,
    10989282,
    13917282,
    12117622,
    17604562
  ],
  blacklistWords: [
    'business',
    'networking',
    'UNICOM'
  ],
  auth0: {
    domain: 'webuildsg.auth0.com',
    clientId: process.env.WEBUILD_AUTH0_CLIENT_ID,
    clientSecret: process.env.WEBUILD_AUTH0_CLIENT_SECRET
  },
  eventbrite: {
    token: process.env.EVENTBRITE_TOKEN,
    blacklistOrganiserId: [
      4456586249,
      7875748007,
      7872992855,
      7606683649,
      7554720435,
      7598389997
    ]
  }
};
