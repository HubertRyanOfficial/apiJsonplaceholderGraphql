const api = require("../config/api");

const resolvers = {
  Query: {
    async users(_, args) {
      const response = await api.get("users/");
      return response.data;
    },
    async user(_, { userId }) {
      const response = await api.get(`users/${userId}`);
      return response.data;
    },
  },
  User: {
    async posts(context, args) {
      console.log(context);
      const response = await api.get(`posts?userId=${context.id}`);
      return response.data;
    },
  },
};

module.exports = resolvers;
