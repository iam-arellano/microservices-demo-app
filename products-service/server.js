const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 35000 },
  { id: 2, name: "Mouse", price: 500 },
];

app.get("/api/products", (req, res) => res.json(products));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/products.html");
});

app.listen(3002, () => console.log("Products Service running at http://localhost:3002"));
