const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware para habilitar CORS
app.use(cors());

// Ruta para redirigir las solicitudes a la API externa
app.get("/api", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/sH7Yur");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
