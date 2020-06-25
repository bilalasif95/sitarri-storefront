module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "sitarri",
      url: "https://backend.sitarri.rnssol.com/graphql/"
    }
  }
};
