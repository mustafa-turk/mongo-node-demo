const express = require("express");

const app = express();

app.use(express.json());

const documentsRouter = require("./routes/documents");
app.use("/documents", documentsRouter);

require('./services/database');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started at localhost:${PORT}`);
});