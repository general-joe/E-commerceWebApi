const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// middlewares use here

app.use(bodyParser.json());

require("dotenv").config();
const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: "Hairdresser",
    image: "some_URL",
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const newProducts = req.body;
  console.log(newProducts);
  res.send(newProducts);
});

//password= 55Mp7n5656ZdvjKs
//connection string=mongodb+srv://eshop:55Mp7n5656ZdvjKs@eshop.eiiw2tr.mongodb.net/?retryWrites=true&w=majority&appName=eshop
app.listen(3000, () => {
  console.log(api);
  console.log("Server is running on http://localhost:3000");
});
