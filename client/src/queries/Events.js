import gql from "graphql-tag";

export default gql`
  {
    event {
      id
      fighter
      eventTitle
    }
  }
`;
