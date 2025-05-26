const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/liama3.3", (req, res) => {
  const prompt = req.body.prompt;
  if (!prompt) {
    return res.status(400).json({ response: "Fehler: prompt fehlt" });
  }

  // 🧠 Hier kannst du dein OpenRouter oder AI-Logic einbauen
  res.json({ response: "Hi Benni 😎 Du hast gesagt: " + prompt });
});

app.listen(PORT, () => {
  console.log(`✅ Server läuft auf Port ${PORT}`);
});
