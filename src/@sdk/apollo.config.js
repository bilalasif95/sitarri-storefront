module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "sitarri",
      url: "https://dev-backend.sitarri.co.uk/graphql/"
    }
  }
};
