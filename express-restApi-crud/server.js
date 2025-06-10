const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3000;

let PRODUCTS = [
  {
    "name": "SOUP",
    "price": 4000
  }
];

app.use(morgan("dev"));
app.get("/products", (req, res) => {
  res.json(PRODUCTS);
});

app.use(express.json());

app.post("/products", (req, res) => {
  const newProduct = { ...req.body, id: PRODUCTS.length + 1 };
  PRODUCTS.push(newProduct);
  res.send(newProduct);
});

app.delete("/products/:id", (req, res) => {
  const productDelete = PRODUCTS.filter(p => p.id !== parseInt(req.params.id))
  if (productDelete) {
    console.log(productDelete)
    res.send("Producto eliminado./filtrado");
  } else {
    res.status(404).json({ message: "Producto no existe" });
  } 
  res.send("ELIMINANDO PRODUCTOS");
});

app.put("/products/:id", (req, res) => {
  const newData = req.body
  PRODUCTS = PRODUCTS.map(p => p.id === parseInt(req.params.id) ? {...p, ...newData} : p)
  if (PRODUCTS) {
    console.log(PRODUCTS)
    res.send("Producto actualizado");
  } else {
    res.status(404).json({ message: "Producto no existe" });
  }
});

app.get("/products/:id", (req, res) => {
  const productFound = PRODUCTS.find((product) => product.id === parseInt(req.params.id));
  if (productFound) {
    res.send(productFound);
  } else {
    res.status(404).json({ message: "Producto no existe" });
  }
});

app.listen(PORT, () => {
  console.log("SERVER ON PORT", PORT);
});
