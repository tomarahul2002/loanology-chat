const express = require("express");

const app = express();
const PORT = 3000;

// ENV variable
const DIRECT_LINE_SECRET = process.env.DIRECT_LINE_SECRET;

app.use(express.static("public"));

app.get("/api/token", async (req, res) => {
  try {
    const response = await fetch(
      "https://directline.botframework.com/v3/directline/tokens/generate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${DIRECT_LINE_SECRET}`
        }
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Token generation failed" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
