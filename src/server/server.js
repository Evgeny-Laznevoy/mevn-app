const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const port = 3000;
mongoose.Schema.Types.Boolean.convertToFalse.add("");

const app = express();

// app.set("port", 3000);

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("[OK] DB is connected"))
  .catch((err) => console.error(err));

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/records", require("./routes/records"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
