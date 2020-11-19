module.exports = {
  server: {
    port: 3000
  },
  database: {
    uri: "mongodb://localhost:27017/myDatabase",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  }
}