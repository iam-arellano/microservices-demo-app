const express = require("express");
const path = require("path"); // safer way to handle file paths
const app = express();

const products = {
  1: { name: "Laptop", desc: "High performance laptop." },
  2: { name: "Mouse", desc: "Wireless mouse." },
};

// Serve static files (CSS, JS, images) from public folder
app.use(express.static(path.join(__dirname, "public")));

// Serve details.html at the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "details.html"));
});

// API endpoint to get product details
app.get("/api/details", (req, res) => {
  const id = req.query.id;
  res.json(products[id] || null);
});

app.listen(3003, () => console.log("Details Service running at http://localhost:3003"));
