module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "sitarri",
      url: "https://dev-backend.sitarri.co.uk/graphql/",
    },
  },
};
