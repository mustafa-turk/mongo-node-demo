const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const DB_CONNECTION_URI = "mongodb://localhost:27017/myDatabase";
mongoose.connect(DB_CONNECTION_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const { connection: dbConnection } = mongoose;

dbConnection.on('open', () => {
  console.log('connected');
});

const documentsRouter = require("./routes/documents");
app.use("/documents", documentsRouter);

app.listen(3000, () => {
  console.log('Server started');
});