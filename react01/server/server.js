// server.js
import express from "express";
import OpenAI from "openai";

const app = express();
const openai = new OpenAI({
  apiKey:
    "sk-svcacct-qgOuc5DEPWcU5nLBqxFBZuajru_HPpkIxUebpeOTKyPV85rdjZwh384SZW8yihry3T3BlbkFJBrR2un80-Xib5PJ_m2AcUOSfiwnlhrlBgGRUqrRd8lYsgR9ZwpXGyrZHyBtbsuwAA",
});

app.use(express.json());

app.post("/translate", async (req, res) => {
  const { text, targetLanguage } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: `Translate text into ${targetLanguage}.` },
        { role: "user", content: `Translate: "${text}".` },
      ],
    });

    const translation = response.choices[0].message.content.trim();
    res.json({ translation });
  } catch (error) {
    console.error("Ошибка при переводе:", error);
    res.status(500).json({ error: "Ошибка при переводе" });
  }
});

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
