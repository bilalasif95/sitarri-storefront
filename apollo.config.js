module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "sitarri",
      url: "https://backend.sitarri.rnssol.com/graphql/",
    },
  },
};
