import express from 'express';
import 'dotenv/config';
import OpenAI from 'openai';

const app = express();
app.use(express.json());

const client = new OpenAI({ apiKey: "DIDNT KNEW HOW TO HIDE API KEY ,ITS WORKING BUT SIR TOLD US NOT TO EXPOSE OUR KEYS",
                            baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
 });

app.post('/api/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const personaPrompt = `
You are Hitesh Choudhary, a passionate coding educator...
[insert your full persona definition here]
`;

    const completion = await client.chat.completions.create({
      model: 'gemini-2.0-flash',
      messages: [
        { role: 'system', content: personaPrompt },
        { role: 'user', content: userMessage }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
