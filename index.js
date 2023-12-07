const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML, CSS, and JS files
app.use(express.static('public'));

// Handle code generation requests
app.post('/generate-code', async (req, res) => {
  const { description } = req.body;

  // Replace 'YOUR_DEEPAI_API_KEY' with your actual DeepAI API key
  const apiKey = 8977a908-6987-4cb2-bfde-6a4f6dcfb5d9;
  const apiUrl = 'https://api.deepai.org/codex';

  try {
    const response = await axios.post(
      apiUrl,
      { prompt: description },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
      }
    );

    const code = response.data.choices[0].text.trim();
    res.json({ code });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
