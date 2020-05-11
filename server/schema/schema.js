const graphql = require("graphql");

const fakeData = {
  event: [
    {
      id: "5e98f5729c89c17c0563aabf",
      fighter: "Ruby Nelson",
      eventTitle: "KLUGGER",
    },
    {
      id: "5e98f5727e5ec38797c379e5",
      fighter: "Ruth Santana",
      eventTitle: "REALMO",
    },
    {
      id: "5e98f572560d5aa64cf94f7d",
      fighter: "Woodard Everett",
      eventTitle: "COMVERGES",
    },
    {
      id: "5e98f572400971e281506d8e",
      fighter: "Sonya Acosta",
      eventTitle: "HOPELI",
    },
    {
      id: "5e98f57282418f91ead3dc88",
      fighter: "Khabib nurmagadove",
      eventTitle: "ufc 249",
    },
    {
      id: "5e98f57282418f91ead3dc88",
      fighter: "Khabib nurmagadove",
      eventTitle: "ufc 249",
    },
  ],
};

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
} = graphql;

const EventType = new GraphQLObjectType({
  name: "Events",
  fields: () => ({
    id: { type: GraphQLString },
    eventTitle: { type: GraphQLString },
    fighter: { type: GraphQLString },
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
    events: {
      type: new GraphQLList(EventType),
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
