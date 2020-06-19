module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "http://3.8.208.154:8000/graphql/",
    },
  },
};
