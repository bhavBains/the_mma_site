const graphql = require("graphql");

const fakeData = {
  event: [
    {
      id: "5e98f5729c89c17c0563aabf",
      fighter: "Ruby Nelson",
      eventName: "KLUGGER",
    },
    {
      id: "5e98f5727e5ec38797c379e5",
      fighter: "Ruth Santana",
      eventName: "REALMO",
    },
    {
      id: "5e98f572560d5aa64cf94f7d",
      fighter: "Woodard Everett",
      eventName: "COMVERGES",
    },
    {
      id: "5e98f572400971e281506d8e",
      fighter: "Sonya Acosta",
      eventName: "HOPELI",
    },
    {
      id: "5e98f57282418f91ead3dc88",
      fighter: "Khabib nurmagadove",
      eventName: "ufc 249",
    },
    {
      id: "5e98f57282418f91ead3dc",
      fighter: "Khabib nurmagadove",
      eventName: "ufc 249",
    },
  ],
};

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = graphql;

const EventsType = new GraphQLObjectType({
  name: "Events_upcoming",
  fields: () => ({
    id: { type: GraphQLString },
    eventName: { type: GraphQLString },
    weightClass: { type: GraphQLString },
    fighterNameRed: { type: GraphQLString },
    fighterImageRed: { type: GraphQLString },
    fighterNameBlue: { type: GraphQLString },
    fighterImageBlue: { type: GraphQLString },
    dateAndTime: { type: GraphQLString },
    eventLocation: { type: GraphQLString },
  }),
});

const EventDetailsType = new GraphQLObjectType({
  name: "Event_Details",
  fields: () => ({
    id: { type: GraphQLString },
    eventName: { type: GraphQLString },
    weightClass: { type: GraphQLString },
    fighterNameRed: { type: GraphQLString },
    fighterImageRed: { type: GraphQLString },
    fighterNameBlue: { type: GraphQLString },
    fighterImageBlue: { type: GraphQLString },
    dateAndTime: { type: GraphQLString },
    eventLocation: { type: GraphQLString },
  }),
});

const FighterType = new GraphQLObjectType({
  name: "Fighter",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    upcomingEvents: {
      type: new GraphQLList(EventsType),
      resolve(parentValue, args) {
        return fakeData.event;
      },
    },
    pastEvents: {
      type: new GraphQLList(EventsType),
      resolve(parentValue, args) {
        return fakeData.event;
      },
    },
    eventDetails: {
      type: EventDetailsType,
      resolve(parentValue, args) {
        return fakeData.event;
      },
    },
    fighter: {
      type: FighterType,
      resolve(parentValue, args) {
        return {
          id: "1",
          name: "Jon Jones",
        };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
