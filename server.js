const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// JSON Server URL
const jsonServerUrl = "http://localhost:3001/numbers";

// Rota POST para atualizar o count de um número
app.post("/count", async (request, response) => {
  const { number } = request.body;

  if (typeof number !== "number") {
    return response.status(400).json({ error: "O número enviado deve ser um número válido!" });
  }

  try {
    const res = await axios.get(`${jsonServerUrl}?number=${number}`);
    const data = res.data;

    if (data.length > 0) {
      const existingNumber = data[0];
      existingNumber.count += 1;

      await axios.put(`${jsonServerUrl}/${existingNumber.id}`, existingNumber);
      response.json({ message: "Número atualizado com sucesso!", number: existingNumber });
    } else {
      const newNumber = { number, count: 1 };

      await axios.post(jsonServerUrl, newNumber);
      response.json({ message: "Número criado com sucesso!", number: newNumber });
    }
  } catch (error) {
    console.error("Erro ao interagir com o JSON Server:", error.message);
    response.status(500).json({ error: "Erro ao interagir com o JSON Server" });
  }
});

// Rota GET para buscar o count de um número
app.get("/count", async (request, response) => {
  const { number } = request.query;

  if (!number || isNaN(Number(number))) {
    return response.status(400).json({ error: "O número enviado deve ser válido!" });
  }

  try {
    const res = await axios.get(`${jsonServerUrl}?number=${number}`);
    const data = res.data;

    if (data.length > 0) {
      const existingNumber = data[0];
      response.json({ number: existingNumber.number, count: existingNumber.count });
    } else {
      response.status(404).json({ error: `O número ${number} não foi encontrado no banco de dados.` });
    }
  } catch (error) {
    console.error("Erro ao interagir com o JSON Server:", error.message);
    response.status(500).json({ error: "Erro ao interagir com o JSON Server" });
  }
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
