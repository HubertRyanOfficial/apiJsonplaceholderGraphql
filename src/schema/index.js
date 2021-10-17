const { gql } = require("apollo-server");

const typeDefs = gql`
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }

  type Geo {
    lat: String
    lng: String
  }

  type Company {
    name: String
    catchPhrase: String
    bs: String
  }

  type User {
    id: Int
    username: String
    email: String
    address: Address
    phone: String
    website: String
    company: Company
    posts: [Post]
  }

  type Post {
    userId: Int
    id: Int
    title: String
    body: String
  }

  type Query {
    users: [User]
    user(userId: Int): User
  }
`;

module.exports = typeDefs;
