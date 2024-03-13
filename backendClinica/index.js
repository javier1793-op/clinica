
const express = require("express");

const apiRouter = require("./Routes/api");
const app = express();
const PORT = process.env.PORT || 3000;



app.use("/api", apiRouter)


app.get("/", (req, res) => {
  res.json('bienvendido al servidor de clinica');
});
app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, () => {
  console.log(`Server is runnig on port: ${PORT}`);
});