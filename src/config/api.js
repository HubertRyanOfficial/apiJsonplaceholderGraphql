const axios = require("axios").default;

const baseURL = "https://jsonplaceholder.typicode.com/";
const api = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

module.exports = api;
