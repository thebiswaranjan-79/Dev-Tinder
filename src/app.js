const app = require("express");

const app = express();

app.use('/hello', (req, res) => {
  res.send("Hello from the Server! ");
});

app.listen(3000, () => {
  console.log("Server is Listining at Port 3000.....");
});
