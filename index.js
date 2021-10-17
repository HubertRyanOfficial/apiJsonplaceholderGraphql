const { ApolloServer } = require("apollo-server");
require("dotenv").config();

const res = require("./src/res");
const type = require("./src/schema");

const server = new ApolloServer({
  typeDefs: type,
  resolvers: res,
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
  console.log(`🚀 Server ready ${url}`);
});
