const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/liama3.3", (req, res) => {
  const prompt = req.body.prompt;
  // KI-Antwort hier einbauen
  res.json({ response: "Antwort zu: " + prompt });
});

app.get("/", (req, res) => {
  res.send("Liama API läuft 😎");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server läuft auf Port " + PORT));
