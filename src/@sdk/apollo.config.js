module.exports = {
  client: {
    includes: ["./queries/*.ts", "./mutations/*.ts", "./fragments/*.ts"],
    service: {
      name: "saleor",
      url: "http://3.8.208.154:8000/graphql/"
    }
  }
};
